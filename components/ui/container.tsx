import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div"> & {
  gradient?: boolean;
};

export function Container({ className, gradient = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn("relative", gradient && "section-gradient", className)}
      {...props}
    />
  );
}
