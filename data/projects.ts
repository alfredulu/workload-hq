import type { StaticImageData } from "next/image";

import callphoneng from "@/public/images/projects/callphoneng.webp";
import saltAtlas from "@/public/images/projects/salt-atlas.webp";
import buttonApp from "@/public/images/projects/button-app.webp";
import kennyscentDesktop from "@/public/images/projects/kennyscent-desktop.webp";
import kennyscentPhone from "@/public/images/projects/kennyscent-phone.webp";
import lagosLife from "@/public/images/projects/lagos-life.webp";
import ankaraDesktop from "@/public/images/projects/ankara-desktop.webp";
import ankaraPhone from "@/public/images/projects/ankara-phone.webp";
import fredRealtors from "@/public/images/projects/fred-realtors.webp";
import nailTechDesktop from "@/public/images/projects/nail-tech-desktop.webp";
import nailTechPhone from "@/public/images/projects/nail-tech-phone.webp";
import magxiTaste from "@/public/images/projects/magxi-taste.webp";
import estateDesktop from "@/public/images/projects/estate-desktop.webp";
import estatePhone from "@/public/images/projects/estate-phone.webp";
import obsidianDesktop from "@/public/images/projects/obsidian-desktop.webp";
import obsidianPhone from "@/public/images/projects/obsidian-phone.webp";
import enterpriseAdminDesktop from "@/public/images/projects/enterprise-admin-desktop.webp";
import enterpriseAdminPhone from "@/public/images/projects/enterprise-admin-phone.webp";
import hopebridgeDesktop from "@/public/images/projects/hopebridge-desktop.webp";
import hopebridgePhone from "@/public/images/projects/hopebridge-phone.webp";
import lexiflowAi from "@/public/images/projects/lexiflow-ai.webp";
import floorHosting from "@/public/images/projects/floor-hosting.webp";

export type ProjectCategory = "Website" | "Web App" | "Mobile App";

export type Project = {
  title: string;
  category: ProjectCategory;
  featured: boolean;
  link: string;
  description: string;
  highlights: string[];
  desktopImage: StaticImageData;
  phoneImage?: StaticImageData;
  imageAlt: string;
};

