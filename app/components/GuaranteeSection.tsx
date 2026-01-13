import { Container } from "./ui/Container";

export function GuaranteeSection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--accent)]">
      <Container size="md">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-8">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
            Zéro risque. Résultats garantis.
          </h2>

          <blockquote className="max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl text-white/90 italic leading-relaxed">
              &ldquo;Si vous ne perdez pas le poids promis et que vous suivez
              toutes les instructions, nous continuons à vous accompagner
              gratuitement jusqu&apos;à ce que vous atteigniez l&apos;objectif.&rdquo;
            </p>
          </blockquote>

          <p className="mt-8 text-white/70">
            Nous croyons tellement en notre méthode que nous prenons le risque à
            votre place.
          </p>
        </div>
      </Container>
    </section>
  );
}
