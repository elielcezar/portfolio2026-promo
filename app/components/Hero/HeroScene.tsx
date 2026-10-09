"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import type { PerspectiveCamera, Quaternion, Vector3, WebGLRenderer } from "three";

/** Só em telas maiores que 1300px (mesmo valor do @media em Hero.css) */
const DESKTOP_QUERY = "(min-width: 1301px)";

function subscribeDesktop(onChange: () => void) {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const COLOR = 0xa8a8a8;
const OPACITY = 0.4;

/**
 * O canvas cobre a largura toda da tela, atrás do conteúdo, e as formas ficam
 * centradas num ponto à direita. A câmera usa um enquadramento descentralizado
 * (setViewOffset): é como recortar uma visão maior centrada nas formas, então
 * a perspectiva não distorce e nada é cortado.
 */
const CAMERA_Z = 30;
/** Pixels por unidade da cena no plano z = 0 (1,4× a versão original: o dobro, menos 30%) */
const SCALE = 1.4 * (350 / (CAMERA_Z * Math.tan((95 / 2) * (Math.PI / 180))));
/** Centro das formas: altura fixa na página e no meio da camada (60% da direita) */
const CENTER_Y = 490;
const centerX = (width: number) => width / 2;

/** Ajusta canvas e câmera ao tamanho da camada, mantendo as formas no centro */
function fitCamera(camera: PerspectiveCamera, renderer: WebGLRenderer, width: number, height: number) {
  const cx = centerX(width);
  const fullWidth = 2 * Math.max(cx, width - cx);
  const fullHeight = 2 * Math.max(CENTER_Y, height - CENTER_Y);
  camera.fov = (2 * Math.atan(fullHeight / 2 / SCALE / CAMERA_Z) * 180) / Math.PI;
  camera.aspect = fullWidth / fullHeight;
  camera.setViewOffset(fullWidth, fullHeight, fullWidth / 2 - cx, fullHeight / 2 - CENTER_Y, width, height);
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

type Shape = "sphere" | "cube" | { text: string };

/**
 * Ordem das formas. Cada uma fica SHAPE_SECONDS na tela. O cubo
 * fica entre as palavras para cada uma surgir de uma "explosão"; "\n" quebra
 * a palavra em linhas. "sphere" também é aceito.
 */
const SEQUENCE: Shape[] = [
  { text: "Sites" },
  "cube",
  { text: "E-Commerce" },
  "cube",
  { text: "Design" },
  "cube",
];

const PITCH_SEGMENTS = 60;
const ELEVATION_SEGMENTS = PITCH_SEGMENTS / 2;
const PARTICLES = PITCH_SEGMENTS * ELEVATION_SEGMENTS;
const RADIUS = 16;

/** Tamanho máximo das palavras, em unidades da cena (a esfera tem 32 de diâmetro) */
const TEXT_MAX_WIDTH = 46;
const TEXT_MAX_HEIGHT = 26;

/** Duração de cada forma; segue o relógio, então vale para qualquer taxa de quadros */
const SHAPE_SECONDS = 20;

/** Quanto o mouse inclina a cena: 1 nas formas abstratas (como no original), menos nas palavras */
const WORD_TILT = 0.4;

/**
 * Flutuação contínua, independente do mouse: a cena sobe e desce (amplitude em
 * unidades da cena; 1,4 ≈ 20px) e balança de leve (radianos). Os períodos são
 * diferentes entre si para o movimento não parecer repetitivo.
 */
const FLOAT_AMPLITUDE = 1.4;
const FLOAT_SECONDS = 6;
const SWAY = 0.08;

/**
 * Clique no hero: as partículas a até BLAST_RADIUS px do clique são empurradas
 * para fora (mais forte quanto mais perto) e a cena pula para a próxima forma.
 */
const BLAST_RADIUS = 350;
const BLAST_FORCE = 0.8;
const CLICK_COOLDOWN = 800;
/** Cliques nesses elementos são do conteúdo, não da animação */
const INTERACTIVE = "a, button, input, textarea, select, label, summary";

/**
 * Pontos de uma palavra: desenha o texto num canvas 2D invisível, lê os pixels
 * pintados e sorteia `count` deles, convertidos para o plano da cena (z ≈ 0).
 */
function sampleText(text: string, count: number, family: string) {
  const lines = text.split("\n");
  const size = 200;
  const lineHeight = size * 0.95;
  const pad = 20;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  const font = `800 ${size}px ${family}`;
  ctx.font = font;
  const width = Math.ceil(Math.max(...lines.map((l) => ctx.measureText(l).width))) + pad * 2;
  const height = Math.ceil(lineHeight * lines.length) + pad * 2;
  canvas.width = width;
  canvas.height = height;

  // Mudar o tamanho do canvas zera o contexto; precisa configurar de novo
  ctx.font = font;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  lines.forEach((line, i) => ctx.fillText(line, width / 2, pad + lineHeight * (i + 0.5)));

  const pixels = ctx.getImageData(0, 0, width, height).data;
  const filled: [number, number][] = [];
  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x += 2) {
      if (pixels[(y * width + x) * 4 + 3] > 128) filled.push([x, y]);
    }
  }

  // Embaralha (Fisher-Yates) e pega os primeiros; se faltar ponto, repete
  for (let i = filled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filled[i], filled[j]] = [filled[j], filled[i]];
  }

  const scale = Math.min(TEXT_MAX_WIDTH / width, TEXT_MAX_HEIGHT / height);
  return Array.from({ length: count }, (_, i) => {
    const [x, y] = filled[i % filled.length];
    return { x: (x - width / 2) * scale, y: -(y - height / 2) * scale, z: (Math.random() - 0.5) * 0.6 };
  });
}

