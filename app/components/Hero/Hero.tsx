import Image from "next/image";
import { IconArrowRight, IconChat, IconStar } from "../Icons";
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
          <h1 className="hero-title">
            Você cuida do seu negócio.<br />
            Eu cuido <span className="highlight">do seu site</span>.
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
            <div className="hero-stat hero-stat-rating">
              <Image src="/people.png" alt="" width={108} height={50} className="hero-stat-people" />
              <div className="hero-stat-rating-text">
                <div className="hero-stars">
                  {Array.from({ length: 5 }, (_, i) => <IconStar key={i} />)}
                </div>
                <span className="hero-stat-value">4.8<span className="hero-stat-small">/5</span></span>
              </div>
              <span className="sr-only">Avaliação dos clientes: 4.8 de 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
