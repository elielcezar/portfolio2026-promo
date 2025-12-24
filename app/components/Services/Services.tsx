import Image from "next/image";
import "./Services.css";

const techWords = ["Sites","E-commerce","Apps","Wordpress","Landing Pages","Anúncios no Google","Sites","E-commerce","Apps","Wordpress","Landing Pages","Anúncios no Google"];

const services = [
    {
        "title": "Programação",
        "description": "de sites, blogs, landing pages e e-commerce",
        "icon": "/icon-code.svg"
    },
    {
        "title": "Criação",
        "description": "de identidade visual e design para seu site",
        "icon": "/icon-creation.svg"
    },
    {
        "title": "SEO",
        "description": "melhoria de desempenho e posicionamento do seu site nos resultados do Google",
        "icon": "/icon-seo.svg"
    },
    {
        "title": "Correção de Problemas",
        "description": "análise técnica e plano de melhorias em sites desenvolvidos por terceiros",
        "icon": "/icon-bug.svg"
    }
];

export default function Services() {
    return (
        <section id="services">
            {/*<div className="tech-scroll-1">
                <div className="tech-scroll-content">
                    {techWords.map((word, i) => (
                        <span key={i} className="tech-word">{word}</span>
                    ))}
                    {techWords.map((word, i) => (
                        <span key={`duplicate-${i}`} className="tech-word">{word}</span>
                    ))}
                </div>
            </div>*/}
            <div className="tech-scroll-2">
                <div className="tech-scroll-content">
                    {techWords.map((word, i) => (
                        <span key={i} className="tech-word">{word}</span>
                    ))}
                    {techWords.map((word, i) => (
                        <span key={`duplicate-${i}`} className="tech-word">{word}</span>
                    ))}
                </div>
            </div>
            <div className="tech-scroll-3">
                <div className="tech-scroll-content">
                    {techWords.map((word, i) => (
                        <span key={i} className="tech-word">{word}</span>
                    ))}
                    {techWords.map((word, i) => (
                        <span key={`duplicate-${i}`} className="tech-word">{word}</span>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="services-header">                    
                    <h2>O pacote completo de serviços para melhorar o desempenho do seu site ou app.<br/>
                    Seu site no ar em poucos dias.</h2>
                </div>
                <div className="services-text">
                    <p>Sou formado em Design Gráfico pela UTFPR, possuo pós-graduação em Engenharia de Software para Dispositivos Móveis e trabalho há 10 anos com desenvolvimento para a web. Posso ajudar sua empresa com os seguintes serviços:</p>
                </div>
                <div className="services-container">
                    {services.map((service, i) => (
                        <div key={i} className="services-item">
                            <div className="services-item-icon">
                                <Image src={service.icon} alt={service.title} width={100} height={100} />
                            </div>
                            <div className="services-item-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>        
    </section> 
  );
}