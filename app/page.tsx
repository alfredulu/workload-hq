export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
          We build websites <br className="hidden md:block" />
          that drive business.
        </h1>
        <p className="mt-6 text-xl text-gray-500 max-w-lg">
          WorkLoad HQ is a digital agency focused on high-speed, mobile-first
          websites for modern brands.
        </p>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
            About Us
          </h2>
          <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed font-medium">
            We don't just write code; we solve problems. WorkLoad HQ specializes
            in creating digital experiences that turn visitors into loyal
            customers. We focus on clean design, rapid loading speeds, and
            seamless mobile interactions.
          </p>
        </div>
      </section>
    </main>
  );
}
