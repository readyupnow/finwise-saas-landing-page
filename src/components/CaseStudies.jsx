export default function CaseStudies() {
  return (
    <section className="bg-slate-900 text-white py-24 text-center">
      <h2 className="text-3xl font-bold">Real Results</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        
        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">+42% Revenue Growth</h3>
          <p className="mt-2 text-gray-300">
            CRM rebuild + automation increased conversions.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">3x Faster Operations</h3>
          <p className="mt-2 text-gray-300">
            Automated workflows saved dozens of hours weekly.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">50+ Integrations</h3>
          <p className="mt-2 text-gray-300">
            Unified CRM, marketing, and analytics.
          </p>
        </div>

      </div>
    </section>
  );
}
