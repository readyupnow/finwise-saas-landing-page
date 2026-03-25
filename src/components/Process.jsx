export default function Process() {
  const steps = [
    {
      title: "Audit & Strategy",
      desc: "We analyze your current systems and identify revenue leaks.",
    },
    {
      title: "Build & Integrate",
      desc: "We implement CRM, automation, and data infrastructure.",
    },
    {
      title: "Optimize & Scale",
      desc: "We continuously improve performance and results.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold">Our Process</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {steps.map((step, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <div className="text-blue-600 font-bold text-xl mb-2">
              0{i + 1}
            </div>
            <h3 className="font-semibold">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
