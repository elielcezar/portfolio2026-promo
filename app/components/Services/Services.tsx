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
  },
];

export default function Services() {
  return (
    <section id="servicos" className="services">
      <div className="container section-pad services-inner">
        <div className="section-head">
          <div className="section-head-main">
            <h2 className="section-title">O pacote completo para o seu site dar <span className="highlight">resultado</span></h2>
          </div>
          {/* Espaço vazio onde ficava o texto de apoio; mantém a largura do título */}
          <div className="services-head-spacer" aria-hidden />
        </div>

        <div className="services-grid">
          {services.map(({ title, description, icon: Icon, items }) => (
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
