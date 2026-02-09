import "./Ribbon.css";

const techWords = ["Sites", "E-commerce", "Apps", "Wordpress", "Landing Pages", "Google Ads", "Sites", "E-commerce", "Apps", "Wordpress", "Landing Pages", "Google Ads"];

export default function Ribbon() {
    return (
        <section id="ribbon">
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
        </section>
    );
}