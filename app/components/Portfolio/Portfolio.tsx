'use client';

import Image from "next/image";
import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";
import { portfolioItems } from "@/lib/portfolio";
import { ArrowRight } from "lucide-react";

import "./Portfolio.css";

export default function Portfolio() {
  const modal = useModal();

  return (
    <section id="portfolio">   

      <h2>Portfólio <ArrowRight className="arrow-right" /></h2>   

      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="portfolio-item"
            onClick={() => modal.openModal(item)}
            aria-label={`Ver detalhes de ${item.title}`}
          >
            {/* O scale no hover transborda o card de propósito */}
            <div className="portfolio-item-image">
              <Image
                src={item.thumb}
                alt={item.title}
                width={item.thumbWidth}
                height={item.thumbHeight}
              />
            </div>

            <div className="portfolio-item-content">
              <h4>{item.title}</h4>
            </div>
          </button>
        ))}
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
