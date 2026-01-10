"use client";

import Image from "next/image";
import Link from "next/link";
import "./Hero.css";

export default function Hero() {

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      const offset = 150;

      window.scrollTo({
        top: offsetPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    scrollToSection(event, sectionId);
  };

  return (
    <section id="hero">
      <div className="container">

        <div className="container-image">
          <Image src="/trusted.jpg"
            alt="Hero"
            width={493}
            height={49}
          />
          <Image src="/hero3.png"
            alt="Hero"
            width={1188}
            height={229}
            className="hero-image desktop" />
          <Image src="/hero3-mob.png"
            alt="Hero"
            width={1188}
            height={229}
            className="hero-image mobile" />
          <div className="tagline">

            <Link href="/portfolio" onClick={(event) => handleLinkClick(event, 'portfolio')} className="link">

              <svg fill="#000000" width="48" height="48" viewBox="0 0 24 24" fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>down</title>
                <path d="M11.125 16.313l7.688-7.688 3.594 3.719-11.094 11.063-11.313-11.313 3.5-3.531z"></path>
              </svg>

            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}