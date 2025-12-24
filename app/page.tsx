import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Header />    
      <Hero />
      <Portfolio />
      <Services />
      <Clients />
      <Contact />
    </>
  );
}
