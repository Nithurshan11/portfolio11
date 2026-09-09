"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

const fieldClassName = cn(
  "input-glow w-full rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground",
  "transition-colors placeholder:text-muted",
);

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Failed to send message.");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message.");
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
          Name
        </label>
        <input id="name" type="text" className={fieldClassName} {...register("name")} />
        {errors.name ? <p className="mt-1 text-sm text-red-400">{errors.name.message}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
          Email
        </label>
        <input id="email" type="email" className={fieldClassName} {...register("email")} />
        {errors.email ? <p className="mt-1 text-sm text-red-400">{errors.email.message}</p> : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(fieldClassName, "resize-y")}
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" ? (
        <p className="text-sm font-medium text-emerald-400">
          Thank you! Your message has been sent successfully.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm font-medium text-red-400">{errorMessage}</p>
      ) : null}
    </form>
  );
}
