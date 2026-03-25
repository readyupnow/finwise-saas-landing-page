export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Turn Your CRM Into a Revenue Machine
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            We implement and optimize CRM, automation, and data systems that
            increase conversions, streamline operations, and scale revenue.
          </p>

          {/* TRUST */}
          <div className="flex flex-wrap gap-3 mt-6 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">CRM Experts</span>
            <span className="bg-white/20 px-3 py-1 rounded">Automation Specialists</span>
            <span className="bg-white/20 px-3 py-1 rounded">Data-Driven</span>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#contact"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
            >
              Book Free Strategy Call
            </a>
            <p className="text-sm mt-2 text-blue-200">
              No pressure • 15–30 min • Real insights
            </p>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
          <div className="h-3 bg-white rounded mb-3"></div>
          <div className="h-3 bg-white w-2/3 rounded mb-3"></div>
          <div className="h-3 bg-white rounded mb-6"></div>
          <div className="h-24 bg-white/40 rounded"></div>
        </div>

      </div>
    </section>
  );
}
