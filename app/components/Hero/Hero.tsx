import Image from "next/image";
import { IconArrowDown, IconChat, IconStar } from "../Icons";
import { WHATSAPP_URL } from "@/lib/contact";
import "./Hero.css";

const stats = [
  { value: "350+", label: "Clientes atendidos" },
];

export default function Hero() {
  return (
    <section id="topo">
      <div className="container hero">
        <h1 className="hero-title">
          <span>Você cuida do seu negócio.</span>
          <span>Eu cuido <span className="highlight">do seu site</span>.</span>
        </h1>

        <div className="hero-text">
          <p className="hero-lead">
            Olá! Meu nome é Eliel. Sou designer gráfico e programador há 15 anos. Posso criar um <strong>site, uma landing page ou uma loja virtual</strong> para a sua empresa com o mesmo cuidado que já dediquei a marcas como Assaí, McDonald&apos;s e Subway.
          </p>

          <div className="hero-actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
              <IconChat size={20} />
              Pedir orçamento pelo WhatsApp
            </a>
            <a href="#portfolio" className="btn btn-outline hero-secondary">
              Ver projetos
              <IconArrowDown size={18} />
            </a>
          </div>
        </div>

        <figure className="hero-visual" aria-hidden="true">
          <div className="hero-window">
            <div className="hero-window-bar">
              <span /><span /><span />
            </div>
            <Image
              src="/images/portfolio/sites/assai-thumb_v2.webp"
              alt=""
              width={900}
              height={639}
              quality={90}
              priority
              sizes="(max-width: 1023px) 92vw, 42vw"
            />
          </div>
          <div className="hero-window hero-window-back">
            <div className="hero-window-bar">
              <span /><span /><span />
            </div>
            <Image
              src="/images/portfolio/sites/fort-thumb_v2.webp"
              alt=""
              width={900}
              height={639}
              quality={90}
              sizes="(max-width: 1023px) 58vw, 26vw"
            />
          </div>
        </figure>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
          <div className="hero-stat hero-stat-rating">
            <div className="hero-stat-rating-row">
              <Image src="/people.png" alt="" width={108} height={50} className="hero-stat-people" />
              <span className="hero-stat-value">4,8<span className="hero-stat-small">/5</span></span>
              <span className="hero-stars" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => <IconStar key={i} />)}
              </span>
            </div>
            <span className="hero-stat-label">Avaliação dos clientes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
