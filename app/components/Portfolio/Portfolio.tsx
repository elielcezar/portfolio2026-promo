'use client';

import { useMemo, useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";
import { getPortfolioByCategory, type PortfolioCategory } from "@/lib/portfolio";

import "./Portfolio.css";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('Site');
  const modal = useModal();

  const filteredItems = useMemo(() => getPortfolioByCategory(activeTab), [activeTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <h2>Portfólio</h2>
      </div>

      {/* Abas de navegação - Switch */}
      <div className="portfolio-tabs">
        <div className="portfolio-tabs-switch">
          <span
            className={`portfolio-tabs-indicator ${activeTab === 'Outro' ? 'right' : ''}`}
            aria-hidden
          />
          <button
            type="button"
            onClick={() => setActiveTab('Site')}
            className={activeTab === 'Site' ? 'active' : ''}
          >
            Sites
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('Outro')}
            className={activeTab === 'Outro' ? 'active' : ''}
          >
            + Projetos
          </button>
        </div>
      </div>

      <div className={activeTab === 'Outro' ? 'portfolio-grid-outro' : 'portfolio-grid'}>
        {filteredItems.map((item) => (
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

            {activeTab === 'Outro' && (
              <div className="portfolio-item-content">
                <h3>{item.title}</h3>
              </div>
            )}
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
