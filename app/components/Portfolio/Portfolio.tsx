import Image from "next/image";
import "./Portfolio.css";
import Link from "next/link";

const projects = [
    
    {
    "nid": "81",
    "title": "DH Law",
    "field_image": "/portfolio/dhlaw.png",
    "field_link": "https://dhlaw.com.br/",
    "field_descricao_curta": "Reformulação de site para o escritório de advocacia Domingues &amp; Herold. O projeto também contou com uma nova área exclusiva para clientes acompanharem o status de seus processos.",    
    "field_tipo": "Site",
    "background_color": "#364b9b"
    },
    {
    "nid": "53",
    "title": "Fora dos Autos",
    "field_image": "/portfolio/fora.png",
    "field_link": "https://eliel.dev/projects/fora-dos-autos/",
    "field_descricao_curta": "Reformulação de site para o escritório de advocacia Domingues &amp; Herold. O projeto também contou com uma nova área exclusiva para clientes acompanharem o status de seus processos.",        
    "field_tipo": "Site",
    "background_color": "#ff9b00"
    },
    {
    "nid": "92",
    "title": "Churrasco Assaí",
    "field_image": "/portfolio/churrasco.png",
    "field_link": "https://assai.com.br/churrascoassai",
    "field_descricao_curta": "Reformulação do site da rede de supermercados Assaí.<br />\r\n<br />\r\nO site possui conteúdos direcionados para cada região do país, além de ofertas, localização de lojas, blog, cadastro de clientes etc.",    
    "field_tipo": "Site",
    "background_color": "#411700"
    },
    {
    "nid": "57",
    "title": "Assaí",
    "field_image": "/portfolio/assai.png",
    "field_link": "https://assai.com.br/",
    "field_descricao_curta": "Reformulação do site da rede de supermercados Assaí.<br />\r\n<br />\r\nO site possui conteúdos direcionados para cada região do país, além de ofertas, localização de lojas, blog, cadastro de clientes etc.",    
    "field_tipo": "Site",
    "background_color": "#001541"
    },
    {
    "nid": "84",
    "title": "Assaí Retail Media",
    "field_image": "/portfolio/assai-retail.png",
    "field_link": "https://megamidiagroup.com.br/portalretailmediaassai/",
    "field_descricao_curta": "Portal para a rede de supermercados Assaí demonstrando as diversas possibilidades de veiculação de mídia dentro das lojas e também no ambiente digital.",    
    "field_tipo": "Site",
    "background_color": "#0d2972"
    },
    {
    "nid": "83",
    "title": "Fort Atacadista",
    "field_image": "/portfolio/fort.png",
    "field_link": "https://www.amigotododia.com.br/",
    "field_descricao_curta": "Site promocional para a rede de supermercados Fort Atacadista. O objetivo é fornecer conteúdos de interesse para pequenos empreendedores e captar leads para as demais campanhas da rede.",    
    "field_tipo": "Site",
    "background_color": "#870e12"
    },
    {
    "nid": "8",
    "title": "Psicodelia",
    "field_image": "/portfolio/psicodelia.png",
    "field_link": "https://psicodelia.org/loja/",
    "field_descricao_curta": "Projeto autoral. O Psicodelia.org é um site de notícias sobre música eletrônica. O site permaneceu ativo por 15 anos e se desdobrou em um e-commerce e 6 edições de uma festa open air.<br />\r\n<br />\r\nFui responsável pela identidade visual, projeto gráfico e desenvolvimento da plataforma usando Wordpress e Woocommerce.",    
    "field_tipo": "Site",
    "background_color": "#140044"
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
  return (
    <section id="portfolio">
      <div className="container">

        {projectsRandom.map((project) => (
            <div key={project.nid} className="project" style={{ '--project-color': project.background_color} as React.CSSProperties}>
                <div className="row">
                    <div className="col-1">
                        <Link href={project.field_link} target="_blank">    
                            <Image 
                            src={project.field_image} 
                            alt={project.title} 
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="project-image" />
                        </Link>
                    </div>
                    <div className="col-2">
                        <h2>{project.title}</h2>
                        <p>{project.field_descricao_curta}</p>
                        <div className="cta">
                            <Link href={project.field_link} target="_blank">                            
                                Ver projeto
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))}

      </div>
    </section>
  );
}