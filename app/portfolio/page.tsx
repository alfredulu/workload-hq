import Icon from "@/components/Icons";

export default function Portfolio() {
  const projects = [
    {
      title: "SME Booking Dashboard",
      problem:
        "Client needed a way to showcase services without manual DMs.",
      solution:
        "Built a mobile-first, high-speed landing page with a direct WhatsApp bridge for instant conversion.",
      result: "Improved customer engagement.",
      desktopImage: "/images/portfolio-booking-desktop.jpg",
      phoneImage: "/images/portfolio-booking-phone.jpg",
      imageAlt: "SME booking dashboard preview",
    },
    {
      title: "Retail Landing Page Solution",
      problem:
        "Client had social-only traffic and no central place to convert visitors.",
      solution:
        "Designed a clean, trust-focused site with clear offers and fast inquiry flow.",
      result: "Improved customer engagement.",
      desktopImage: "/images/portfolio-retail-desktop.jpg",
      phoneImage: "/images/portfolio-retail-phone.jpg",
      imageAlt: "Retail landing page preview",
    },
    {
      title: "Salon Appointment Flow",
      problem:
        "Client needed faster booking without phone calls or back-and-forth.",
      solution:
        "Created a simple booking experience with service cards and CTA routing.",
      result: "Improved customer engagement.",
      desktopImage: "/images/portfolio-salon-desktop.jpg",
      phoneImage: "/images/portfolio-salon-phone.jpg",
      imageAlt: "Salon appointment site preview",
    },
    {
      title: "Logistics Service Hub",
      problem:
        "Client needed credibility and a clear service breakdown for new leads.",
      solution:
        "Built a lightweight site with pricing clarity and direct contact actions.",
      result: "Improved customer engagement.",
      desktopImage: "/images/portfolio-logistics-desktop.jpg",
      phoneImage: "/images/portfolio-logistics-phone.jpg",
      imageAlt: "Logistics service site preview",
    },
  ];

  return (
    <main className="min-h-screen pb-24 pt-28">
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
          Portfolio
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-gray-900 md:text-6xl">
          Selected work that feels
          <span className="block text-gray-500">quietly luxurious.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
          We partner with ambitious teams to craft digital experiences that are
          restrained, modern, and built for conversion.
        </p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-3xl border border-white/40 bg-white/70 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-white/70">
              <img
                src={project.desktopImage}
                alt={project.imageAlt}
                className="h-full w-full object-cover"
              />
              <img
                src={project.phoneImage}
                alt=""
                className="absolute bottom-4 right-4 h-28 w-14 rounded-xl object-cover shadow-lg"
              />
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">
              {project.title}
            </h2>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <p>
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  <Icon name="alert" className="h-4 w-4" />
                  Problem
                </span>
                <span className="mt-2 block">{project.problem}</span>
              </p>
              <p>
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  <Icon name="wand" className="h-4 w-4" />
                  Solution
                </span>
                <span className="mt-2 block">{project.solution}</span>
              </p>
              <p>
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  <Icon name="check" className="h-4 w-4" />
                  Result
                </span>
                <span className="mt-2 block">{project.result}</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
