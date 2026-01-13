"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-b from-[var(--background)] to-[var(--background-secondary)]">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-light)] text-[var(--accent)] text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            Seulement 5 places par mois
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[var(--foreground)] leading-tight"
          >
            Perdez 6kg en 28 jours *
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[var(--accent)]"
            >
              On s&apos;occupe de tout.
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            Le programme clés en main pour les femmes actives de Dakar qui
            veulent des résultats visibles, sans gérer les détails.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/inscription" size="lg">
              Postuler pour la prochaine cohorte
            </Button>
            <motion.a
              href="#programme"
              className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors text-sm"
              whileHover={{ y: 2 }}
              transition={{ duration: 0.2 }}
            >
              Découvrir le programme &darr;
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-[var(--border)]"
          >
            <p className="text-sm text-[var(--foreground-muted)] mb-4">
              Ce qui vous attend
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-[var(--foreground-secondary)]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="flex items-center gap-2"
              >
                <span className="text-2xl font-semibold text-[var(--foreground)]">28</span>
                <span className="text-sm">jours de<br />transformation</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                className="flex items-center gap-2"
              >
                <span className="text-2xl font-semibold text-[var(--foreground)]">12</span>
                <span className="text-sm">séances<br />sportives</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="flex items-center gap-2"
              >
                <span className="text-2xl font-semibold text-[var(--foreground)]">56</span>
                <span className="text-sm">repas sains<br />livrés</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
