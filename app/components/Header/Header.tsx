"use client";

import { useEffect, useRef, useState } from "react";
import { IconChat, IconClose, IconGithub, IconLinkedin } from "../Icons";
import { GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL } from "@/lib/contact";
import "./Header.css";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
];

/** Mesmo valor do @media em Header.css: abaixo disso o menu vira sanduíche */
const DESKTOP_QUERY = "(min-width: 1024px)";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const toggle = toggleRef.current;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    // Se a tela crescer até o layout desktop com o menu aberto, fecha
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onDesktop = () => desktop.matches && setMenuOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
      // Devolve o foco ao botão que abriu, sem rolar a página
      toggle?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

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

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen(true)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Menu mobile: painel que entra da direita. Fechado, fica inert (fora
          do Tab e dos leitores de tela). */}
      <div className={`mobile-menu-backdrop${menuOpen ? " open" : ""}`} onClick={closeMenu} aria-hidden />
      <div
        id="menu-mobile"
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!menuOpen}
      >
        <button ref={closeRef} type="button" className="mobile-menu-close" aria-label="Fechar menu" onClick={closeMenu}>
          <IconClose size={22} />
        </button>

        <nav aria-label="Principal">
          <ul className="mobile-menu-list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                <IconGithub size={20} /> GitHub
              </a>
            </li>
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                <IconLinkedin size={20} /> LinkedIn
              </a>
            </li>
          </ul>
        </nav>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent mobile-menu-cta" onClick={closeMenu}>
          <IconChat size={20} />
          Falar comigo
        </a>
      </div>
    </header>
  );
}
