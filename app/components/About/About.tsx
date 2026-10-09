import { IconUser } from "../Icons";
import "./About.css";

const facts = [
  { label: "Formação", value: "Design Gráfico · UTFPR" },
  { label: "Pós-graduação", value: "Software para Dispositivos Móveis" },
  { label: "Hoje", value: "Tech Lead de um time de 5 devs" },
  { label: "Experiência", value: "15+ anos com web" },
];

const differentials = [
  {
    title: "Design e código na mesma pessoa",
    text: "Eu desenho no Figma e eu mesmo programo. Nada se perde no caminho entre o designer e o programador.",
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

const tools = ["Figma", "Photoshop", "Illustrator", "WordPress", "React", "Next.js", "Vue.js", "Tailwind CSS", "Node.js", "PHP", "MySQL", "Google Ads"];

export default function About() {
  return (
    <section id="sobre">
      <div className="container section-pad about">
        <div className="about-side">
          {/* TODO: trocar pela foto do Eliel trabalhando quando o arquivo chegar */}
          <div className="about-photo">
            <IconUser size={72} />
            <span className="placeholder">[Foto trabalhando]</span>
          </div>

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
          <p className="eyebrow">Sobre mim</p>
          <h2 className="section-title">Olá! Meu nome é Eliel.</h2>

          <div className="about-text">
            <p>Sou formado em Design Gráfico pela UTFPR, tenho pós-graduação em Desenvolvimento de Software para Dispositivos Móveis e trabalho há mais de 15 anos com desenvolvimento web. Hoje também sou Tech Lead de um time de 5 desenvolvedores.</p>
            <p>Já atendi marcas do varejo e do e-commerce como Assaí, Muffato, Lojas Americanas e Subway. Agora coloco essa experiência a serviço de quem está construindo o próprio negócio.</p>
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
