import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { ProgramDetails } from "./components/ProgramDetails";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { BonusSection } from "./components/BonusSection";
import { PricingSection } from "./components/PricingSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ProgramDetails />
        <GuaranteeSection />
        <BonusSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
