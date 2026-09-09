import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: cn(
    "glow-button-primary rounded-lg px-6 py-3 text-sm font-semibold",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ),
  secondary: cn(
    "glow-button-secondary rounded-lg px-6 py-3 text-sm font-semibold",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ),
  ghost: cn(
    "rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors",
    "hover:text-accent hover:bg-accent/10",
  ),
};

export function Button({
  className,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn("inline-flex items-center justify-center", variantClasses[variant], className)}
      {...props}
    />
  );
}
