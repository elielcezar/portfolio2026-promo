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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </nav>   
      </div>
    </header>
  );
}