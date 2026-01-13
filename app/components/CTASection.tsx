import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--background)]">
      <Container size="sm">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--foreground)] mb-4">
            Prête à transformer votre corps ?
          </h2>
          <p className="text-lg text-[var(--foreground-secondary)] mb-8 max-w-lg mx-auto">
            Rejoignez la prochaine cohorte et laissez-nous vous accompagner vers
            la meilleure version de vous-même.
          </p>

          <Button href="/inscription" size="lg">
            Postuler pour la prochaine cohorte
          </Button>

          <p className="mt-6 text-sm text-[var(--foreground-muted)]">
            5 places maximum par mois &bull; Inscriptions limitées
          </p>
        </div>
      </Container>
    </section>
  );
}
