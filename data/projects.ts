import type { StaticImageData } from "next/image";

import callphoneng from "@/public/images/projects/callphoneng.webp";
import saltAtlas from "@/public/images/projects/salt-atlas.webp";
import buttonApp from "@/public/images/projects/button-app.webp";
import estateDesktop from "@/public/images/projects/estate-desktop.webp";
import estatePhone from "@/public/images/projects/estate-phone.webp";
import fredRealtors from "@/public/images/projects/fred-realtors.webp";
import nailTechDesktop from "@/public/images/projects/nail-tech-desktop.webp";
import nailTechPhone from "@/public/images/projects/nail-tech-phone.webp";
import lagosLife from "@/public/images/projects/lagos-life.webp";
import obsidianDesktop from "@/public/images/projects/obsidian-desktop.webp";
import obsidianPhone from "@/public/images/projects/obsidian-phone.webp";
import enterpriseAdminDesktop from "@/public/images/projects/enterprise-admin-desktop.webp";
import enterpriseAdminPhone from "@/public/images/projects/enterprise-admin-phone.webp";
import lexiflowAi from "@/public/images/projects/lexiflow-ai.webp";
import magxiTaste from "@/public/images/projects/magxi-taste.webp";
import floorHosting from "@/public/images/projects/floor-hosting.webp";
import hopebridgeDesktop from "@/public/images/projects/hopebridge-desktop.webp";
import hopebridgePhone from "@/public/images/projects/hopebridge-phone.webp";

export type ProjectCategory = "Website" | "Web App" | "Mobile App";

