import Link from "next/link";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/icons/brands";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { contact } from "@/lib/contact";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

const socialItems = [
  {
    href: contact.whatsapp,
    label: "WhatsApp",
    icon: WhatsAppIcon,
  },
  {
    href: contact.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: `mailto:${contact.email}`,
    label: "Email",
    icon: EmailIcon,
  },
  {
    href: contact.github,
    label: "GitHub",
    icon: GitHubIcon,
  },
] as const;

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialItems.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border",
            "bg-surface text-foreground transition-all duration-200",
            "hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_16px_var(--accent-glow-soft)]",
          )}
        >
          <Icon className={cn("h-4 w-4", iconClassName)} />
        </Link>
      ))}
    </div>
  );
}
