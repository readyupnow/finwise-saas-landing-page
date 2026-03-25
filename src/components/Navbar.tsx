"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold tracking-tighter">
          Ready<span className="text-blue-600">Up</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="#hubs" className="hover:text-blue-600 transition">Hubs</Link>
          <Link href="#why-us" className="hover:text-blue-600 transition">Why Us</Link>
          <Link href="#resources" className="hover:text-blue-600 transition">Resources</Link>
        </div>

        <a href="#contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition">
            Free Consultation
          </button>
        </a>
      </div>
    </nav>
  );
}
