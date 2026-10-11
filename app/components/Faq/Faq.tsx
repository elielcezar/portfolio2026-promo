"use client";

import { useState } from "react";
import { IconChat, IconPlus } from "../Icons";
import { WHATSAPP_URL } from "@/lib/contact";
import "./Faq.css";

const questions = [
  {
    question: "Quanto custa um site?",
    answer: "Depende da complexidade: uma landing page é simples e rápida de fazer, um site institucional leva um pouco mais de tempo e um e-commerce é algo complexo. Mas, em geral, a partir de R$500,00 já é possível desenvolver um projeto para o seu negócio.",
  },
  {
    question: "Em quanto tempo o site fica pronto?",
    answer: "Sites institucionais simples geralmente ficam prontos entre 3 a 5 dias, enquanto projetos mais elaborados podem levar até 1 mês. O prazo exato você fica sabendo ao final da nossa primeira reunião, após entendermos o que você e sua empresa precisam. ",
  },
  {
    question: "O site será responsivo (mobile)?",
    answer: "Sim! Todos os nossos sites são 100% responsivos, ou seja, se adaptam perfeitamente a qualquer dispositivo: celulares, tablets, notebooks e desktops. Isso é essencial para uma boa experiência do usuário e para o SEO.",
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
    answer: "Sim. Você terá acesso a uma área de administração completa para editar textos e fotos sem precisar de conhecimento técnico.",
  },
  {
    question: "Como funciona o suporte após a entrega?",
    answer: "Eu ofereço 90 dias de suporte gratuito após a entrega para ajustes e dúvidas em em todos os projetos que desenvolvo. Após esse período, se você achar necessário, podemos combinar um plano de manutenção mensal.",
  }
];

export default function Faq() {
  // Só um item aberto por vez; null = todos fechados
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="faq">
      <div className="container section-pad faq-inner">
        <div className="faq-side">
          <h2 className="section-title">Perguntas frequentes</h2>
          <p className="faq-intro">Tem mais dúvidas? Me chama no WhatsApp e eu respondo: <strong>(41) 99963-1609</strong></p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline faq-cta">
            <IconChat size={18} />
            Tirar uma dúvida
          </a>
        </div>

        <div className="faq-list">
          {questions.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <div key={item.question} className={`faq-item${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {item.question}
                  <IconPlus size={22} className="faq-plus" />
                </button>
                {/* A grade anima de 0fr para 1fr: altura automática com transição */}
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className="faq-answer"
                  inert={!isOpen}
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