/**
 * Experimento: partículas que alternam entre cubo e palavras, girando, flutuando
 * e reagindo ao mouse e ao clique. Baseado em _test_threejs/v1.js.
 */
export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  // No servidor é sempre false; no navegador segue a media query
  const enabled = useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false
  );

  useEffect(() => {
    const mount = mountRef.current;
    if (!enabled || !mount) return;

    let disposed = false;
    let teardown = () => {};

    // three.js só é baixado aqui (import dinâmico), ou seja, em telas grandes.
    // As palavras usam a Bricolage do site; espera a fonte antes de amostrar.
    const family = getComputedStyle(document.documentElement).getPropertyValue("--font-bricolage").trim() || "sans-serif";
    Promise.all([import("three"), document.fonts.load(`800 100px ${family}`).catch(() => {})]).then(([THREE]) => {
      if (disposed) return;

      let mousePos = { x: 0.5, y: 0.5 };
      const onMouseMove = (event: MouseEvent) => {
        mousePos = { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight };
      };
      document.addEventListener("mousemove", onMouseMove);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(95, mount.clientWidth / mount.clientHeight, 0.1, 1000);
      camera.position.z = CAMERA_Z;

      // alpha: fundo transparente, para a cena ficar sobre o branco da página
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setClearColor(0x000000, 0);
      // Canvas grande: limita a densidade em 2x para não pesar em telas retina
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      fitCamera(camera, renderer, mount.clientWidth, mount.clientHeight);
      mount.appendChild(renderer.domElement);

      const boxSize = 0.2;
      const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
      const material = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, color: COLOR, opacity: OPACITY, side: THREE.DoubleSide });

      const side = Math.pow(PARTICLES, 1 / 3);
      const posInBox = (place: number) => ((place / side) - 0.5) * RADIUS * 1.2;

      const words = new Map<string, { x: number; y: number; z: number }[]>();
      for (const shape of SEQUENCE) {
        if (typeof shape === "object" && !words.has(shape.text)) words.set(shape.text, sampleText(shape.text, PARTICLES, family));
      }

      const parentContainer = new THREE.Object3D();
      scene.add(parentContainer);

      // Todas as partículas são instâncias de um único mesh: uma chamada de
      // desenho só. O estado de cada uma fica nestes arrays, pelo índice.
      const mesh = new THREE.InstancedMesh(geometry, material, PARTICLES);
      mesh.frustumCulled = false; // as instâncias se movem; o recorte automático erraria
      parentContainer.add(mesh);
      const positions: Vector3[] = [];
      const speeds: Vector3[] = [];
      const destinations: Vector3[][] = [];
      const rotations: Quaternion[] = [];

      // Cada partícula tem um destino por forma da SEQUENCE, na mesma ordem
      let index = 0;
      for (let p = 0; p < PITCH_SEGMENTS; p++) {
        const pitch = Math.PI * 2 * p / PITCH_SEGMENTS;
        for (let e = 0; e < ELEVATION_SEGMENTS; e++, index++) {
          const elevation = Math.PI * ((e / ELEVATION_SEGMENTS) - 0.5);

          const sphere = new THREE.Vector3(
            (Math.cos(pitch) * Math.cos(elevation)) * RADIUS,
            Math.sin(elevation) * RADIUS,
            (Math.sin(pitch) * Math.cos(elevation)) * RADIUS
          );
          const n = index + 1;
          const cube = new THREE.Vector3(
            posInBox(n % side),
            posInBox(Math.floor(n / side) % side),
            posInBox(Math.floor(n / Math.pow(side, 2)) % side)
          );

          destinations.push(SEQUENCE.map((shape) => {
            if (shape === "sphere") return sphere;
            if (shape === "cube") return cube;
            const point = words.get(shape.text)![index];
            return new THREE.Vector3(point.x, point.y, point.z);
          }));
          positions.push(cube.clone()); // começa no cubo, como no original
          speeds.push(new THREE.Vector3());
          // Rotação fixa e aleatória (antes cada cubinho apontava para o destino)
          rotations.push(new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.random() * 6.3, Math.random() * 6.3, 0)));
        }
      }

      const FULL_TURN = Math.PI * 2;
      let phase = 0;
      let spin = 0; // rotação em y
      let tilt = 1; // quanto o mouse inclina a cena (1 = como no original)

      const ONE = new THREE.Vector3(1, 1, 1);
      const matrix = new THREE.Matrix4();
      const diff = new THREE.Vector3();

      let frame = 0;
      let lastTime = 0;
      const render = (time: number) => {
        // Segundos desde o quadro anterior; o teto evita um salto ao voltar de
        // uma pausa (aba em segundo plano, hero fora da tela)
        const dt = lastTime ? Math.min((time - lastTime) / 1000, 0.1) : 0;
        lastTime = time;
        const frames = dt * 60; // ajustes que antes eram "por quadro a 60fps"
        const seconds = time / 1000;

        phase += dt / SHAPE_SECONDS;
        const step = Math.floor(phase) % SEQUENCE.length;
        const isWord = typeof SEQUENCE[step] === "object";

        // Mesma física do original (que era por quadro a 60fps), escalada
        // pelo tempo real: a velocidade não depende da taxa de quadros
        const drag = Math.pow(1.02, -frames);
        for (let i = 0; i < PARTICLES; i++) {
          diff.subVectors(destinations[i][step], positions[i]).multiplyScalar(frames / 400); // acelera em direção ao destino
          speeds[i].multiplyScalar(drag).add(diff); // arrasto
          positions[i].addScaledVector(speeds[i], frames);
          mesh.setMatrixAt(i, matrix.compose(positions[i], rotations[i], ONE));
        }
        mesh.instanceMatrix.needsUpdate = true;

        // Nas palavras o giro para de frente para a câmera e o mouse inclina
        // menos, para dar para ler; nas formas volta ao giro contínuo
        if (isWord) {
          const facing = Math.round(spin / FULL_TURN) * FULL_TURN;
          spin += (facing - spin) * Math.min(0.04 * frames, 1);
          tilt += (WORD_TILT - tilt) * Math.min(0.04 * frames, 1);
        } else {
          spin += 0.006 * frames;
          tilt += (1 - tilt) * Math.min(0.04 * frames, 1);
        }

        // Flutuação (sobe e desce + balanço), somada ao giro e ao mouse
        const wave = (period: number) => Math.sin((seconds / period) * FULL_TURN);
        parentContainer.position.y = wave(FLOAT_SECONDS) * FLOAT_AMPLITUDE;
        parentContainer.rotation.y = spin + wave(FLOAT_SECONDS * 1.9) * SWAY;
        parentContainer.rotation.x = (mousePos.y - 0.5) * Math.PI * tilt + wave(FLOAT_SECONDS * 1.4) * SWAY;
        parentContainer.rotation.z = (mousePos.x - 0.5) * Math.PI * tilt;

        renderer.render(scene, camera);
        frame = requestAnimationFrame(render);
      };

      // Clique: explosão a partir do ponto clicado + próxima forma
      let lastClick = 0;
      const onClick = (event: MouseEvent) => {
        const target = event.target as Element | null;
        if (!target?.closest("#topo") || target.closest(INTERACTIVE)) return;
        if (window.getSelection()?.toString()) return; // estava selecionando texto
        const now = performance.now();
        if (now - lastClick < CLICK_COOLDOWN) return;
        lastClick = now;

        phase = Math.floor(phase) + 1;

        // Compara na tela: projeta cada partícula no canvas e mede a distância
        // até o clique; o empurrão é convertido para o espaço girado da cena
        const rect = renderer.domElement.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;
        const toLocal = parentContainer.quaternion.clone().invert();
        const projected = new THREE.Vector3();
        for (let i = 0; i < PARTICLES; i++) {
          projected.copy(positions[i]).applyMatrix4(parentContainer.matrixWorld).project(camera);
          const dx = ((projected.x + 1) / 2) * rect.width - clickX;
          const dy = ((1 - projected.y) / 2) * rect.height - clickY;
          const distance = Math.hypot(dx, dy);
          if (distance > BLAST_RADIUS) continue;

          const force = BLAST_FORCE * (1 - distance / BLAST_RADIUS);
          const direction = new THREE.Vector3(dx, -dy, (Math.random() - 0.5) * distance).normalize();
          speeds[i].add(direction.applyQuaternion(toLocal).multiplyScalar(force));
        }
      };
      document.addEventListener("click", onClick);

      // Só anima com o hero na tela
      const visibility = new IntersectionObserver(([entry]) => {
        cancelAnimationFrame(frame);
        if (entry.isIntersecting) frame = requestAnimationFrame(render);
      });
      visibility.observe(mount);

      const resize = new ResizeObserver(() => {
        if (!mount.clientWidth || !mount.clientHeight) return;
        fitCamera(camera, renderer, mount.clientWidth, mount.clientHeight);
      });
      resize.observe(mount);

      teardown = () => {
        cancelAnimationFrame(frame);
        visibility.disconnect();
        resize.disconnect();
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("click", onClick);
        mesh.dispose();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        mount.removeChild(renderer.domElement);
      };
    });

    return () => {
      disposed = true;
      teardown();
    };
  }, [enabled]);

  return (
    // A camada ocupa os 60% da direita da página, atrás do conteúdo (Hero.css)
    <div className="hero-scene-layer" aria-hidden>
      <div ref={mountRef} className="hero-scene" />
    </div>
  );
}
