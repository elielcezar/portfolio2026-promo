import { GITHUB_URL, LINKEDIN_URL } from "@/lib/contact";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-mark">ec</span>
          <span className="footer-copy">© {new Date().getFullYear()} Eliel Cezar · Designer &amp; Programador Web</span>
        </div>
        <nav aria-label="Redes" className="footer-nav">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#topo">Voltar ao topo ↑</a>
        </nav>
      </div>
    </footer>
  );
}
