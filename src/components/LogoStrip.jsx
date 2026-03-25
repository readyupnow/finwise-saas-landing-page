export default function LogoStrip() {
  return (
    <section className="py-10 bg-white text-center">
      <p className="text-gray-500 text-sm mb-6">
        Trusted platforms we work with
      </p>

      <div className="flex justify-center flex-wrap gap-10 opacity-70">
        <img src="https://cdn.worldvectorlogo.com/logos/hubspot.svg" className="h-8 grayscale hover:grayscale-0 transition"/>
        <img src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" className="h-8 grayscale hover:grayscale-0 transition"/>
        <img src="https://cdn.worldvectorlogo.com/logos/zoho.svg" className="h-8 grayscale hover:grayscale-0 transition"/>
        <img src="https://cdn.worldvectorlogo.com/logos/power-bi.svg" className="h-8 grayscale hover:grayscale-0 transition"/>
      </div>
    </section>
  );
}
