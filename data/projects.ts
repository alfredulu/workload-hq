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
    title: "WorkLoad SaaS Admin Dashboard",
    category: "Dashboard / Admin UI",
    featured: true,
    link: "https://workload-saas-admin.vercel.app/",
    problem:
      "The client needed a centralized dashboard to manage operations, track performance, and monitor team activity in a clean, scalable interface.",
    solution:
      "Designed and built a modern SaaS admin dashboard with analytics widgets, task management, user controls, and responsive navigation, structured for real-time data integration and future scalability.",
    result:
      "Delivered a polished, production-ready admin system that streamlines operations, improves visibility across workflows, and provides a strong foundation for scaling the client's platform.",
    desktopImage: "/images/portfolio-workloadsaas-desktop.jpg",
    phoneImage: "/images/portfolio-workloadsaas-phone.jpg",
    imageAlt:
      "WorkLoad SaaS admin dashboard showing analytics widgets, task management, and responsive navigation",
  },
  {
    title: "LuxeEstate Real Estate Website",
    category: "Real Estate & PropTech",
    featured: true,
    link: "https://luxe-estate-two.vercel.app/",
    problem:
      "Client needed a modern platform to showcase luxury listings and convert high-intent visitors into inquiries.",
    solution:
      "Built a full-stack site with featured listings, advanced search, inquiry capture, and an admin dashboard for property and team management.",
    result: "Improved lead quality and streamlined updates for the client's team.",
    desktopImage: "/images/portfolio-realestate-desktop.jpg",
    phoneImage: "/images/portfolio-realestate-phone.jpg",
    imageAlt:
      "LuxeEstate real estate website displaying luxury property listings with search and inquiry features",
  },
  {
    title: "Nailtech Appointment Website",
    category: "Beauty & Wellness",
    featured: true,
    link: "https://the-nail-tech.vercel.app/",
    problem: "Client needed faster booking without phone calls or back-and-forth.",
    solution:
      "Created a simple booking experience with service cards and CTA routing.",
    result: "Improved customer engagement.",
    desktopImage: "/images/portfolio-salon-desktop.jpg",
    phoneImage: "/images/portfolio-salon-phone.jpg",
    imageAlt:
      "Nailtech nail salon appointment booking website with service selection and booking flow",
  },
  {
    title: "Enterprise Admin UI",
    category: "Web App / Admin Dashboard",
    featured: false,
    link: "https://enterprise-admin-ui.vercel.app/",
    problem:
      "Internal teams needed a single place to manage support tickets, users, and system settings efficiently, with fast filtering, bulk actions, and clear status visibility.",
    solution:
      "Built a responsive admin dashboard with searchable, sortable ticket tables, bulk updates, CSV export, and a persistent sidebar for navigation. Added real-time-friendly UI patterns and mobile landscape fixes to keep navigation accessible.",
    result:
      "Streamlined ticket workflows and reduced time spent on repetitive updates by enabling bulk actions and quick filtering, while keeping the interface usable across device sizes.",
    desktopImage: "/images/portfolio-enterpriseadmin-desktop.jpg",
    phoneImage: "/images/portfolio-enterpriseadmin-phone.jpg",
    imageAlt:
      "Enterprise admin UI with ticket management tables, bulk actions, and sidebar navigation",
  },
];