export type Project = {
  title: string;
  category: ProjectCategory;
  featured: boolean;
  link: string;
  description: string;
  problem?: string;
  solution?: string;
  result?: string;
  desktopImage: StaticImageData;
  phoneImage?: StaticImageData;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    title: "Callphoneng",
    category: "Web App",
    featured: true,
    link: "https://www.callphoneng.com/",
    description:
      "A digital payments platform for bill payments, airtime top-ups, and transactions, integrated with a REST API handling payments and user authentication.",
    desktopImage: callphoneng,
    imageAlt:
      "Callphoneng digital payments platform showing bill payments and airtime top-up features",
  },
  {
    title: "Salt Atlas",
    category: "Web App",
    featured: true,
    link: "https://salt-atlas.vercel.app/",
    description:
      "A county-level geospatial analytics platform for identifying high-opportunity supply chain regions across the United States.",
    problem:
      "The team needed a centralized tool to explore large geographic data sets without switching between multiple spreadsheets.",
    solution:
      "Built a full-stack web app with an interactive opportunity map, searchable tables, category filters, and a clean dashboard layout optimized for daily use.",
    result:
      "Reduced time spent on data analysis and gave the team a single place to spot and act on regional opportunities.",
    desktopImage: saltAtlas,
    imageAlt:
      "Salt Atlas geospatial analytics platform with county-level opportunity map of the United States",
  },
  {
    title: "Button",
    category: "Mobile App",
    featured: true,
    link: "https://getbuttonapp.com/",
    description:
      "An event planner mobile app: hold one button, speak your plans out loud, and every event lands in your Google Calendar automatically. No typing, no tapping.",
    desktopImage: buttonApp,
    imageAlt:
      "Button event planner mobile app screenshots showing voice-to-calendar planning",
  },
  {
    title: "Workload Studios Estate",
    category: "Website",
    featured: false,
    link: "https://workload-studios-estate.vercel.app/",
    description:
      "A luxury Nigerian real estate platform with a concierge-style service model.",
    problem:
      "The client needed a modern platform to showcase luxury property listings and convert high-intent visitors into inquiries.",
    solution:
      "Built a full multi-page site with featured listings, advanced search, inquiry capture, and an admin dashboard for property and team management.",
    result:
      "Improved lead quality and made it faster for the client's team to manage and update their listings.",
    desktopImage: estateDesktop,
    phoneImage: estatePhone,
    imageAlt:
      "Workload Studios Estate real estate website displaying property listings with search and inquiry features",
  },
  {
    title: "Fred Realtors",
    category: "Website",
    featured: false,
    link: "https://fred-realtors.vercel.app/",
    description:
      "A full real estate platform for a Lagos-based agency: property listings, area guides, filtering, inquiry forms, and an AI property assistant.",
    desktopImage: fredRealtors,
    imageAlt:
      "Fred Realtors real estate website with property listings, area guides, and AI assistant",
  },
  {
    title: "The Nail Tech",
    category: "Website",
    featured: false,
    link: "https://the-nail-tech.vercel.app/",
    description:
      "An appointment booking website for a nail salon, built around a clean, direct booking flow.",
    problem:
      "The client needed to take bookings without phone calls or back-and-forth messages.",
    solution:
      "Created a clean booking experience with service cards, pricing details, and a direct CTA routing to the booking flow.",
    result:
      "Improved customer engagement and reduced time spent managing bookings manually.",
    desktopImage: nailTechDesktop,
    phoneImage: nailTechPhone,
    imageAlt:
      "The Nail Tech nail salon appointment booking website with service selection and booking flow",
  },
  {
    title: "Lagos Life",
    category: "Website",
    featured: false,
    link: "https://lagos-life.vercel.app/",
    description:
      "The website for a Nigerian cultural platform with a 112k+ following, covering events, people, and culture across Lagos.",
    desktopImage: lagosLife,
    imageAlt:
      "Lagos Life cultural platform website covering events and culture across Lagos",
  },
  {
    title: "Obsidian SaaS Admin",
    category: "Web App",
    featured: false,
    link: "https://obsidian-saas-admin.vercel.app/",
    description:
      "A full-featured SaaS admin dashboard covering user management, analytics charts, notifications, and settings, structured for a real product.",
    problem:
      "The client needed a centralized dashboard to manage operations, track performance, and monitor team activity in a clean, scalable interface.",
    solution:
      "Designed and built a modern SaaS admin dashboard with analytics widgets, task management, user controls, and responsive navigation structured for real-time data integration.",
    result:
      "Delivered a polished, production-ready admin system that streamlines operations and provides a strong foundation for scaling.",
    desktopImage: obsidianDesktop,
    phoneImage: obsidianPhone,
    imageAlt:
      "Obsidian SaaS admin dashboard showing analytics widgets, task management, and responsive navigation",
  },
  {
    title: "Enterprise Admin UI",
    category: "Web App",
    featured: false,
    link: "https://enterprise-admin-ui.vercel.app/",
    description:
      "An internal admin panel with role-based authentication, task tracking, and priority breakdowns. Built as a scalable template for enterprise tools.",
    problem:
      "Internal teams needed a single place to manage support tickets, users, and system settings with fast filtering and clear status visibility.",
    solution:
      "Built a responsive admin dashboard with searchable, sortable ticket tables, bulk updates, CSV export, and a persistent sidebar for navigation.",
    result:
      "Streamlined ticket workflows and reduced time spent on repetitive updates through bulk actions and quick filtering.",
    desktopImage: enterpriseAdminDesktop,
    phoneImage: enterpriseAdminPhone,
    imageAlt:
      "Enterprise admin UI with ticket management tables, bulk actions, and sidebar navigation",
  },
  {
    title: "LexiFlow AI",
    category: "Web App",
    featured: false,
    link: "https://lexi-flow-ai.vercel.app/",
    description:
      "An AI-powered workflow tool with a focused conversation interface, session management, and a fast, responsive layout that works on any device.",
    desktopImage: lexiflowAi,
    imageAlt:
      "LexiFlow AI web application showing conversation interface and language processing features",
  },
  {
    title: "Magxi Taste",
    category: "Website",
    featured: false,
    link: "https://magxi-taste.vercel.app/",
    description:
      "The website for a fast food restaurant in Jos, Nigeria: menu, branding, and a proper online presence.",
    desktopImage: magxiTaste,
    imageAlt: "Magxi Taste fast food restaurant website with menu and branding",
  },
  {
    title: "Floor Hosting",
    category: "Website",
    featured: false,
    link: "https://floor-hosting-alfred-ulu.vercel.app/",
    description:
      "A web hosting platform UI with pricing tiers, deployment management, and a clean marketing landing page.",
    desktopImage: floorHosting,
    imageAlt:
      "Floor Hosting web hosting platform with pricing tiers and deployment management",
  },
  {
    title: "HopeBridge",
    category: "Website",
    featured: false,
    link: "",
    description:
      "A donation platform for a nonprofit, designed to make giving simple and to build trust with a clean, transparent layout.",
    desktopImage: hopebridgeDesktop,
    phoneImage: hopebridgePhone,
    imageAlt:
      "HopeBridge donation website with campaign highlights and giving flow",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function projectDomain(link: string): string | undefined {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return undefined;
  }
}
