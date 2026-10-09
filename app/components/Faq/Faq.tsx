import { IconChat, IconPlus } from "../Icons";
import { WHATSAPP_URL } from "@/lib/contact";
import "./Faq.css";

const questions = [
  {
    question: "Quanto custa um site?",
    answer: "Depende da complexidade do projeto: uma landing page é simples e rápida de fazer, um site institucional leva um pouco mais de tempo e um e-commerce é algo mais complexo. Mas, em geral, a partir de R$500,00 já é possível desenvolver algo para o seu negócio.",
  },
  {
    question: "Em quanto tempo o site fica pronto?",
    answer: "Uma landing page costuma levar de 2 a 5 dias e um site institucional, cerca de 2 semanas. O prazo exato a gente define na primeira reunião, após entender o que você e sua empresa precisam.",
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
    answer: "Se for importante para você editar textos e fotos, eu incluo um painel de administração completo e mostro como atualizar os conteúdos. É bem fácil.",
  },
];

export default function Faq() {
  return (
    <section id="duvidas" className="faq">
      <div className="container section-pad faq-inner">
        <div className="faq-side">
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
