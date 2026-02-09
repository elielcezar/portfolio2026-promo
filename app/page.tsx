import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
import Ribbon from "./components/Ribbon/Ribbon";
import CTA from "./components/CTA/CTA";


export default function Home() {
  return (
    <>
      <Header />    
      <Hero />
      <Ribbon />
      <Services />      
      <Portfolio />            
      <Clients />
      <CTA />
      <Contact />
      <WhatsappButton />
    </>
  );
}
