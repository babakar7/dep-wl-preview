"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium whitespace-nowrap";

  const variants = {
    primary:
      "bg-[var(--accent)] text-white shadow-[var(--shadow-md)]",
    secondary:
      "bg-[var(--foreground)] text-white",
    outline:
      "bg-transparent text-[var(--foreground)] border border-[var(--border-strong)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-[13px] rounded-[var(--radius-sm)]",
    md: "px-6 py-3 text-[14px] rounded-[var(--radius-md)]",
    lg: "px-8 py-4 text-[16px] rounded-[var(--radius-lg)]",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionLink = motion.create(Link);

  if (href) {
    return (
      <MotionLink
        href={href}
        className={styles}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 30px -10px rgba(124, 84, 125, 0.4)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      whileHover={
        disabled
          ? {}
          : {
              scale: 1.02,
              boxShadow: "0 10px 30px -10px rgba(124, 84, 125, 0.4)",
            }
      }
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {children}
    </motion.button>
  );
}
