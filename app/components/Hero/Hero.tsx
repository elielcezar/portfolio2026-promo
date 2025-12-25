import Image from "next/image";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero">
        <div className="container">
            <div className="container-trusted">             
            <div className="container-image">
                <Image src="/hero2.png" 
                    alt="Hero" 
                    width={1260}
                    height={267}   
                    className="hero-image" />                    
            </div>                           
          </div>
      </div>
    </section>
  );
}