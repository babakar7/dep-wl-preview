"use client";

import { useState } from "react";
import { Container } from "./ui/Container";

const faqs = [
  {
    question: "Comment se passe une journée type ?",
    answer:
      "Vos 2 repas et votre jus détox sont livrés chaque jour (7j/7). Vous assistez à 3 séances de sport par semaine (environ 1h chacune) selon le planning établi. L'objectif quotidien : atteindre 10 000 pas pour maximiser vos résultats. Notre nutritionniste vous accompagne tout au long du programme.",
  },
  {
    question: "Je n'ai vraiment pas le temps, est-ce adapté pour moi ?",
    answer:
      "Absolument ! C'est exactement pour les femmes occupées que nous avons créé ce programme. Nous gérons la cuisine, vous n'avez qu'à vous présenter 3 fois par semaine aux séances. C'est le minimum d'effort pour un maximum de résultats.",
  },
  {
    question: "Et si je n'aime pas certains aliments ?",
    answer:
      "Lors du bilan nutritionnel initial, nous prenons en compte vos préférences et allergies alimentaires. Les menus sont adaptés à votre profil pour que vous appréciiez chaque repas.",
  },
  {
    question: "Que se passe-t-il après les 28 jours ?",
    answer:
      "Les diplômées du Protocole Revive ont accès à un tarif privilégié pour continuer pendant 1 mois avec notre abonnement. Vous pouvez poursuivre les entraînements et le suivi nutritionnel à un tarif préférentiel.",
  },
  {
    question: "Le paiement est-il en une fois ?",
    answer:
      "Oui, le paiement se fait en une fois à l'inscription. Cela inclut l'intégralité du programme sur 28 jours ainsi que tous les bonus.",
  },
  {
    question: "Où se déroulent les séances ?",
    answer:
      "Les séances ont lieu dans notre studio à Dakar. L'adresse exacte vous sera communiquée lors de votre inscription. Nous sommes facilement accessibles et disposons d'un parking.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-[var(--background-secondary)]">
      <Container size="md">
        <div className="text-center mb-12">
          <p className="text-[var(--accent)] text-sm font-medium tracking-wide uppercase mb-4">
            Questions fréquentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--foreground)]">
            Vous avez des questions ?
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[var(--radius-md)] bg-[var(--background-tertiary)] border border-[var(--border)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium text-[var(--foreground)]">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[var(--foreground-muted)] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
