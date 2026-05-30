"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-gecko font-bold text-xl tracking-tight">
          Gecko
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/rapport" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Sign in
          </Link>
          <Link
            href="/rapport"
            className="text-sm bg-gecko text-white px-4 py-2 rounded-md hover:bg-gecko-dark transition-colors font-medium"
          >
            Try for free
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-slate-600 flex flex-col justify-center gap-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-4">
          <Link href="/#features" className="text-sm text-slate-600" onClick={() => setOpen(false)}>
            Features
          </Link>
          <Link href="/pricing" className="text-sm text-slate-600" onClick={() => setOpen(false)}>
            Pricing
          </Link>
          <Link href="/about" className="text-sm text-slate-600" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link
            href="/rapport"
            className="text-sm bg-gecko text-white px-4 py-2 rounded-md text-center font-medium"
            onClick={() => setOpen(false)}
          >
            Try for free
          </Link>
        </div>
      )}
    </nav>
  );
}
