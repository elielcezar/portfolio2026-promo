import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Services from "./components/Services/Services";
import Steps from "./components/Steps/Steps";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <Services />
        <Steps />
        <Portfolio />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
