import Image from "next/image";
import "./About.css";

const facts = [
  { label: "Formação", value: "Design Gráfico · UTFPR" },
  { label: "Pós-graduação", value: "Software para Dispositivos Móveis - UTFPR" },
];

const differentials = [
  {
    title: "Design e código com uma só pessoa",
    text: "Eu crio o design e eu mesmo programo. Agilidade e eficiência garantidas, nada se perde no caminho entre o designer e o programador.",
  },
  {
    title: "Projeto de ponta a ponta",
    text: "Da ideia aos requisitos, do design à publicação no servidor. Você não precisa coordenar ninguém.",
  },
  {
    title: "Você fala direto comigo",
    text: "Sem intermediários: quem conversa com você é quem faz o seu site.",
  },
];

const tools = ["Figma", "Photoshop", "Illustrator", "WordPress", "Drupal", "JavaScript", "CSS", "HTML", "React", "Next.js", "Vue.js", "Tailwind", "Node.js", "PHP", "Node.js", "MySQL", "Google Ads"];

export default function About() {
  return (
    <section id="sobre">
      <div className="container section-pad about">
        <div className="about-side">
          <Image
            src="/images/eliel-perfil.jpg"
            alt="Eliel Cezar"
            width={1024}
            height={1536}
            sizes="(min-width: 900px) 420px, 360px"
            className="about-photo"
          />

          <div className="about-facts">
            {facts.map((fact) => (
              <div key={fact.label} className="about-fact">
                <span className="about-fact-label">{fact.label}</span>
                <span className="about-fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-main">
          <h2 className="section-title">Olá! Meu nome é Eliel</h2>

          <div className="about-text">
            <p>Sou formado em <strong>Design Gráfico</strong> pela UTFPR, tenho <strong>Pós-graduação em Desenvolvimento de Software para Dispositivos Móveis</strong> e trabalho há mais de 15 anos com desenvolvimento web.</p>
            <p>Já desenvolvi projetos para como <strong>Assaí, McDonald&apos;s, Muffato, Lojas Americanas, Rede RPC e Subway</strong>. Agora coloco essa experiência a serviço de quem está construindo o próprio negócio.</p>
          </div>

          <div className="about-differentials">
            {differentials.map((item, i) => (
              <div key={item.title} className="about-differential">
                <span className="about-differential-number">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-tools">
            <span className="about-tools-label">Ferramentas que uso</span>
            <ul>
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
