"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

const lineItems = [
  { label: "La Cuisine Totale Revive (42 repas + 21 jus, 7j/7)", value: "X" },
  { label: "9 séances d'entraînement", value: "X" },
  { label: "App de Suivi Revive Challenge", value: "X" },
  { label: "Suivi nutritionnel personnalisé", value: "X" },
  { label: "Suivi biométrique", value: "X" },
  { label: "Bonus exclusifs", value: "X" },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-[var(--background)]">
      <Container size="sm">
        <div className="max-w-xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            whileHover={{ y: -4 }}
            className="p-8 sm:p-10 rounded-[var(--radius-xl)] bg-[var(--background-tertiary)] border border-[var(--border)] shadow-[var(--shadow-lg)]"
          >
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[var(--accent)] text-sm font-medium tracking-wide uppercase mb-2"
              >
                Votre investissement
              </motion.p>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] mb-8"
              >
                Le Protocole Revive complet
              </motion.h2>

              {/* Value breakdown */}
              <div className="space-y-3 mb-8 text-left">
                {lineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-[var(--foreground-muted)]">
                      {item.label}
                    </span>
                    <span className="font-mono text-[var(--foreground-secondary)]">
                      {item.value}
                    </span>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.7 }}
                  className="pt-4 mt-4 border-t border-[var(--border)]"
                >
                  <div className="flex justify-between">
                    <span className="text-[var(--foreground-muted)]">
                      Valeur totale
                    </span>
                    <span className="font-mono text-[var(--foreground-muted)] line-through">
                      X
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Price */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                className="py-6 border-y border-[var(--border)]"
              >
                <p className="text-sm text-[var(--foreground-muted)] mb-2">
                  Prix du programme
                </p>
                <p className="text-4xl sm:text-5xl font-semibold text-[var(--foreground)]">
                  X{" "}
                  <span className="text-lg font-normal text-[var(--foreground-muted)]">
                    FCFA
                  </span>
                </p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.2 }}
                  className="mt-2 text-sm text-[var(--accent)] font-medium"
                >
                  Économisez X
                </motion.p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1 }}
                className="mt-8"
              >
                <Button href="/inscription" size="lg" className="w-full">
                  Postuler maintenant
                </Button>
                <p className="mt-4 text-sm text-[var(--foreground-muted)]">
                  Seulement 5 places par cohorte
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* After program note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-6 rounded-[var(--radius-lg)] bg-[var(--accent-light)] text-center"
          >
            <p className="text-sm text-[var(--accent)]">
              <strong>Et après ?</strong> Les diplômées du Protocole Revive
              bénéficient d&apos;un tarif privilégié pour poursuivre leur
              transformation avec un abonnement membre.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
