import Image from "next/image";
import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="container-logo">
          <Image src="/logo.png" 
                    alt="Logo" 
                    width={39}
                    height={43}   
                    className="logo-image" />
          <h1>ElielCezar</h1>     
        </div>
        <nav>
          <ul>           
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/about">Sobre</Link>
            </li>
            <li>
              <Link href="/services">Serviços</Link>
            </li>            
            <li>
              <Link href="/contact">Contato</Link>
            </li>
            <li>
              <Link href="https://github.com/elielcezar">
                <Image src="/icon-github.svg"
                       alt="GitHub"
                       width={24}
                       height={24}
                       className="icon-github-image" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/elielcezar/">
                <Image src="/icon-linkedin.svg"
                       alt="LinkedIn"
                       width={24}
                       height={24}
                       className="icon-linkedin-image" />
              </Link>
            </li>
          </ul>
        </nav>   
      </div>
    </header>
  );
}