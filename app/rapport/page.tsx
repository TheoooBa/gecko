import Link from "next/link";
import Navbar from "../components/Navbar";
import PrintButton from "./PrintButton";

const report = {
  name: "Les Restos du Cœur",
  siren: "381 173 386",
  rna: "W751091921",
  status: "Recognized d'utilité publique",
  location: "Paris 13e, France",
  category: "Social action / food aid",
  score: 4.2,
  date: "May 30, 2025",

  identity: {
    legalForm: "Association loi 1901",
    founded: "1985",
    president: "Patrice Douret",
    workforce: "7,200 volunteers · 850 permanent staff",
    sirenActive: true,
    rnaMatch: true,
    infogreffMatch: true,
    joafePublication: "January 18, 1986",
    lastModification: "March 2024",
  },

  financial: {
    revenue: [
      { year: 2021, amount: 156.2 },
      { year: 2022, amount: 166.4 },
      { year: 2023, amount: 173.4 },
    ],
    expenses: 168.7,
    surplus: 4.7,
    reserves: 42.0,
    publicSubsidies: 28.1,
    subsidiesRatio: 16.2,
    lastFiled: "October 2024",
    auditor: "KPMG France",
    expenseBreakdown: [
      { label: "Food programs", amount: 108.2, pct: 64 },
      { label: "Housing support", amount: 28.4, pct: 17 },
      { label: "Administrative", amount: 17.8, pct: 11 },
      { label: "Other programs", amount: 14.3, pct: 8 },
    ],
  },

  transparency: [
    { label: "Accounts filed on time", ok: true, note: "< 6 months after fiscal year" },
    { label: "Independent auditor", ok: true, note: "KPMG France — since 2011" },
    { label: "Annual report published", ok: true, note: "Available on restosducoeur.org" },
    { label: "Governance charter", ok: true, note: "Updated March 2024" },
    { label: "Don en Confiance label", ok: true, note: "Holder since 1994" },
    { label: "France Don Public recognition", ok: true, note: "Decree of July 2, 1992" },
  ],

  alerts: [
    { source: "BODACC", label: "Adverse entries", flagged: false, note: "No entries in last 5 years" },
    { source: "Tracfin", label: "Financial intelligence flag", flagged: false, note: "No flag on record" },
    { source: "Administrative", label: "Regulatory sanctions", flagged: false, note: "None recorded" },
    { source: "Legal", label: "Active legal proceedings", flagged: false, note: "None active" },
    { source: "Press", label: "Negative media coverage", flagged: false, note: "No significant adverse coverage" },
  ],

  scoreBreakdown: [
    { label: "Financial health", value: 4.3, max: 5 },
    { label: "Governance & transparency", value: 4.5, max: 5 },
    { label: "Regulatory compliance", value: 4.0, max: 5 },
    { label: "Mission alignment", value: 4.1, max: 5 },
  ],
};

function ScoreCircle({ score }: { score: number }) {
  const color =
    score >= 4
      ? "border-emerald-500 text-emerald-700"
      : score >= 3
      ? "border-amber-500 text-amber-700"
      : "border-red-500 text-red-700";
  return (
    <div className={`w-20 h-20 rounded-full border-4 ${color} flex flex-col items-center justify-center shrink-0`}>
      <span className="text-2xl font-bold leading-none">{score.toFixed(1)}</span>
      <span className="text-xs font-medium opacity-70 mt-0.5">/ 5</span>
    </div>
  );
}

