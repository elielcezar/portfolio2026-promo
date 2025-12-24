import Image from "next/image";
import "./Contact.css";

export default function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <h2>Vamos tirar seu projeto do papel?</h2>
                <p>
                    <Image src="/icon-wpp.svg" alt="WhatsApp" width={24} height={24} />
                    <span>+55 (41) 99963-1609</span>
                </p>
                <p>
                <Image src="/icon-email.svg" alt="Email" width={24} height={24} />
                    <span>elielcezar@gmail.com</span>
                </p>
            </div>
            
        </section>
    )
}