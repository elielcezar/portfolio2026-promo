'use client';

import { useEffect, useCallback, useState, type ReactNode } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

import './Modal.css';

/**
 * O modal é montado só enquanto está aberto (ver Portfolio.tsx). Isso mantém o
 * estado do carrossel limpo a cada abertura sem precisar de reInit do Embla.
 */
interface ModalProps {
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  link: string;
}

/**
 * Torna a imagem clicável quando o item tem `link` — abre o site em nova aba.
 * Sem link, devolve a imagem crua para não mexer no layout.
 */
function ImageLink({ link, title, children }: { link: string; title: string; children: ReactNode }) {
  if (!link) return <>{children}</>;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Acesse ${title}`}
      className="modal-image-link"
    >
      {children}
    </a>
  );
}

export default function Modal({
  onClose,
  title,
  description,
  images,
  technologies,
  link,
}: ModalProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: images.length > 1,
    align: 'center',
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const displayImages = images;

  return (
    <div className="modal-overlay">
      <div className="modal-backdrop" onClick={onClose} aria-hidden />

      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="modal-close" aria-label="Fechar modal">
          <X size={24} />
        </button>

        <div className="modal-body">
          {/* Coluna 1 - Carrossel de imagens */}
          <div className="modal-gallery">
            {displayImages.length === 0 ? (
              <div className="modal-gallery-empty">Sem imagens</div>
            ) : displayImages.length === 1 ? (
              <div className="modal-gallery-single">
                <ImageLink link={link} title={title}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- só as dimensões do thumb estão nos dados; a galeria usa object-fit */}
                  <img src={displayImages[0]} alt={title} decoding="async" />
                </ImageLink>
              </div>
            ) : (
              <div className="modal-carousel">
                <div className="modal-carousel-viewport" ref={emblaRef}>
                  <div className="modal-carousel-container">
                    {displayImages.map((src, i) => (
                      <div key={`${src}-${i}`} className="modal-carousel-slide">
                        <ImageLink link={link} title={title}>
                          {/* eslint-disable-next-line @next/next/no-img-element -- só as dimensões do thumb estão nos dados; a galeria usa object-fit */}
                          <img
                            src={src}
                            alt={`${title} - imagem ${i + 1}`}
                            loading={i === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                          />
                        </ImageLink>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Controles num "pill" centrado, contido nos limites da imagem */}
                <div className="modal-carousel-controls">
                  <button onClick={scrollPrev} aria-label="Imagem anterior">
                    <ChevronLeft size={22} />
                  </button>
                  <div className="modal-carousel-dots" role="tablist" aria-label="Posição do carrossel">
                    {displayImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollTo(i)}
                        role="tab"
                        className={`modal-carousel-dot ${i === selectedIndex ? 'active' : ''}`}
                        aria-label={`Imagem ${i + 1}`}
                        aria-selected={i === selectedIndex}
                      />
                    ))}
                  </div>
                  <button onClick={scrollNext} aria-label="Próxima imagem">
                    <ChevronRight size={22} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Coluna 2 - Conteúdo */}
          <div className="modal-info">
            <div className="modal-info-inner">
              <h2>{title}</h2>

              {description && (
                <div
                  className="modal-content"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}

              {technologies.length > 0 && (
                <div className="modal-tech">
                  {technologies.map((tech) => (
                    <span key={tech}>{tech.trim()}</span>
                  ))}
                </div>
              )}

              {link && (
                <div>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="modal-link">
                    <ExternalLink size={18} />
                    Acesse o site
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
