import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "md" | "lg" | "sm";
  className?: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
};

const variants: Record<string, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-600/20",
  secondary:
    "bg-white text-brand-700 border border-brand-200 hover:bg-brand-50",
  ghost: "text-foreground hover:bg-brand-50",
  outline:
    "border border-white/30 text-white hover:bg-white/10",
};

const sizes: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  icon: Icon,
  iconPosition = "right",
  type,
  onClick,
}: BaseProps & {
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {Icon && iconPosition === "left" ? <Icon className="size-4" /> : null}
      {children}
      {Icon && iconPosition === "right" ? <Icon className="size-4" /> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
