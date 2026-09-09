export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Retail POS System",
    description:
      "Production-ready point-of-sale platform with inventory tracking, receipt printing, role-based access, and real-time sales reporting for retail operations.",
    image: "/images/projects/pos-system.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "REST API"],
    githubUrl: "https://github.com/nithurshan-g/retail-pos-system",
    liveUrl: "https://retail-pos-demo.example.com",
  },
  {
    title: "Finance Management System",
    description:
      "Internal finance dashboard for expense tracking, budget allocation, invoice management, and monthly reporting with audit-friendly workflows.",
    image: "/images/projects/finance-system.svg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/nithurshan-g/finance-management-system",
    liveUrl: "https://finance-mgmt-demo.example.com",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Client-facing online store with product catalog, cart checkout, order management, and admin panel built for small business retail clients.",
    image: "/images/projects/ecommerce.svg",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Supabase", "TypeScript"],
    githubUrl: "https://github.com/nithurshan-g/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.example.com",
  },
];
