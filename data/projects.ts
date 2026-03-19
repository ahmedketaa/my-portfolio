export type ProjectCategory =
  | "all"
  | "fullstack"
  | "frontend"
  | "education"
  | "business";

export type ProjectLink = {
  type: "live" | "github" | "caseStudy" | "preview";
  href: string;
  label: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectPreview = {
  type: "iframe" | "image";
  src: string;
  title: string;
  allowFullscreen?: boolean;
};

export type ProjectItem = {
  id: string;
  slug: string;
  featured: boolean;
  category: Exclude<ProjectCategory, "all">;
  translationKey: string;
  year: string;
  status: "live" | "private" | "case-study";
  role: "Full Stack Developer" | "Frontend Developer" | "Frontend Contributor";
  company?: string;
  stack: string[];
  metrics: ProjectMetric[];
  links: ProjectLink[];
  preview?: ProjectPreview;
};

export const projects: ProjectItem[] = [
  {
    id: "qandeil",
    slug: "qandeil-legal-platform",
    featured: true,
    category: "business",
    translationKey: "qandeil",
    year: "2025",
    status: "live",
    role: "Full Stack Developer",
    company: "Project-Based Work · Abu Dhabi",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    metrics: [
      { label: "items.qandeil.metrics.type", value: "Business Website" },
      { label: "items.qandeil.metrics.scope", value: "End-to-End Delivery" },
      { label: "items.qandeil.metrics.focus", value: "SEO + Marketing" },
    ],
    links: [
      {
        type: "live",
        href: "https://qandeil.com/",
        label: "actions.liveSite",
      },
      {
        type: "preview",
        href: "https://qandeil.com/",
        label: "actions.previewInside",
      },
    ],
    preview: {
      type: "iframe",
      src: "https://qandeil.com/",
      title: "Qandeil preview",
      allowFullscreen: true,
    },
  },
  {
    id: "los-academy",
    slug: "los-academy-platform",
    featured: true,
    category: "education",
    translationKey: "losAcademy",
    year: "2024",
    status: "live",
    role: "Frontend Contributor",
    company: "Los Academy",
    stack: ["Next.js", "Authentication", "Responsive UI"],
    metrics: [
      { label: "items.losAcademy.metrics.contribution", value: "40%" },
      { label: "items.losAcademy.metrics.modules", value: "Auth + Student Profile" },
      { label: "items.losAcademy.metrics.type", value: "Learning Platform" },
    ],
    links: [
      {
        type: "live",
        href: "https://www.los-academy.net/",
        label: "actions.liveSite",
      },
      {
        type: "preview",
        href: "https://www.los-academy.net/",
        label: "actions.previewInside",
      },
    ],
    preview: {
      type: "iframe",
      src: "https://www.los-academy.net/",
      title: "Los Academy preview",
      allowFullscreen: true,
    },
  },
  {
    id: "react-ecommerce",
    slug: "react-ecommerce",
    featured: true,
    category: "frontend",
    translationKey: "reactEcommerce",
    year: "2024",
    status: "case-study",
    role: "Frontend Developer",
    stack: ["React", "JavaScript", "Responsive UI", "Cart Logic"],
    metrics: [
      { label: "items.reactEcommerce.metrics.type", value: "E-Commerce" },
      { label: "items.reactEcommerce.metrics.modules", value: "Cart + Product Listing" },
      { label: "items.reactEcommerce.metrics.focus", value: "Reusable UI" },
    ],
    links: [
      {
        type: "github",
        href: "https://github.com/ahmedketaa/react-e-commerce",
        label: "actions.github",
      },
    ],
  },
  {
    id: "hospital-system",
    slug: "hospital-system",
    featured: true,
    category: "fullstack",
    translationKey: "hospitalSystem",
    year: "2024",
    status: "case-study",
    role: "Frontend Developer",
    stack: ["React", "Tailwind CSS", "Dashboard UI", "State Management"],
    metrics: [
      { label: "items.hospitalSystem.metrics.type", value: "Management System" },
      { label: "items.hospitalSystem.metrics.modules", value: "Patients + Appointments" },
      { label: "items.hospitalSystem.metrics.focus", value: "Dashboard UX" },
    ],
    links: [
      {
        type: "github",
        href: "https://github.com/ahmedketaa/Hospital-system",
        label: "actions.github",
      },
    ],
  },
];