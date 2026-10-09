import { IconArrowRight, IconChat, IconCheck, IconStar, IconUser } from "../Icons";
import { WHATSAPP_URL } from "@/lib/contact";
import "./Hero.css";

const stats = [
  { value: "350+", label: "clientes atendidos" },
  { value: "15 anos", label: "desenvolvendo para a web" },
];

export default function Hero() {
  return (
    <section id="topo">
      <div className="container hero">
        <div className="hero-text">
          <p className="hero-tag">
            <span className="hero-tag-dot" />
            Designer &amp; Programador Web · Freelancer
          </p>

          <h1 className="hero-title">
            Um site profissional para o seu negócio, <span className="highlight">do design ao ar.</span>
          </h1>

          <p className="hero-lead">
            Olá! Meu nome é Eliel. Sou designer gráfico e programador há 15 anos. Eu crio e programo sites, landing pages e lojas virtuais para pequenas empresas — com o mesmo cuidado que já dediquei a marcas como Assaí e Subway.
          </p>

          <div className="hero-actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
              <IconChat size={20} />
              Pedir orçamento pelo WhatsApp
            </a>
            <a href="#portfolio" className="btn btn-outline hero-secondary">
              Ver projetos
              <IconArrowRight size={18} />
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
            <div className="hero-stat">
              <span className="hero-stat-value">4.8<span className="hero-stat-small">/5</span></span>
              <span className="hero-stat-label">avaliação dos clientes</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* TODO: trocar pela foto do Eliel (PNG sem fundo) quando o arquivo chegar */}
          <div className="hero-photo">
            <IconUser size={96} className="hero-photo-icon" />
            <span className="placeholder">[Foto do Eliel — PNG sem fundo]</span>
          </div>

          <div className="hero-rating">
            <div className="hero-stars">
              {Array.from({ length: 5 }, (_, i) => <IconStar key={i} />)}
            </div>
            <span>4.8 de 5</span>
          </div>

          <div className="hero-steps">
            <span className="hero-steps-title">Uma pessoa só, do começo ao fim</span>
            <div className="hero-steps-list">
              {["Design", "Programação", "Site no ar"].map((step) => (
                <span key={step}><IconCheck size={16} className="hero-check" />{step}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
