import Link from "next/link";
import Navbar from "../components/Navbar";

// ─── Data ──────────────────────────────────────────────────────────────────────

const paygoFeatures = [
  "Full trust score (0–5)",
  "Verified identity block (RNA, SIRENE)",
  "Financial health snapshot",
  "Transparency checklist",
  "Regulatory alert check",
  "PDF-ready export",
  "Report valid for 30 days",
  "No account required",
];

const proFeatures = [
  "Everything in Pay-as-you-go",
  "Unlimited reports",
  "Alerts when a monitored association updates",
  "Team access (up to 10 users)",
  "CSV & API export",
  "Compliance audit trail",
  "Priority email support",
  "Dedicated onboarding session",
];

const faqs = [
  {
    q: "What data sources does Gecko use?",
    a: "Gecko pulls exclusively from official French government registries: the RNA (Répertoire National des Associations), the Journal Officiel des Associations (JOAFE), SIRENE via data.gouv.fr, and BODACC for legal notices. Financial data is sourced from filed accounts where publicly available.",
  },
  {
    q: "How often is the data updated?",
    a: "Identity and registry data (RNA, SIRENE) refreshes daily. Financial statements are updated when associations file their annual accounts — typically within 6 months of their fiscal year-end. Pro plan alert notifications are triggered within 24 hours of a registry change.",
  },
  {
    q: "Can I try Gecko before buying?",
    a: "Yes. Your first report is free — no credit card required. Run a full report on any French association and see the trust score, identity verification, and financial snapshot before committing to a plan.",
  },
  {
    q: "What if an association doesn't have public accounts?",
    a: "Gecko flags this in the transparency block. Associations with revenue under €153,000 are not legally required to publish accounts in France. The trust score reflects missing data with a lower transparency sub-score — it is not a penalty for legal non-compliance.",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function Check() {
  return (
    <svg
      className="w-4 h-4 text-gecko shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-gecko font-bold text-lg tracking-tight">Gecko</p>
          <p className="text-xs text-slate-400 mt-0.5">Due diligence for French nonprofits</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
          <Link href="/#features" className="hover:text-slate-900 transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
          <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
          <Link href="/search" className="hover:text-slate-900 transition-colors">Search</Link>
        </div>
        <p className="text-xs text-slate-400">© 2025 Gecko. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col pt-16 bg-offwhite min-h-screen">

        {/* Header */}
        <section className="bg-white border-b border-slate-100 px-6 py-16 text-center">
          <p className="text-xs font-semibold text-gecko uppercase tracking-widest mb-3">Pricing</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Simple, transparent pricing.
          </h1>
          <p className="mt-4 text-slate-500 max-w-md mx-auto text-base leading-relaxed">
            No annual lock-in on the starter plan. No hidden fees. Start with a single report and scale as your mécénat program grows.
          </p>
        </section>

        {/* Plans */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">

            {/* Pay-as-you-go */}
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Pay-as-you-go</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-slate-900 tracking-tight">€9</span>
                <span className="text-slate-400 text-sm ml-1">/ report</span>
              </div>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                Ideal for occasional checks before a one-off donation. No account or subscription required.
              </p>
              <Link
                href="/search"
                className="mt-6 block text-center py-3 px-4 border border-slate-300 text-slate-700 text-sm font-semibold rounded-md hover:bg-slate-50 transition-colors"
              >
                Get a report
              </Link>
              <ul className="mt-8 space-y-3">
                {paygoFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-xl border-2 border-gecko p-8 relative">
              <span className="absolute -top-3.5 left-6 bg-gecko text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                Most popular
              </span>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Pro</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-slate-900 tracking-tight">€299</span>
                <span className="text-slate-400 text-sm ml-1">/ month</span>
              </div>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                For finance and CSR teams managing ongoing mécénat programs across multiple associations.
              </p>
              <Link
                href="/search"
                className="mt-6 block text-center py-3 px-4 bg-gecko text-white text-sm font-semibold rounded-md hover:bg-gecko-dark transition-colors"
              >
                Start free trial
              </Link>
              <ul className="mt-8 space-y-3">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Your first report is always free.{" "}
            <Link href="/search" className="text-gecko font-medium hover:underline">
              Try it now →
            </Link>
          </p>
        </section>

        {/* Comparison callout */}
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">At a glance</p>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { feature: "Reports", paygo: "Per purchase", pro: "Unlimited" },
                { feature: "Trust score", paygo: "Included", pro: "Included" },
                { feature: "PDF export", paygo: "Included", pro: "Included" },
                { feature: "CSV & API export", paygo: "—", pro: "Included" },
                { feature: "Update alerts", paygo: "—", pro: "Included" },
                { feature: "Team access", paygo: "—", pro: "Up to 10 users" },
                { feature: "Audit trail", paygo: "—", pro: "Included" },
                { feature: "Priority support", paygo: "—", pro: "Included" },
              ].map(({ feature, paygo, pro }) => (
                <div key={feature} className="grid grid-cols-3 px-6 py-3 text-sm">
                  <span className="text-slate-600">{feature}</span>
                  <span className={`text-center ${paygo === "—" ? "text-slate-300" : "text-slate-700 font-medium"}`}>
                    {paygo}
                  </span>
                  <span className={`text-center ${pro === "—" ? "text-slate-300" : "text-gecko font-semibold"}`}>
                    {pro}
                  </span>
                </div>
              ))}
              <div className="grid grid-cols-3 px-6 py-3 bg-slate-50 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                <span />
                <span className="text-center">Pay-as-you-go</span>
                <span className="text-center text-gecko">Pro</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white border-t border-slate-100 px-6 py-20">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-gecko uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-12">Common questions</h2>
            <div className="space-y-0">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-t border-slate-100 py-7">
                  <p className="text-sm font-semibold text-slate-900 mb-3">{faq.q}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
              <div className="border-t border-slate-100" />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gecko px-6 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white leading-snug">
              Still unsure? Start with one report, free.
            </h2>
            <p className="mt-3 text-gecko-muted/80 text-sm max-w-sm mx-auto">
              No commitment. See exactly what Gecko surfaces before you decide.
            </p>
            <Link
              href="/search"
              className="mt-6 inline-flex items-center gap-2 bg-white text-gecko font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-gecko-muted transition-colors"
            >
              Get your first free report →
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