function ScoreBar({ label, value, max }: { label: string; value: number; max: number }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-600">{label}</span>
        <span className="text-sm font-semibold text-slate-900">{value.toFixed(1)}</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-gecko rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function SectionHeader({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-slate-100">
      <div className="w-8 h-8 rounded-md bg-gecko-muted flex items-center justify-center text-gecko shrink-0">
        {icon}
      </div>
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2.5 border-b border-slate-50 last:border-0">
      <span className="text-sm text-slate-500 shrink-0">{label}</span>
      <span className="text-sm text-slate-900 font-medium text-right">{value}</span>
    </div>
  );
}

function StatusPill({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      Verified
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
      Issue
    </span>
  );
}

export default function RapportPage() {
  const maxRevenue = Math.max(...report.financial.revenue.map((r) => r.amount));

  return (
    <>
      <Navbar />
      <main className="flex flex-col pt-16 bg-offwhite min-h-screen">
        <div className="max-w-5xl mx-auto w-full px-6 py-10">

          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to search
          </Link>

          {/* Report header */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex items-start gap-5">
                <ScoreCircle score={report.score} />
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">
                    Due diligence report · {report.date}
                  </p>
                  <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {report.name}
                  </h1>
                  <p className="text-sm text-slate-500 mt-1">
                    SIREN {report.siren} · RNA {report.rna}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs bg-gecko-muted text-gecko font-medium px-2.5 py-0.5 rounded-full">
                      {report.status}
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-600 font-medium px-2.5 py-0.5 rounded-full">
                      {report.location}
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-600 font-medium px-2.5 py-0.5 rounded-full">
                      {report.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <PrintButton />
              </div>
            </div>

            {/* Score breakdown */}
            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {report.scoreBreakdown.map((s) => (
                <ScoreBar key={s.label} label={s.label} value={s.value} max={s.max} />
              ))}
            </div>
          </div>

          {/* 4 blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Block 1: Verified identity */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <SectionHeader
                title="Verified identity"
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                }
              />
              <div className="divide-y divide-slate-50">
                <Row label="Legal form" value={report.identity.legalForm} />
                <Row label="Founded" value={report.identity.founded} />
                <Row label="President" value={report.identity.president} />
                <Row label="Workforce" value={report.identity.workforce} />
                <Row label="JOAFE publication" value={report.identity.joafePublication} />
                <Row label="Last modification" value={report.identity.lastModification} />
                <Row
                  label="SIREN status"
                  value={<StatusPill ok={report.identity.sirenActive} />}
                />
                <Row
                  label="RNA cross-check"
                  value={<StatusPill ok={report.identity.rnaMatch} />}
                />
                <Row
                  label="Infogreffe match"
                  value={<StatusPill ok={report.identity.infogreffMatch} />}
                />
              </div>
            </div>

            {/* Block 2: Financial health */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <SectionHeader
                title="Financial health"
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
              />

              {/* Revenue bars */}
              <div className="mb-5 space-y-2.5">
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-3">
                  Annual revenue (€M)
                </p>
                {report.financial.revenue.map((r) => {
                  const pct = Math.round((r.amount / maxRevenue) * 100);
                  return (
                    <div key={r.year} className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 w-8 shrink-0">{r.year}</span>
                      <div className="flex-1 h-5 bg-slate-100 rounded-sm overflow-hidden">
                        <div
                          className="h-full bg-gecko/80 rounded-sm flex items-center px-2 transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 w-14 text-right shrink-0">
                        €{r.amount}M
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Key metrics */}
              <div className="divide-y divide-slate-50">
                <Row label="2023 revenue" value="€173.4M (+4.2% YoY)" />
                <Row label="Operating expenses" value="€168.7M" />
                <Row label="Operating surplus" value="€4.7M" />
                <Row label="Reserves" value="€42.0M" />
                <Row
                  label="Public subsidies"
                  value={`€${report.financial.publicSubsidies}M (${report.financial.subsidiesRatio}%)`}
                />
                <Row label="Accounts last filed" value={report.financial.lastFiled} />
                <Row label="Statutory auditor" value={report.financial.auditor} />
              </div>

              {/* Expense breakdown */}
              <div className="mt-5 pt-5 border-t border-slate-100">
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-3">
                  Expense breakdown
                </p>
                <div className="space-y-2">
                  {report.financial.expenseBreakdown.map((e) => (
                    <div key={e.label} className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-28 shrink-0">{e.label}</span>
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gecko rounded-full"
                          style={{ width: `${e.pct}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-500 w-8 text-right shrink-0">{e.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Block 3: Transparency */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <SectionHeader
                title="Transparency"
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                }
              />
              <ul className="space-y-3">
                {report.transparency.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      {item.ok ? (
                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{item.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Block 4: Regulatory alerts */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <SectionHeader
                title="Regulatory alerts"
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                }
              />

              <div className="mb-5 flex items-center gap-3 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-emerald-800">No alerts detected</p>
                  <p className="text-xs text-emerald-600 mt-0.5">All sources checked · {report.date}</p>
                </div>
              </div>

              <div className="space-y-3">
                {report.alerts.map((alert) => (
                  <div key={alert.source} className="flex items-start justify-between gap-4 py-2.5 border-b border-slate-50 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{alert.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        <span className="font-medium">{alert.source}</span> · {alert.note}
                      </p>
                    </div>
                    {alert.flagged ? (
                      <span className="text-xs font-semibold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                        Flagged
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                        Clear
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subscription CTA */}
          <div className="mt-8 bg-gecko rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold text-gecko-muted/70 uppercase tracking-widest mb-2">
                This is a sample report
              </p>
              <h3 className="text-xl font-bold text-white leading-snug">
                Run reports on any of France's 1.5M associations.
              </h3>
              <p className="mt-2 text-gecko-muted/80 text-sm max-w-md">
                Subscribe to Gecko Pro for unlimited reports, team access, CSV export,
                and a full compliance audit trail.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/pricing"
                className="px-5 py-2.5 bg-white text-gecko text-sm font-semibold rounded-md hover:bg-gecko-muted transition-colors whitespace-nowrap text-center"
              >
                See plans
              </Link>
              <Link
                href="/pricing"
                className="px-5 py-2.5 border border-white/30 text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors whitespace-nowrap text-center"
              >
                €9 — Buy this report
              </Link>
            </div>
          </div>

          {/* Data sources footer */}
          <p className="mt-6 text-xs text-slate-400 text-center">
            Data sourced from RNA (Répertoire National des Associations), Infogreffe, JOAFE, BODACC, and Tracfin public databases.
            Last updated {report.date}.
          </p>
        </div>
      </main>
    </>
  );
}
