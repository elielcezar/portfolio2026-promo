'use client';

import Image from "next/image";
import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";
import { portfolioItems } from "@/lib/portfolio";

import "./Portfolio.css";

export default function Portfolio() {
  const modal = useModal();

  return (
    <section id="portfolio">
      <div className="container section-pad portfolio-inner">
        <div className="section-head">
          <div className="section-head-main">
            <h2 className="section-title">Projetos que já saíram do papel</h2>
          </div>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="portfolio-item"
              onClick={() => modal.openModal(item)}
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
                    sizes="(max-width: 720px) 100vw, 384px"
                  />
                </div>
              </div>

              <div className="portfolio-item-content">
                <span className="portfolio-item-title">{item.title}</span>
                <span className="portfolio-item-category">{item.category}</span>
              </div>
            </button>
          ))}
        </div>
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
