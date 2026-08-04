import Image from "next/image";
import { Star } from 'lucide-react';
import "./Hero2.css";


export default function Hero() {

  return (
    <section id="hero">
      <div className="hero-inner">

       
        <div className="hero-photo hero-photo-mobile">
          <Image src="/images/avatar-mobile.png"
            alt="Eliel Cezar"
            width={227}
            height={238}
            priority />
        </div>

        <div className="hero-content">

        <div className="hero-photo hero-photo-desktop">
          <Image src="/images/avatar-mobile.png"
            alt="Eliel Cezar"
            width={227}
            height={238}
            priority />
        </div>
         
          <h1 className="hero-title">
            Designer &amp;<br />
            <span className="highlight">Programador</span> Web
          </h1>

          <div className="tagline">

            <div className="col-1">
              <p>
                <strong className="number">350+</strong>
                <span>Clientes Satisfeitos</span>
              </p>

              <div className="people">
                <div className="people-image">
                  <Image src="/people.png"
                    alt=""
                    width={108}
                    height={50}
                  />
                </div>
                <div className="rating">
                  <div className="stars">
                    <Star fill="#ffd800" strokeWidth="0" />
                    <Star fill="#ffd800" strokeWidth="0" />
                    <Star fill="#ffd800" strokeWidth="0" />
                    <Star fill="#ffd800" strokeWidth="0" />
                    <Star fill="#ffd800" strokeWidth="0" />
                  </div>
                  <p className="rating-value"><strong>4.8</strong>/5.0</p>
                </div>
              </div>

            </div>
            <div className="col-2">
              <p>Olá! Meu nome é Eliel, sou formado em <strong>Design Gráfico</strong> com pós-graduação em <strong>Engenharia de Software</strong> e trabalho há 15 anos com desenvolvimento para a web</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
