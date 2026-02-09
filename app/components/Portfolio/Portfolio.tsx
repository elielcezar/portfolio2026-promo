'use client';

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import AutoPlay from 'embla-carousel-autoplay';


import "./Portfolio.css";


const projects = [

  {
    "nid": "81",
    "title": "DH Law",
    "field_image": "/portfolio/dhlaw.png",
    "field_link": "https://dhlaw.com.br/",
    "field_descricao_curta": "Reformulação de site para o escritório de advocacia Domingues & Herold. O projeto também contou com uma nova área exclusiva para clientes acompanharem o status de seus processos."
  },
  {
    "nid": "53",
    "title": "Fora dos Autos",
    "field_image": "/portfolio/fora.png",
    "field_link": "https://especiais.gazetadopovo.com.br/lp/fora-dos-autos/",
    "field_descricao_curta": "Landing page para lançamento do programa Fora dos Autos, da RPC/Gazeta do Povo, com entrevistas e debates sobre política e ativismo judiciário."
  },
  {
    "nid": "92",
    "title": "Churrasco Assaí",
    "field_image": "/portfolio/churrasco.png",
    "field_link": "https://assai.com.br/churrascoassai",
    "field_descricao_curta": "O site faz parte de uma campanha focada na venda de produtos de açougue, e conta com área de notícias e uma calculadora que ajuda os usuários a planjarem o churrasco."
  },
  {
    "nid": "57",
    "title": "Assaí",
    "field_image": "/portfolio/assai.png",
    "field_link": "https://assai.com.br/",
    "field_descricao_curta": "Reformulação do site da rede de supermercados Assaí.\r\n\r\nO site possui conteúdos direcionados para cada região do país, além de ofertas, localização de lojas, blog, cadastro de clientes etc."
  },
  {
    "nid": "84",
    "title": "Assaí Retail Media",
    "field_image": "/portfolio/assai-retail.png",
    "field_link": "https://megamidiagroup.com.br/retailmedia10/",
    "field_descricao_curta": "Portal para a rede de supermercados Assaí demonstrando as diversas possibilidades de veiculação de mídia dentro das lojas e também no ambiente digital."    
  },
  {
    "nid": "83",
    "title": "Fort Atacadista",
    "field_image": "/portfolio/fort.png",
    "field_link": "https://www.amigotododia.com.br/",
    "field_descricao_curta": "Site promocional para a rede de supermercados Fort Atacadista. O objetivo é fornecer conteúdos de interesse para pequenos empreendedores e captar leads para as demais campanhas da rede."
  },
  {
    "nid": "8",
    "title": "Psicodelia",
    "field_image": "/portfolio/psicodelia.png",
    "field_link": "https://psicodelia.org/loja/",
    "field_descricao_curta": "Site de notícias sobre música eletrônica com e-commerce integrado. Fui responsável pela identidade visual, projeto gráfico e desenvolvimento da plataforma usando Wordpress e Woocommerce."    
  }
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const projectsRandom = shuffleArray(projects);



export default function Portfolio() {

  // Configuração do Embla Carousel
const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: 'center',
    slidesToScroll: 1    
  },
  [
    AutoPlay({
      delay: 2500,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
    })
  ]
);

// Funções de navegação
const scrollPrev = useCallback(() => {
  if (emblaApi) emblaApi.scrollPrev();
}, [emblaApi]);

const scrollNext = useCallback(() => {
  if (emblaApi) emblaApi.scrollNext();
}, [emblaApi]);

  return (
    <section id="portfolio">     
    
      <div className="container">           
          <h2>Portfólio</h2>      
      </div>

        <div className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  
                  {projectsRandom.map((project, index) => (
                    <div key={index} className="embla__slide item">
                      <Link href={project.field_link} target="_blank">
                        <Image src={project.field_image} alt={project.title} width={420} height={280} /> 
                      </Link>
                    </div>
                  ))}
                  
                </div>
              </div>

              <button type="button" className="embla__prev" onClick={scrollPrev} aria-label="Slide anterior">
                <ChevronLeft size={24} />
              </button>
              <button type="button" className="embla__next" onClick={scrollNext} aria-label="Próximo slide">
                <ChevronRight size={24} />
              </button>
            </div>

    </section>
  );
}