// Ordered strongest-first: live client work above internal/demo builds.
export const projects: Project[] = [
  {
    title: "Callphoneng",
    category: "Web App",
    featured: true,
    link: "https://www.callphoneng.com/",
    description:
      "A digital payments platform for bill payments, airtime top-ups, and transactions, integrated with a REST API handling payments and user authentication.",
    highlights: ["Bill payments", "Airtime top-ups", "User accounts"],
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
      "A county-level geospatial analytics platform for identifying high-opportunity supply chain regions across the United States. Interactive opportunity map, region filters, and a dashboard built for daily analysis.",
    highlights: ["Interactive map", "Region filters", "Analytics dashboard"],
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
    highlights: ["Voice input", "Auto calendar events", "iOS & Android"],
    desktopImage: buttonApp,
    imageAlt:
      "Button event planner mobile app screenshots showing voice-to-calendar planning",
  },
  {
    title: "Kennyscent & Confectionery",
    category: "Website",
    featured: false,
    link: "https://kennyscent-and-confectionery.pages.dev/",
    description:
      "A full catalog site for a registered Lagos perfume and gifting business: shop by collection, product pages, live search, and orders routed straight to WhatsApp with no checkout friction.",
    highlights: ["Product catalog", "Live search", "WhatsApp ordering"],
    desktopImage: kennyscentDesktop,
    phoneImage: kennyscentPhone,
    imageAlt:
      "Kennyscent & Confectionery online shop with perfume collections, product pages, and WhatsApp ordering",
  },
  {
    title: "Lagos Life",
    category: "Website",
    featured: false,
    link: "https://lagos-life.vercel.app/",
    description:
      "The website for a Nigerian cultural platform with a 112k+ following, covering events, people, and culture across Lagos.",
    highlights: ["Culture platform", "Events coverage", "112k+ audience"],
    desktopImage: lagosLife,
    imageAlt:
      "Lagos Life cultural platform website covering events and culture across Lagos",
  },
  {
    title: "Ankara World",
    category: "Website",
    featured: false,
    link: "https://ankara-world.pages.dev/",
    description:
      "The brand site for a Lagos label crafting handmade Ankara and Asooke bags since 2018. Smooth-scroll storytelling, featured collections, and editorial motion design that makes the craft the star.",
    highlights: ["Brand storytelling", "Smooth scrolling", "Featured collections"],
    desktopImage: ankaraDesktop,
    phoneImage: ankaraPhone,
    imageAlt:
      "Ankara World fashion brand website with smooth-scroll storytelling and featured collections",
  },
  {
    title: "Obsidian SaaS Admin",
    category: "Web App",
    featured: false,
    link: "https://obsidian-saas-admin.vercel.app/",
    description:
      "A full-featured SaaS admin dashboard covering user management, analytics charts, notifications, and settings, structured for a real product.",
    highlights: ["Analytics dashboard", "User management", "Notifications & settings"],
    desktopImage: obsidianDesktop,
    phoneImage: obsidianPhone,
    imageAlt:
      "Obsidian SaaS admin dashboard showing analytics widgets, task management, and responsive navigation",
  },
  {
    title: "Fred Realtors",
    category: "Website",
    featured: false,
    link: "https://fred-realtors.vercel.app/",
    description:
      "A full real estate platform for a Lagos-based agency: property listings, area guides, filtering, inquiry forms, and an AI property assistant.",
    highlights: ["Property listings", "AI property assistant", "Area guides"],
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
      "An appointment booking website for a nail salon: service cards, pricing, and a direct booking flow that replaced phone-call back-and-forth.",
    highlights: ["Online booking", "Service menu", "Direct CTAs"],
    desktopImage: nailTechDesktop,
    phoneImage: nailTechPhone,
    imageAlt:
      "The Nail Tech nail salon appointment booking website with service selection and booking flow",
  },
  {
    title: "Magxi Taste",
    category: "Website",
    featured: false,
    link: "https://magxi-taste.vercel.app/",
    description:
      "The website for a fast food restaurant in Jos, Nigeria: menu, branding, and a proper online presence.",
    highlights: ["Digital menu", "Brand presence", "Local business"],
    desktopImage: magxiTaste,
    imageAlt: "Magxi Taste fast food restaurant website with menu and branding",
  },
  {
    title: "Workload Studios Estate",
    category: "Website",
    featured: false,
    link: "https://workload-studios-estate.vercel.app/",
    description:
      "A luxury real estate platform with featured listings, advanced search, inquiry capture, and an admin dashboard for property and team management.",
    highlights: ["Listings & search", "Admin dashboard", "Inquiry capture"],
    desktopImage: estateDesktop,
    phoneImage: estatePhone,
    imageAlt:
      "Workload Studios Estate real estate website displaying property listings with search and inquiry features",
  },
  {
    title: "Enterprise Admin UI",
    category: "Web App",
    featured: false,
    link: "https://enterprise-admin-ui.vercel.app/",
    description:
      "An internal admin panel with role-based authentication, task tracking, bulk actions, and priority breakdowns. Built as a scalable template for enterprise tools.",
    highlights: ["Role-based access", "Bulk actions", "CSV export"],
    desktopImage: enterpriseAdminDesktop,
    phoneImage: enterpriseAdminPhone,
    imageAlt:
      "Enterprise admin UI with ticket management tables, bulk actions, and sidebar navigation",
  },
  {
    title: "HopeBridge",
    category: "Website",
    featured: false,
    link: "",
    description:
      "A donation platform for a nonprofit, designed to make giving simple and to build trust with a clean, transparent layout.",
    highlights: ["Donation flow", "Campaign highlights", "Trust-first design"],
    desktopImage: hopebridgeDesktop,
    phoneImage: hopebridgePhone,
    imageAlt:
      "HopeBridge donation website with campaign highlights and giving flow",
  },
  {
    title: "LexiFlow AI",
    category: "Web App",
    featured: false,
    link: "https://lexi-flow-ai.vercel.app/",
    description:
      "An AI-powered workflow tool with a focused conversation interface, session management, and a fast, responsive layout that works on any device.",
    highlights: ["AI chat interface", "Session management", "Works on any device"],
    desktopImage: lexiflowAi,
    imageAlt:
      "LexiFlow AI web application showing conversation interface and language processing features",
  },
  {
    title: "Floor Hosting",
    category: "Website",
    featured: false,
    link: "https://floor-hosting-alfred-ulu.vercel.app/",
    description:
      "A web hosting platform UI with pricing tiers, deployment management, and a clean marketing landing page.",
    highlights: ["Pricing tiers", "Deployment dashboard", "Marketing pages"],
    desktopImage: floorHosting,
    imageAlt:
      "Floor Hosting web hosting platform with pricing tiers and deployment management",
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

export type FreeTool = {
  name: string;
  description: string;
  link: string;
  github: string;
};

export const freeTools: FreeTool[] = [
  {
    name: "Webp-Recast",
    description:
      "Convert and resize images for the web, right in your browser. Files never leave your device.",
    link: "https://webp-recast.vercel.app/",
    github: "https://github.com/alfredulu/webp-recast",
  },
  {
    name: "PDF Squeeze",
    description:
      "Compress a PDF in seconds. No account, no upload. Everything runs in your browser.",
    link: "https://pdf-squeeze.vercel.app/",
    github: "https://github.com/alfredulu/pdf-squeeze",
  },
];
