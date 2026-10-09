import { IconChat, IconMail } from "../Icons";
import { EMAIL, WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/contact";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container contact-inner">
        <div className="contact-text">
          <p className="eyebrow">Contato</p>
          <h2>Vamos tirar seu projeto do papel?</h2>
          <p className="contact-lead">Me manda uma mensagem contando o que você precisa. A conversa é direto comigo.</p>
        </div>

        <div className="contact-channels">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="contact-channel contact-whatsapp">
            <IconChat size={22} />
            <span className="contact-channel-text">
              <span className="contact-channel-label">WhatsApp</span>
              <span className="contact-channel-value">{WHATSAPP_LABEL}</span>
            </span>
          </a>
          <a href={`mailto:${EMAIL}`} className="contact-channel contact-email">
            <IconMail size={22} />
            <span className="contact-channel-text">
              <span className="contact-channel-label">E-mail</span>
              <span className="contact-channel-value">{EMAIL}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
