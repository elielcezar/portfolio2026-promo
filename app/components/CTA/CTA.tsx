import Image from "next/image";
import "./CTA.css";

const techWords = ["Contato", "Contato", "Contato", "Contato", "Contato", "Contato", "Contato", "Contato", "Contato", "Contato"];

export default function CTA() {
    return (
        <section id="cta">          
            <div className="tech-scroll">
                <div className="tech-scroll-content">
                    {techWords.map((word, i) => (
                        <div key={i} className="tech-word">
                            <span>{word}</span>
                            <Image src="/marquee.svg" alt="Arrow Right" width={34} height={34} className="marquee-image" />
                        </div>
                    ))}                  
                </div>
            </div>            
        </section>
    );
}