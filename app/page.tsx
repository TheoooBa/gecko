import Link from "next/link";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 4
      ? "text-emerald-700 bg-emerald-50 border-emerald-200"
      : score >= 3
      ? "text-amber-700 bg-amber-50 border-amber-200"
      : "text-red-700 bg-red-50 border-red-200";
  const dot =
    score >= 4 ? "bg-emerald-500" : score >= 3 ? "bg-amber-500" : "bg-red-500";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-semibold ${color}`}
    >
      <span className={`w-2 h-2 rounded-full ${dot}`} />
      {score.toFixed(1)} / 5
    </span>
  );
}

function ScoreBar({ label, value, max = 5 }: { label: string; value: number; max?: number }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-slate-500">{label}</span>
        <span className="text-xs font-semibold text-slate-700">{value}/{max}</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gecko rounded-full"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function MockReportCard() {
  return (
    <div className="relative w-full max-w-2xl mx-auto mt-12 bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden text-left">
      <div className="px-6 pt-5 pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">
            Sample report · May 2025
          </p>
          <h3 className="text-base font-semibold text-slate-900">
            Les Restos du Cœur
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            SIREN 381 173 386 · Recognized d'utilité publique · Paris, France
          </p>
        </div>
        <ScoreBadge score={4.2} />
      </div>

      <div className="px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-5 border-b border-slate-100">
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wide">Revenue</p>
          <p className="text-lg font-bold text-slate-900 mt-0.5">€173.4M</p>
          <p className="text-xs text-slate-500">+4.2% YoY</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wide">Transparency</p>
          <p className="text-lg font-bold text-slate-900 mt-0.5">High</p>
          <p className="text-xs text-slate-500">Filed on time</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wide">Alerts</p>
          <p className="text-lg font-bold text-gecko mt-0.5">None</p>
          <p className="text-xs text-slate-500">No flags</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wide">Identity</p>
          <p className="text-lg font-bold text-slate-900 mt-0.5">Verified</p>
          <p className="text-xs text-slate-500">RNA + Infogreffe</p>
        </div>
      </div>

      <div className="px-6 py-5 space-y-3">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
          Score breakdown
        </p>
        <ScoreBar label="Financial health" value={4.3} />
        <ScoreBar label="Governance & transparency" value={4.5} />
        <ScoreBar label="Regulatory compliance" value={4.0} />
        <ScoreBar label="Mission alignment" value={4.1} />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 pb-5 flex justify-center">
        <Link
          href="/rapport?q=Les+Restos+du+Coeur"
          className="inline-flex items-center gap-1.5 text-sm text-gecko font-semibold hover:underline"
        >
          See full report
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

const stats = [
  {
    value: "€7.5B",
    label: "Corporate giving in France per year",
    sub: "Admical, 2023",
  },
  {
    value: "1 in 3",
    label: "Associations with incomplete or outdated public accounts",
    sub: "RNA / JOAFE analysis",
  },
  {
    value: "3–5 days",
    label: "Average time spent on manual due diligence",
    sub: "Survey of 180 finance teams",
  },
];

const steps = [
  {
    number: "01",
    title: "Search",
    description:
      "Enter any association name, SIREN, or RNA number. Gecko covers all 1.5M registered French associations.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "Our engine cross-references RNA, Infogreffe, JOAFE, and BODACC data to build a complete compliance profile.",
  },
  {
    number: "03",
    title: "Decide",
    description:
      "Receive a 0–5 trust score with annotated financials. Export a PDF-ready report for your compliance file.",
  },
];

const freePlanFeatures = [
  "Full trust score",
  "PDF export",
  "Valid 30 days",
  "No subscription",
];

const proPlanFeatures = [
  "Unlimited reports",
  "Team access (up to 10)",
  "CSV + API export",
  "Compliance audit trail",
  "Priority support",
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-gecko shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col pt-16">
        {/* Hero */}
        <section className="bg-offwhite px-6 pt-20 pb-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gecko-muted border border-gecko/20 text-gecko text-xs font-semibold mb-6 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-gecko" />
            Due diligence for French nonprofits
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight max-w-2xl">
            Verify any French association
            <br />
            before you give.
          </h1>
          <p className="mt-5 text-lg text-slate-500 max-w-xl leading-relaxed">
            Gecko pulls from official registries to give you a clear trust
            score, financial snapshot, and compliance summary — in seconds.
          </p>
          <div className="mt-8 w-full max-w-xl">
            <SearchBar />
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Try:{" "}
            <Link href="/rapport?q=Les+Restos+du+Coeur" className="text-gecko hover:underline">
              Les Restos du Cœur
            </Link>
            {", "}
            <Link href="/rapport?q=M%C3%A9decins+Sans+Fronti%C3%A8res" className="text-gecko hover:underline">
              Médecins Sans Frontières
            </Link>
            {", "}
            <Link href="/rapport?q=Fondation+de+France" className="text-gecko hover:underline">
              Fondation de France
            </Link>
          </p>
          <MockReportCard />
        </section>

        {/* Problem / Stats */}
        <section
          className="bg-white px-6 py-20 border-t border-slate-100"
          id="features"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-gecko uppercase tracking-widest mb-3">
              The problem
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 max-w-xl leading-snug">
              Most companies donate blind.
            </h2>
            <p className="mt-3 text-slate-500 max-w-lg text-base leading-relaxed">
              Regulatory obligations around mécénat are tightening. Yet
              verifying an association still means spreadsheets, PDF archives,
              and phone calls to accountants.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
              {stats.map((s) => (
                <div key={s.value} className="border-t-2 border-gecko pt-5">
                  <p className="text-3xl font-bold text-slate-900">{s.value}</p>
                  <p className="mt-2 text-sm text-slate-700 font-medium leading-snug">
                    {s.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-offwhite px-6 py-20 border-t border-slate-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-gecko uppercase tracking-widest mb-3">
              How it works
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 max-w-lg leading-snug">
              A due diligence report in three steps.
            </h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
              {steps.map((step) => (
                <div key={step.number}>
                  <p className="text-5xl font-bold text-slate-200 leading-none select-none">
                    {step.number}
                  </p>
                  <p className="mt-3 text-base font-semibold text-slate-900">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partial report preview */}
        <section className="bg-white px-6 py-20 border-t border-slate-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-gecko uppercase tracking-widest mb-3">
              What you get
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 max-w-lg leading-snug">
              A report built for compliance, not charity.
            </h2>
            <p className="mt-3 text-slate-500 max-w-lg text-base leading-relaxed">
              Each report covers identity verification, financial health,
              governance transparency, and regulatory alerts — with annotated
              sources for every data point.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                {
                  icon: "🪪",
                  title: "Verified identity",
                  desc: "Cross-check RNA, SIREN, and legal status. Confirm the association is active and duly registered.",
                },
                {
                  icon: "📊",
                  title: "Financial health",
                  desc: "Revenue, expenses, and balance sheet trends over 3 years. Sourced from official filed accounts.",
                },
                {
                  icon: "🔍",
                  title: "Transparency score",
                  desc: "Did they file on time? Are accounts audited? Is governance documented publicly?",
                },
                {
                  icon: "⚠️",
                  title: "Regulatory alerts",
                  desc: "Tracfin, BODACC, and administrative sanctions. If there's a flag, you'll see it.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-lg border border-slate-100 bg-slate-50"
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/rapport?q=Les+Restos+du+Coeur"
              className="mt-8 inline-flex items-center gap-1.5 text-sm text-gecko font-semibold hover:underline"
            >
              View sample report — Les Restos du Cœur →
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Pricing */}
        <section
          className="bg-offwhite px-6 py-20 border-t border-slate-100"
          id="pricing"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold text-gecko uppercase tracking-widest mb-3">
              Pricing
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 max-w-lg leading-snug">
              Simple, transparent pricing.
            </h2>
            <p className="mt-3 text-slate-500 text-base">
              No hidden fees. No annual lock-in on the starter plan.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              <div className="border border-slate-200 rounded-xl p-6 bg-white">
                <p className="text-sm font-medium text-slate-500">
                  Pay-per-report
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">€9</span>
                  <span className="text-slate-400 text-sm">/ report</span>
                </div>
                <p className="mt-3 text-sm text-slate-500">
                  Occasional verification before a one-off donation.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {freePlanFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/rapport"
                  className="mt-6 block text-center py-2.5 px-4 border border-slate-300 text-slate-700 text-sm font-medium rounded-md hover:bg-slate-50 transition-colors"
                >
                  Buy a report
                </Link>
              </div>

              <div className="border-2 border-gecko rounded-xl p-6 bg-white relative">
                <span className="absolute -top-3 left-5 bg-gecko text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  Most popular
                </span>
                <p className="text-sm font-medium text-slate-500">Pro</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">€299</span>
                  <span className="text-slate-400 text-sm">/ month</span>
                </div>
                <p className="mt-3 text-sm text-slate-500">
                  Finance and CSR teams running ongoing mécénat programs.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {proPlanFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/rapport"
                  className="mt-6 block text-center py-2.5 px-4 bg-gecko text-white text-sm font-medium rounded-md hover:bg-gecko-dark transition-colors"
                >
                  Start free trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gecko px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
              Your first report, free.
            </h2>
            <p className="mt-4 text-gecko-muted text-lg max-w-md mx-auto opacity-90">
              No credit card required. Verify one association today and see
              what Gecko surfaces.
            </p>
            <Link
              href="/rapport"
              className="mt-8 inline-flex items-center gap-2 bg-white text-gecko font-semibold text-sm px-6 py-3 rounded-md hover:bg-gecko-muted transition-colors"
            >
              Get started — it's free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-100 px-6 py-10">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-gecko font-bold text-lg tracking-tight">Gecko</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Due diligence for French nonprofits
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <Link href="/#features" className="hover:text-slate-900 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="hover:text-slate-900 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="hover:text-slate-900 transition-colors">
                About
              </Link>
              <Link href="/rapport?q=Les+Restos+du+Coeur" className="hover:text-slate-900 transition-colors">
                Sample report
              </Link>
              <a href="#" className="hover:text-slate-900 transition-colors">
                Legal
              </a>
            </div>
            <p className="text-xs text-slate-400">© 2025 Gecko. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
