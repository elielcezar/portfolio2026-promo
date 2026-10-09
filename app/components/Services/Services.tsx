import { IconBug, IconCheck, IconCode, IconPen, IconSeo } from "../Icons";
import "./Services.css";

const services = [
  {
    title: "Programação",
    description: "Sites, landing pages, aplicativos e lojas virtuais.",
    icon: IconCode,
    items: [
      "Site institucional para apresentar sua empresa",
      "Landing page para campanhas e anúncios",
      "Loja virtual (e-commerce) pronta para vender",
      "Aplicativos e sistemas sob medida",
    ],
    tools: "WordPress · React · Next.js",
  },
  {
    title: "Design",
    description: "Criação de identidade visual e design para o seu site.",
    icon: IconPen,
    items: [
      "Logo e identidade visual",
      "Layout desenhado no Figma e aprovado por você antes de programar",
      "Navegação pensada para o seu cliente (UX)",
    ],
    tools: "Figma · Photoshop · Illustrator",
  },
  {
    title: "SEO / Google",
    description: "Melhoria de desempenho e posicionamento do seu site nos resultados do Google.",
    icon: IconSeo,
    items: [
      "Site mais rápido no celular e no computador",
      "Ajustes técnicos para aparecer melhor no Google",
      "Campanhas no Google Ads",
      "Relatórios de resultado no Google Data Studio",
    ],
    tools: "Google Ads · Data Studio",
  },
  {
    title: "Correção de Bugs",
    description: "Análise técnica e plano de melhorias em sites desenvolvidos por terceiros.",
    icon: IconBug,
    items: [
      "Diagnóstico do que está quebrado ou lento",
      "Plano de melhorias por ordem de prioridade",
      "Correções em WordPress, PHP e JavaScript",
    ],
    tools: "WordPress · PHP · JavaScript",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="services">
      <div className="container section-pad services-inner">
        <div className="section-head">
          <div className="section-head-main">
            <p className="eyebrow">Serviços</p>
            <h2 className="section-title">O pacote completo para o seu site dar resultado</h2>
          </div>
          <p className="services-intro">
            Você fala com uma pessoa só — do design à programação — sem precisar coordenar agência, designer e programador.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ title, description, icon: Icon, items, tools }) => (
            <article key={title} className="service-card">
              <div className="service-icon">
                <Icon size={26} />
              </div>
              <div className="service-text">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <ul className="service-list">
                {items.map((item) => (
                  <li key={item}><IconCheck size={18} />{item}</li>
                ))}
              </ul>
              <p className="service-tools">{tools}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
