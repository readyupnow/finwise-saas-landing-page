export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl font-extrabold">
            Turn Your CRM Into a Revenue Machine
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            We build CRM, automation, and data systems that increase conversions and scale revenue.
          </p>

          <a href="#contact" className="mt-6 inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
            Book Free Strategy Call
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
          <div className="h-3 bg-white rounded mb-3"></div>
          <div className="h-3 bg-white w-2/3 rounded mb-3"></div>
          <div className="h-24 bg-white/40 rounded"></div>
        </div>

      </div>
    </section>
  );
}
