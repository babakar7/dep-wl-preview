import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-white py-12">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-semibold tracking-tight">REVIVE</p>
            <p className="text-sm text-white/60 mt-1">
              Transformez votre corps en 28 jours
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-white/60">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/221XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <span>Dakar, Sénégal</span>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40">
          <p className="text-xs max-w-xl mx-auto mb-4">
            * Note légale : Perte de poids constatée allant jusqu&apos;à 6kg en 4
            semaines. Les résultats peuvent varier d&apos;une personne à
            l&apos;autre en fonction du métabolisme de base et de
            l&apos;assiduité au programme.
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Revive. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
}
