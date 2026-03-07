import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen pt-32 px-6">
      <Navbar />
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12">
          Let's build something great.
        </h1>

        <div className="space-y-8">
          {/* Email */}
          <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm">
            <h3 className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-2">
              Email
            </h3>
            <a
              href="mailto:hello@workloadhq.com"
              className="text-2xl font-bold hover:underline"
            >
              hello@workloadhq.com
            </a>
          </div>

          {/* Instagram */}
          <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm">
            <h3 className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-2">
              Instagram
            </h3>
            <a
              href="https://instagram.com/workload_hq"
              target="_blank"
              className="text-2xl font-bold hover:underline"
            >
              @workload_hq
            </a>
          </div>
        </div>

        <p className="mt-12 text-gray-500 text-sm">
          Usually respond within 24 hours.
        </p>
      </div>
    </main>
  );
}
