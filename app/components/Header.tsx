"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[var(--background)]/95 backdrop-blur-sm shadow-[var(--shadow-sm)]"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--foreground)]"
          >
            REVIVE
          </Link>

          <Button href="/inscription" size="sm">
            Rejoindre la cohorte
          </Button>
        </div>
      </Container>
    </header>
  );
}
