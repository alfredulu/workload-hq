export type Project = {
  title: string;
  category: string;
  featured: boolean;
  link: string;
  problem: string;
  solution: string;
  result: string;
  desktopImage: string;
  phoneImage: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    title: "Workload Studios Estate",
    category: "Website",
    featured: true,
    link: "https://luxe-estate-two.vercel.app/",
    problem:
      "Client needed a modern platform to showcase luxury property listings and convert high-intent visitors into inquiries.",
    solution:
      "Built a full multi-page site with featured listings, advanced search, inquiry capture, and an admin dashboard for property and team management.",
    result:
      "Improved lead quality and made it faster for the client's team to manage and update their listings.",
    desktopImage: "/images/portfolio-realestate-desktop.jpg",
    phoneImage: "/images/portfolio-realestate-phone.jpg",
    imageAlt:
      "Workload Studios Estate real estate website displaying property listings with search and inquiry features",
  },
  {
    title: "The Nail Tech",
    category: "Website",
    featured: true,
    link: "https://the-nail-tech.vercel.app/",
    problem:
      "Client needed to take bookings without phone calls or back-and-forth messages.",
    solution:
      "Created a clean booking experience with service cards, pricing details, and a direct CTA routing to the booking flow.",
    result:
      "Improved customer engagement and reduced time spent managing bookings manually.",
    desktopImage: "/images/portfolio-salon-desktop.jpg",
    phoneImage: "/images/portfolio-salon-phone.jpg",
    imageAlt:
      "The Nail Tech nail salon appointment booking website with service selection and booking flow",
  },
  {
    title: "Salt Atlas",
    category: "Web App",
    featured: true,
    link: "https://enterprise-admin-ui.vercel.app/",
    problem:
      "Team needed a centralized tool to manage, filter, and explore large data sets without switching between multiple spreadsheets.",
    solution:
      "Built a full-stack web app with searchable tables, category filters, bulk actions, and a clean dashboard layout optimized for daily use.",
    result:
      "Reduced time spent on data management tasks and gave the team a single place to track and act on their data.",
    desktopImage: "/images/portfolio-enterpriseadmin-desktop.jpg",
    phoneImage: "/images/portfolio-enterpriseadmin-phone.jpg",
    imageAlt:
      "Salt Atlas data management web app with searchable tables and dashboard interface",
  },
  {
    title: "Enterprise Admin UI",
    category: "Web App",
    featured: false,
    link: "https://enterprise-admin-ui.vercel.app/",
    problem:
      "Internal teams needed a single place to manage support tickets, users, and system settings with fast filtering, bulk actions, and clear status visibility.",
    solution:
      "Built a responsive admin dashboard with searchable, sortable ticket tables, bulk updates, CSV export, and a persistent sidebar for navigation.",
    result:
      "Streamlined ticket workflows and reduced time spent on repetitive updates by enabling bulk actions and quick filtering.",
    desktopImage: "/images/portfolio-enterpriseadmin-desktop.jpg",
    phoneImage: "/images/portfolio-enterpriseadmin-phone.jpg",
    imageAlt:
      "Enterprise admin UI with ticket management tables, bulk actions, and sidebar navigation",
  },
  {
    title: "Obsidian SaaS Admin",
    category: "Web App",
    featured: false,
    link: "https://workload-saas-admin.vercel.app/",
    problem:
      "Client needed a centralized dashboard to manage operations, track performance, and monitor team activity in a clean, scalable interface.",
    solution:
      "Designed and built a modern SaaS admin dashboard with analytics widgets, task management, user controls, and responsive navigation structured for real-time data integration.",
    result:
      "Delivered a polished, production-ready admin system that streamlines operations and provides a strong foundation for scaling the platform.",
    desktopImage: "/images/portfolio-workloadsaas-desktop.jpg",
    phoneImage: "/images/portfolio-workloadsaas-phone.jpg",
    imageAlt:
      "Obsidian SaaS admin dashboard showing analytics widgets, task management, and responsive navigation",
  },
  {
    title: "LexiFlow AI",
    category: "Web App",
    featured: false,
    link: "https://workload-saas-admin.vercel.app/",
    problem:
      "Product team needed a clean, responsive interface for their AI-powered language processing tool that non-technical users could navigate easily.",
    solution:
      "Built a minimal, fast web app with a focused conversation interface, session management, and a responsive layout that works well on both desktop and mobile.",
    result:
      "Shipped a polished AI interface that matches the product quality and makes it easy for users to get value from the tool quickly.",
    desktopImage: "/images/portfolio-workloadsaas-desktop.jpg",
    phoneImage: "/images/portfolio-workloadsaas-phone.jpg",
    imageAlt:
      "LexiFlow AI web application showing conversation interface and language processing features",
  },
];
