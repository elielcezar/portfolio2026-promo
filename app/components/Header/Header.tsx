import { IconChat, IconGithub, IconLinkedin } from "../Icons";
import { GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL } from "@/lib/contact";
import "./Header.css";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header-bar">
        <a href="#topo" className="logo">
          <span className="logo-mark">ec</span>
          <span className="logo-name">Eliel Cezar</span>
        </a>

        <nav aria-label="Principal" className="header-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              <span className="nav-label">{link.label}</span>
            </a>
          ))}
          <span className="header-social">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <IconGithub size={20} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <IconLinkedin size={20} />
            </a>
          </span>
        </nav>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-dark header-cta">
          <IconChat size={18} />
          Falar comigo
        </a>
      </div>
    </header>
  );
}
