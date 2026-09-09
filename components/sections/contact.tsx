import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/icons/brands";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { contact } from "@/lib/contact";
import { cn } from "@/lib/utils";

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Phone no", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { label: "Location", value: contact.location },
  { label: "LinkedIn", value: "LinkedIn Profile", href: contact.linkedin, external: true },
];

const socialButtons = [
  { label: "GitHub", href: contact.github, icon: GitHubIcon },
  { label: "LinkedIn", href: contact.linkedin, icon: LinkedInIcon },
  { label: "Email", href: `mailto:${contact.email}`, icon: EmailIcon },
] as const;

export function Contact() {
  return (
    <section id="contact" className="section-gradient bg-background py-16 sm:py-20">
      <Container className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Contact"
          description="Get in touch for collaborations, opportunities, or project inquiries."
        />

        <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <div className="glow-card space-y-4 p-5 sm:p-6">
              {contactItems.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                    {item.label}
                  </p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="mt-1 inline-block text-sm font-medium text-foreground transition-colors hover:text-accent sm:text-base"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-foreground sm:text-base">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialButtons.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "glow-button-secondary inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold",
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="glow-card p-5 sm:p-6">
            <h3 className="mb-5 text-lg font-semibold text-foreground">Send a Message</h3>
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
