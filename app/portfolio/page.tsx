import Navbar from "@/components/Navbar";

export default function Portfolio() {
  const projects = [
    {
      title: "SaaS Dashboard",
      tech: "Next.js + Tailwind",
      color: "bg-blue-50",
    },
    {
      title: "Booking Platform",
      tech: "React + Firebase",
      color: "bg-emerald-50",
    },
  ];

  return (
    <main className="pt-32 px-10 min-h-screen">
      <h1 className="text-6xl font-bold mb-16">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-2 duration-300"
          >
            <div
              className={`h-64 ${p.color} transition-transform duration-500 group-hover:scale-105`}
            ></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold">{p.title}</h2>
              <p className="text-gray-500 mt-2">{p.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
