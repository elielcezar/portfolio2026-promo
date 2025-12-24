import Image from "next/image";
import "./Portfolio.css";

const projects = [
    
    {
    "nid": "81",
    "title": "DH Law",
    "field_image": "/portfolio/dhlaw.png",
    "field_link": "https://dhlaw.com.br/",
    "field_descricao_curta": "Reformulação de site para o escritório de advocacia Domingues &amp; Herold. O projeto também contou com uma nova área exclusiva para clientes acompanharem o status de seus processos.",    
    "field_tipo": "Site"
    },
    {
    "nid": "53",
    "title": "Fora dos Autos",
    "field_image": "/portfolio/fora.png",
    "field_link": "https://eliel.dev/projects/fora-dos-autos/",
    "field_descricao_curta": "Reformulação de site para o escritório de advocacia Domingues &amp; Herold. O projeto também contou com uma nova área exclusiva para clientes acompanharem o status de seus processos.",        
    "field_tipo": "Site"
    },
    {
    "nid": "92",
    "title": "Churrasco Assaí",
    "field_image": "/portfolio/churrasco.png",
    "field_link": "https://assai.com.br/churrascoassai",
    "field_descricao_curta": "Reformulação do site da rede de supermercados Assaí.<br />\r\n<br />\r\nO site possui conteúdos direcionados para cada região do país, além de ofertas, localização de lojas, blog, cadastro de clientes etc.",    
    "field_tipo": "Site"
    },
    {
    "nid": "57",
    "title": "Assaí",
    "field_image": "/portfolio/assai.png",
    "field_link": "https://assai.com.br/",
    "field_descricao_curta": "Reformulação do site da rede de supermercados Assaí.<br />\r\n<br />\r\nO site possui conteúdos direcionados para cada região do país, além de ofertas, localização de lojas, blog, cadastro de clientes etc.",    
    "field_tipo": "Site"
    },
    {
    "nid": "84",
    "title": "Assaí Retail Media",
    "field_image": "/portfolio/assai.png",
    "field_link": "https://megamidiagroup.com.br/portalretailmediaassai/",
    "field_descricao_curta": "Portal para a rede de supermercados Assaí demonstrando as diversas possibilidades de veiculação de mídia dentro das lojas e também no ambiente digital.",    
    "field_tipo": "Site"
    },
    {
    "nid": "83",
    "title": "Fort Atacadista",
    "field_image": "/portfolio/fort.png",
    "field_link": "https://www.amigotododia.com.br/",
    "field_descricao_curta": "Site promocional para a rede de supermercados Fort Atacadista. O objetivo é fornecer conteúdos de interesse para pequenos empreendedores e captar leads para as demais campanhas da rede.",    
    "field_tipo": "Site"
    },
    {
    "nid": "8",
    "title": "Psicodelia",
    "field_image": "/portfolio/psicodelia.png",
    "field_link": "https://psicodelia.org/loja/",
    "field_descricao_curta": "Projeto autoral. O Psicodelia.org é um site de notícias sobre música eletrônica. O site permaneceu ativo por 15 anos e se desdobrou em um e-commerce e 6 edições de uma festa open air.<br />\r\n<br />\r\nFui responsável pela identidade visual, projeto gráfico e desenvolvimento da plataforma usando Wordpress e Woocommerce.",    
    "field_tipo": "Site"
    }
        
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">

        {projects.map((project) => (
            <div key={project.nid} className="project">
                <div className="row">
                    <div className="col-1">
                        <Image 
                        src={project.field_image} 
                        alt={project.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="project-image" />
                    </div>
                    <div className="col-2">
                        <h2>{project.title}</h2>
                        <p>{project.field_descricao_curta}</p>
                    </div>
                </div>
            </div>
        ))}

      </div>
    </section>
  );
}