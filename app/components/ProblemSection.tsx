import { Container } from "./ui/Container";

const problems = [
  {
    title: "Le manque de temps",
    description:
      "Entre le travail, la famille et les obligations, impossible de trouver le temps pour cuisiner sainement et faire du sport régulièrement.",
  },
  {
    title: "Les régimes qui échouent",
    description:
      "Vous avez essayé plusieurs régimes, mais les résultats ne durent jamais. La motivation s'effrite après quelques semaines.",
  },
  {
    title: "Le manque de suivi",
    description:
      "Seule, c'est difficile de rester disciplinée. Sans accompagnement, on abandonne facilement face aux premiers obstacles.",
  },
  {
    title: "La solitude du parcours",
    description:
      "Vous vous sentez seule dans votre démarche. Personne autour de vous ne comprend vraiment vos défis et vos objectifs.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--foreground)]">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[var(--accent)] text-sm font-medium tracking-wide uppercase mb-4">
            Vous reconnaissez-vous ?
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Vous voulez changer, mais quelque chose vous retient
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-6 rounded-[var(--radius-lg)] bg-white/5 border border-white/10"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <span className="text-white/60 text-lg">{index + 1}</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                {problem.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
