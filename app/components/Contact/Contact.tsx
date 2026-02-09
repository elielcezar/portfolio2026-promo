import Image from "next/image";
import "./Contact.css";

export default function Contact() {
    return (
        <section id="contact">
            <Image src="/hello2.png" alt="Contact" width={130} height={50} className="hello" />
            <div className="container">                
                <div className="btn">
                    <div className="icon-container">
                        <Image src="/icon-wpp.svg" alt="WhatsApp" width={40} height={40} />
                    </div>
                    <span>+55 41 99963.1609</span>
                </div>
                <div className="btn">
                    <div className="icon-container">    
                        <Image src="/icon-email.svg" alt="Email" width={40} height={40} />
                    </div>
                    <span>elielcezar@gmail.com</span>
                </div>
            </div>
            
        </section>
    )
}