'use client';

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";
import { portfolioItems } from "@/lib/portfolio";

import "./Portfolio.css";

const pad = (n: number) => String(n).padStart(2, "0");

/** Mesmo valor do @media em Portfolio.css: abaixo disso a seção é uma grade simples */
const DESKTOP_QUERY = "(min-width: 1024px)";

export default function Portfolio() {
  const modal = useModal();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    breakpoints: { "(max-width: 1023px)": { active: false } },
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="portfolio" className="section-pad">
      <div className="container">
        <div className="section-head">
          <div className="section-head-main">
            <h2 className="section-title">Projetos que já saíram do papel</h2>
          </div>
        </div>
      </div>

      {/* No desktop o carrossel ocupa a largura toda da tela, fora do .container */}
      <div className="portfolio-carousel" ref={emblaRef}>
        <div className="portfolio-carousel-track">
          {portfolioItems.map((item, i) => {
            const isSelected = i === selectedIndex;
            return (
              <div
                key={item.id}
                className={`portfolio-slide${isSelected ? " is-selected" : ""}`}
              >
                {/* Na grade (mobile) e no item central abre o modal; no carrossel,
                    os itens laterais só vêm para o centro */}
                <button
                  type="button"
                  className="portfolio-item"
                  onClick={() =>
                    isSelected || !window.matchMedia(DESKTOP_QUERY).matches
                      ? modal.openModal(item)
                      : emblaApi?.scrollTo(i)
                  }
                  aria-label={`Ver detalhes de ${item.title}`}
                >
                  {/* Moldura de janela de navegador em volta do print */}
                  <div className="portfolio-window">
                    <div className="portfolio-window-bar" aria-hidden>
                      <span /><span /><span />
                    </div>
                    <div className="portfolio-item-image">
                      <Image
                        src={item.thumb}
                        alt={item.title}
                        width={item.thumbWidth}
                        height={item.thumbHeight}
                        sizes="(max-width: 720px) 100vw, (max-width: 1023px) 50vw, 30vw"
                      />
                    </div>
                  </div>

                  <div className="portfolio-item-content">
                    <span className="portfolio-item-title">{item.title}</span>
                    <span className="portfolio-item-category">{item.category}</span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container portfolio-controls">
        <button type="button" onClick={scrollPrev} aria-label="Projeto anterior">
          <ChevronLeft size={22} />
        </button>
        <span className="portfolio-counter" aria-live="polite">
          {pad(selectedIndex + 1)} / {pad(portfolioItems.length)}
        </span>
        <button type="button" onClick={scrollNext} aria-label="Próximo projeto">
          <ChevronRight size={22} />
        </button>
      </div>

      {modal.isOpen && modal.currentItem && (
        <Modal
          key={modal.currentItem.id}
          onClose={modal.closeModal}
          title={modal.currentItem.title}
          description={modal.currentItem.description}
          images={modal.currentItem.images}
          technologies={modal.currentItem.technologies}
          link={modal.currentItem.link}
        />
      )}
    </section>
  );
}
