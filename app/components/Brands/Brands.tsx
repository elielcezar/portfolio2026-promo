import Image from "next/image";
import "./Brands.css";

const brands = [
  { name: "Lojas Americanas", src: "/clients/logo-americanas.webp", width: 300, height: 61 },
  { name: "McDonald's", src: "/clients/logo-mc4.webp", width: 1200, height: 1050 },
  { name: "Subway", src: "/clients/logo-sub.webp", width: 300, height: 61 },
  { name: "Gazeta do Povo", src: "/clients/logo-gazeta2.webp", width: 200, height: 148 },
  { name: "Buscapé", src: "/clients/logo-buscape.webp", width: 230, height: 151 },
  { name: "Uninter", src: "/clients/logo-uninter.webp", width: 600, height: 354 },
];

/** Quantas vezes a lista se repete dentro de cada cópia; ver o comentário abaixo */
const REPEAT = 4;

/**
 * Faixa infinita: a trilha tem duas cópias iguais e anda -50%, então quando a
 * primeira sai inteira a segunda está no mesmo lugar e a animação recomeça sem
 * salto. Cada cópia precisa ser mais larga que a tela, senão sobra um vão em
 * branco antes do reinício; por isso a lista se repete REPEAT vezes dentro de
 * cada cópia (~4260px, cobre até telas 4K). Só os seis primeiros logos são
 * lidos por leitores de tela; o resto é decorativo.
 */
export default function Brands() {
  const items = Array.from({ length: REPEAT }, (_, round) =>
    brands.map((brand) => ({ ...brand, round }))
  ).flat();

  return (
    <section aria-labelledby="brands-title">
      <div className="container">
        <p id="brands-title" className="eyebrow brands-eyebrow">Já trabalhei para grandes marcas:</p>
      </div>

      {/* A faixa fica fora do container (largura total) e com fade nas bordas */}
      <div className="brands">
        <div className="brands-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="brands-group" aria-hidden={copy === 1 || undefined}>
              {items.map((brand) => {
                const original = copy === 0 && brand.round === 0;
                return (
                  <li key={`${brand.round}-${brand.name}`} className={original ? undefined : "brands-repeat"}>
                    <Image
                      src={brand.src}
                      alt={original ? brand.name : ""}
                      width={brand.width}
                      height={brand.height}
                      // Sem lazy: logo carregando no meio da animação muda a
                      // largura da trilha e o loop dá um salto
                      loading="eager"
                      // Direto de /public: os webp já são leves, e o cache do
                      // otimizador continuava servindo as versões brancas antigas
                      // destes mesmos nomes de arquivo
                      unoptimized
                    />
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
