import Navbar from "@/components/Navbar";
import { Check, Award, Zap } from "lucide-react";

export default function ReadyUpSolutions() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-bg text-white pt-32 pb-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full mb-8">
            <Award className="w-5 h-5" /> Official HubSpot Solutions Partner
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            Making HubSpot<br />Work For You
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            Expert implementation, training, automation, and ongoing support.<br />
            We help your team love HubSpot and drive real revenue growth.
          </p>
          <a href="#contact" className="inline-block bg-white text-blue-950 hover:bg-white/90 px-10 py-4 rounded-full text-lg font-semibold">
            Book Free Consultation
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6">Our HubSpot Services</h2>
          <p className="text-center text-xl text-zinc-600 mb-16">We handle the heavy lifting so you can focus on growth</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "HubSpot Implementation", desc: "Custom configuration, data migration, and setup tailored to your business processes." },
              { icon: Zap, title: "Training & Onboarding", desc: "Hands-on training programs so your entire team actually uses HubSpot effectively." },
              { icon: Zap, title: "Ongoing Management & Support", desc: "Monthly optimization, reporting, workflow maintenance, and proactive help." },
              { icon: Zap, title: "Inbound Marketing", desc: "Lead generation, nurturing, content strategy, and full-funnel automation." },
              { icon: Zap, title: "Sales Enablement", desc: "Pipeline management, sequences, forecasting, and sales process optimization." },
              { icon: Zap, title: "Custom Automations & Integrations", desc: "Advanced workflows and connections with your existing tools." },
            ].map((s, i) => (
              <div key={i} className="border border-zinc-200 rounded-3xl p-10 hover:border-blue-600 transition">
                <s.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
                <p className="text-zinc-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HUBS TABLE */}
      <section id="hubs" className="py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">Hubs We Provide Expert Support For</h2>
          <p className="text-center text-xl text-zinc-600 mb-12">Deep expertise across the entire HubSpot ecosystem</p>

          <div className="overflow-x-auto rounded-3xl border">
            <table className="w-full">
              <thead className="bg-zinc-900 text-white">
                <tr>
                  <th className="p-8 text-left font-semibold">Hub</th>
                  <th className="p-8 text-left font-semibold">What We Deliver</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {[
                  ["Marketing Hub", "Campaign automation, lead nurturing, analytics, and revenue attribution"],
                  ["Sales Hub", "Pipeline management, email sequences, deal acceleration, and forecasting"],
                  ["Service Hub", "Customer portals, ticketing, knowledge base, and CS automation"],
                  ["Content Hub", "CMS, personalization, SEO tools, and website management"],
                  ["Operations Hub", "Data sync, custom objects, unified reporting, and workflow automation"],
                  ["Commerce Hub", "Billing, subscriptions, checkout, and CRM-integrated e-commerce"],
                ].map(([hub, desc], i) => (
                  <tr key={i} className="hover:bg-zinc-100">
                    <td className="p-8 font-medium">{hub}</td>
                    <td className="p-8 text-zinc-600">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12">Why Companies Choose ReadyUp Solutions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              "Official HubSpot Solutions Partner with deep platform expertise",
              "Certified professionals on every project",
              "Strong focus on real user adoption and ROI",
              "Ongoing support and optimization so you never feel stuck",
              "Proven track record helping fast-growing companies scale with HubSpot",
              "Transparent pricing and clear deliverables",
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <Check className="w-7 h-7 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "ReadyUp made HubSpot feel easy instead of overwhelming. Their training and support are excellent.", name: "Marketing Director, ScaleVentures" },
              { quote: "Best decision we made this year. Custom automations saved us dozens of hours weekly.", name: "CEO, PeakFlow Solutions" },
              { quote: "Professional, knowledgeable, and truly embedded into our team.", name: "Operations Lead, Nova Logistics" },
            ].map((t, i) => (
              <div key={i} className="bg-zinc-900 p-10 rounded-3xl">
                <p className="text-xl italic">“{t.quote}”</p>
                <p className="mt-8 font-medium text-blue-400">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6">Your Complete HubSpot Resource Hub</h2>
          <p className="text-center text-xl text-zinc-600 mb-16">Weekly tips, videos, templates, and community support</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "New HubSpot Videos & Tutorials Every Week",
              "The ReadyUp HubSpot Show (Podcast)",
              "Free Templates & Resource Library",
              "Active Community Forum",
              "Monthly Newsletter with Tips & Updates",
              "Live Q&A Sessions",
            ].map((item, i) => (
              <div key={i} className="border border-zinc-200 p-8 rounded-3xl hover:border-blue-600 transition">
                <p className="font-semibold text-lg">{item}</p>
                <p className="text-sm text-zinc-500 mt-3">Free for everyone →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Finally Make HubSpot Work?</h2>
          <p className="text-2xl text-zinc-600 mb-12">Book a free 30-minute discovery call. Honest advice, no pressure.</p>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="border border-zinc-300 rounded-2xl px-6 py-4 focus:border-blue-600" />
              <input type="text" placeholder="Last Name" className="border border-zinc-300 rounded-2xl px-6 py-4 focus:border-blue-600" />
            </div>
            <input type="email" placeholder="Work Email" className="w-full border border-zinc-300 rounded-2xl px-6 py-4 focus:border-blue-600" />
            <textarea placeholder="What are your biggest HubSpot challenges right now?" rows={5} className="w-full border border-zinc-300 rounded-3xl px-6 py-4 focus:border-blue-600"></textarea>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-7 rounded-full text-lg font-semibold">
              Schedule My Free Consultation →
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-zinc-950 text-zinc-400 py-12 text-center">
        <p>© 2026 ReadyUp Solutions • HubSpot Solutions Partner</p>
        <p className="mt-2">hello@readyupsolutions.com</p>
      </footer>
    </>
  );
}
