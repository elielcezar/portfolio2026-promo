import "./Steps.css";

const steps = [
  {
    title: "Conversa",
    text: "Você me conta sobre o seu negócio e o que precisa. Eu faço as perguntas certas e levanto os requisitos.",
  },
  {
    title: "Design",
    text: "Desenho as telas no Figma. Você vê como o site vai ficar e aprova antes de começar a programação.",
  },
  {
    title: "Programação",
    text: "Desenvolvo em WordPress, React ou Next.js — a tecnologia que fizer mais sentido para o seu caso.",
  },
  {
    title: "Site no ar",
    text: "Publico no servidor, testo tudo e te entrego o site funcionando — com a explicação do que você precisa saber.",
  },
];

export default function Steps() {
  return (
    <section id="como-funciona">
      <div className="container section-pad steps-inner">
        <div className="steps-head">
          <h2 className="section-title">Do primeiro papo ao site no ar, em <span className="highlight">4 etapas</span></h2>
        </div>

        <ol className="steps-list">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
