"use client";

import Image from "next/image";
import { Star } from 'lucide-react';
import "./Hero.css";


export default function Hero() {

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      const offset = 150;

      window.scrollTo({
        top: offsetPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero">
      <div className="container">
        <div className="container-image">         
          <Image src="/hero.webp"
            alt="Hero"
            width={974}
            height={229}
            className="hero-image desktop" />
          <Image src="/hero-mob.webp"
            alt="Hero"
            width={315}
            height={161}
            className="hero-image mobile" />

          <div className="selo">
            <Image src="/selo.webp"
              alt="Selo"
              width={170}
              height={170}
              className="selo-image" />
            <Image src="/e.png"
              alt="Selo"
              width={109}
              height={109}
              className="e-bg" />
          </div>
          
          <div className="tagline">

            <div className="col-1">
              <p>
                <strong className="number">258+</strong>
                <span>Clientes Satisfeitos</span>
              </p>

              <div className="people">
                <div className="people-image">
                  <Image src="/people.png"
                    alt="Hero"
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