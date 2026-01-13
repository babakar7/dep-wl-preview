"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

type FormData = {
  prenom: string;
  whatsapp: string;
  email: string;
  age: string;
  objectif: string;
  obstacles: string;
  source: string;
  engagement: string;
};

const initialFormData: FormData = {
  prenom: "",
  whatsapp: "",
  email: "",
  age: "",
  objectif: "",
  obstacles: "",
  source: "",
  engagement: "",
};

export default function InscriptionPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-[var(--accent-light)] flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-[var(--accent)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] mb-4">
            Candidature envoyée !
          </h1>
          <p className="text-[var(--foreground-secondary)] mb-8">
            Merci pour votre intérêt pour le Protocole Revive. Notre équipe va
            examiner votre candidature et vous contactera très bientôt sur
            WhatsApp.
          </p>
          <Link
            href="/"
            className="text-[var(--accent)] hover:underline font-medium"
          >
            &larr; Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="py-6 border-b border-[var(--border)]">
        <Container>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-[var(--foreground)]"
            >
              REVIVE
            </Link>
            <Link
              href="/"
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
            >
              &larr; Retour
            </Link>
          </div>
        </Container>
      </header>

      {/* Form */}
      <main className="py-12 sm:py-20">
        <Container size="sm">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] mb-3">
                Postuler pour le Protocole Revive
              </h1>
              <p className="text-[var(--foreground-secondary)]">
                Remplissez ce formulaire pour rejoindre la prochaine cohorte.
                Nous vous contacterons sous 24h.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Prénom */}
              <div>
                <label
                  htmlFor="prenom"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-tertiary)] text-[var(--foreground)] placeholder:text-[var(--foreground-faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                  placeholder="Votre prénom"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Numéro WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-tertiary)] text-[var(--foreground)] placeholder:text-[var(--foreground-faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                  placeholder="+221 7X XXX XX XX"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-tertiary)] text-[var(--foreground)] placeholder:text-[var(--foreground-faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Age */}
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Tranche d&apos;âge
                </label>
                <select
                  id="age"
                  name="age"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-tertiary)] text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2378716C'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    backgroundSize: "20px",
                  }}
                >
                  <option value="">Sélectionnez votre tranche d&apos;âge</option>
                  <option value="25-30">25-30 ans</option>
                  <option value="31-35">31-35 ans</option>
                  <option value="36-40">36-40 ans</option>
                  <option value="41-45">41-45 ans</option>
                  <option value="46+">46 ans et plus</option>
                </select>
              </div>

              {/* Objectif */}
              <div>
                <label
                  htmlFor="objectif"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Quel est votre objectif principal ?
                </label>
                <select
                  id="objectif"
                  name="objectif"
                  required
                  value={formData.objectif}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-tertiary)] text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2378716C'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    backgroundSize: "20px",
                  }}
                >
                  <option value="">Sélectionnez un objectif</option>
                  <option value="perdre-poids">Perdre du poids</option>
                  <option value="tonifier">Me tonifier</option>
                  <option value="energie">Retrouver de l&apos;énergie</option>
                  <option value="bien-etre">Me sentir bien dans mon corps</option>
                </select>
              </div>

              {/* Obstacles */}
              <div>
                <label
                  htmlFor="obstacles"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Qu&apos;est-ce qui vous a empêchée d&apos;atteindre vos objectifs
                  jusqu&apos;ici ?
                </label>
                <textarea
                  id="obstacles"
                  name="obstacles"
                  required
                  rows={4}
                  value={formData.obstacles}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-tertiary)] text-[var(--foreground)] placeholder:text-[var(--foreground-faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors resize-none"
                  placeholder="Partagez brièvement votre expérience..."
                />
              </div>

              {/* Source */}
              <div>
                <label
                  htmlFor="source"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Comment avez-vous entendu parler de Revive ?
                </label>
                <select
                  id="source"
                  name="source"
                  required
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-tertiary)] text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2378716C'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    backgroundSize: "20px",
                  }}
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="instagram">Instagram</option>
                  <option value="amie">Recommandation d&apos;une amie</option>
                  <option value="google">Google</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {/* Engagement */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-3">
                  Êtes-vous prête à vous engager sur 28 jours ?
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="engagement"
                      value="oui"
                      required
                      checked={formData.engagement === "oui"}
                      onChange={handleChange}
                      className="w-5 h-5 text-[var(--accent)] border-[var(--border)] focus:ring-[var(--accent)] cursor-pointer"
                    />
                    <span className="text-[var(--foreground)]">
                      Oui, je suis prête à m&apos;engager
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="engagement"
                      value="questions"
                      checked={formData.engagement === "questions"}
                      onChange={handleChange}
                      className="w-5 h-5 text-[var(--accent)] border-[var(--border)] focus:ring-[var(--accent)] cursor-pointer"
                    />
                    <span className="text-[var(--foreground)]">
                      J&apos;ai encore des questions
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma candidature"}
                </Button>
                <p className="mt-4 text-center text-sm text-[var(--foreground-muted)]">
                  Nous vous contacterons sous 24h sur WhatsApp
                </p>
              </div>
            </form>
          </div>
        </Container>
      </main>
    </div>
  );
}
