"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "./ui/Container";

const bonuses = [
  {
    title: "1 séance de Drainage Lymphatique",
    description:
      "Éliminez les toxines et réduisez la rétention d'eau pour des résultats visibles plus rapidement.",
    value: "X",
  },
  {
    title: "Accès illimité à la piscine",
    description:
      "Profitez de la piscine pendant toute la durée du programme pour compléter votre récupération.",
    value: "X",
  },
];

export function BonusSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 bg-[var(--foreground)]">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold)]/20 text-[var(--gold-light)] text-sm font-medium mb-6"
          >
            <motion.svg
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
            Bonus exclusifs
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Réservez maintenant et recevez en plus
          </h2>
          <p className="text-white/60">
            Ces bonus sont offerts uniquement pour les inscriptions anticipées.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="space-y-4 max-w-xl mx-auto"
        >
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(184, 134, 11, 0.2)",
              }}
              className="p-6 rounded-[var(--radius-lg)] bg-white/5 border border-[var(--gold)]/30 cursor-default"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-medium text-white">{bonus.title}</h3>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="text-sm font-mono text-[var(--gold-light)] whitespace-nowrap"
                >
                  {bonus.value}
                </motion.span>
              </div>
              <p className="text-white/60 text-sm">{bonus.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-white/40">
            Valeur totale des bonus :{" "}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-[var(--gold-light)] font-medium"
            >
              X
            </motion.span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
