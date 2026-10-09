import { IconChat, IconPlus } from "../Icons";
import { WHATSAPP_URL } from "@/lib/contact";
import "./Faq.css";

const questions = [
  {
    question: "Quanto custa um site?",
    answer: "Depende do que o seu negócio precisa: uma landing page, um site institucional e uma loja virtual têm tamanhos bem diferentes. Depois de uma conversa rápida, eu envio uma proposta com escopo, prazo e valor.",
  },
  {
    question: "Em quanto tempo o site fica pronto?",
    // TODO: substituir [X DIAS] e [X SEMANAS] pelos prazos reais
    answer: "Uma landing page costuma levar [X DIAS] e um site institucional, [X SEMANAS]. O prazo exato vai na proposta, antes de começarmos.",
  },
  {
    question: "Preciso entender de tecnologia?",
    answer: "Não. Eu cuido da parte técnica — servidor, publicação e configuração — e te explico só o que você precisa para o dia a dia.",
  },
  {
    question: "Meu site foi feito por outra pessoa e está com problemas. Você atende?",
    answer: "Sim. Faço uma análise técnica do site e entrego um plano de melhorias, dizendo o que corrigir primeiro.",
  },
  {
    question: "Vou conseguir atualizar o site sozinho?",
    answer: "Se for importante para você editar textos e fotos, eu construo em WordPress e te mostro como fazer.",
  },
];

export default function Faq() {
  return (
    <section id="duvidas" className="faq">
      <div className="container section-pad faq-inner">
        <div className="faq-side">
          <p className="eyebrow">Dúvidas</p>
          <h2 className="section-title">Perguntas comuns</h2>
          <p className="faq-intro">Não achou a sua? Me chama no WhatsApp e eu respondo.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline faq-cta">
            <IconChat size={18} />
            Tirar uma dúvida
          </a>
        </div>

        <div className="faq-list">
          {questions.map((item, i) => (
            <details key={item.question} open={i === 0}>
              <summary>
                {item.question}
                <IconPlus size={22} className="faq-plus" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
