import Link from "next/link";
import Navbar from "../components/Navbar";

// ─── Data ──────────────────────────────────────────────────────────────────────

const criteria = [
  {
    number: "01",
    name: "Verified identity",
    weight: "25%",
    description:
      "We cross-check the RNA number, SIREN, and SIRENE registry to confirm the association is legally registered and currently active. An association that is dissolved, inactive, or whose identity cannot be reconciled across government registries receives a low score on this criterion.",
    checks: [
      "RNA registration (Répertoire National des Associations)",
      "SIREN active status in SIRENE",
      "Cross-match between RNA and SIREN records",
      "JOAFE initial publication confirmed",
    ],
  },
  {
    number: "02",
    name: "Financial health",
    weight: "30%",
    description:
      "We analyze the association's filed accounts — revenue stability, operating surplus or deficit, reserve levels, and the ratio of public subsidies to private donations. Accounts filed late or not at all reduce this sub-score independently of financial performance.",
    checks: [
      "Revenue trend over 3 consecutive years",
      "Operating surplus / deficit ratio",
      "Reserves adequate for ≥ 3 months of expenses",
      "Public subsidies as % of total revenue",
      "Timeliness of account filing (< 6 months post fiscal year-end)",
    ],
  },
  {
    number: "03",
    name: "Governance & transparency",
    weight: "25%",
    description:
      "We assess whether the association is transparent about its leadership, publishes annual reports, has independent auditors, and holds recognized quality labels. Public utility recognition (reconnue d'utilité publique) is the strongest positive signal in this criterion.",
    checks: [
      "Public utility recognition (Decree from the Council of State)",
      "Don en Confiance or equivalent quality label",
      "Independent statutory auditor appointed",
      "Annual report publicly available",
      "Governance charter documented and up to date",
    ],
  },
  {
    number: "04",
    name: "Mission alignment",
    weight: "20%",
    description:
      "We compare the association's declared purpose in the JOAFE against its actual activity codes (NAF/APE) and expense breakdown. Significant divergence between stated mission and observed activity — or activity codes inconsistent with charitable purpose — is flagged.",
    checks: [
      "JOAFE declared object vs NAF/APE activity code",
      "Expense breakdown consistent with declared mission",
      "Geographic scope consistent with registered operations",
    ],
  },
];

const sources = [
  {
    name: "RNA",
    full: "Répertoire National des Associations",
    description:
      "The authoritative registry of all French associations, maintained by the Ministry of the Interior. Covers over 1.5 million active and historical records.",
  },
  {
    name: "JOAFE",
    full: "Journal Officiel des Associations",
    description:
      "Official gazette recording association creation, dissolution, and statutory modifications since 1901. The reference for declared objects and legal events.",
  },
  {
    name: "SIRENE",
    full: "Système d'Identification du Répertoire des Entreprises",
    description:
      "National business and entity registry managed by INSEE. Covers all legal entities in France, including associations that are employers or receive public funds.",
  },
  {
    name: "BODACC",
    full: "Bulletin Officiel des Annonces Civiles et Commerciales",
    description:
      "Official civil and commercial announcements, including legal proceedings, insolvency notices, and other events relevant to registered entities.",
  },
  {
    name: "data.gouv.fr",
    full: "French Open Data Platform",
    description:
      "Open government data portal. Source for filed accounts, subsidy data (Aide-Publique), and activity statistics published by the Ministère de l'Intérieur.",
  },
  {
    name: "Press monitoring",
    full: "Media & Regulatory Sources",
    description:
      "Structured monitoring of Tracfin public alerts, published administrative sanctions, and major press coverage relevant to association governance.",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

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

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col pt-16 bg-offwhite min-h-screen">

        {/* Section 1 — Who we are */}
        <section className="bg-white border-b border-slate-100 px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-gecko uppercase tracking-widest mb-4">
              About Gecko
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl">
              Charitable giving deserves the same rigor as any business decision.
            </h1>
            <div className="mt-8 space-y-5 text-base text-slate-600 leading-relaxed max-w-2xl">
              <p>
                Gecko was built by a team of finance professionals and software engineers who saw the same problem repeated across companies of every size: when it comes to corporate donations, due diligence is manual, slow, and almost never happens.
              </p>
              <p>
                French law requires companies benefiting from mécénat tax reductions to perform basic verification on recipient organizations. In practice, most rely on a handshake and a printed receipt. One administrative problem — a dissolved association, a filing gap, a governance issue — can invalidate the tax treatment entirely and expose the donor to requalification risk.
              </p>
              <p>
                We built Gecko to close that gap. One search, one report, one clear trust score — sourced entirely from official government registries. No phone calls. No spreadsheets. No guesswork.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Methodology */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold text-gecko uppercase tracking-widest mb-4">
              Methodology
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug max-w-xl">
              How the trust score is calculated.
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl leading-relaxed">
              The Gecko score is a weighted composite of four criteria, each sourced exclusively from official government data. Scores run from 0 to 5. A score of 4.0 or above indicates a well-documented, active, financially stable association.
            </p>

            <div className="mt-12 space-y-0 divide-y divide-slate-100">
              {criteria.map((c) => (
                <div key={c.number} className="py-10 grid grid-cols-1 sm:grid-cols-[3rem_1fr] gap-x-6 gap-y-4">
                  <p className="text-4xl font-bold text-slate-200 leading-none select-none pt-1">
                    {c.number}
                  </p>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-base font-semibold text-slate-900">{c.name}</h3>
                      <span className="text-xs font-semibold bg-gecko-muted text-gecko px-2.5 py-0.5 rounded-full">
                        {c.weight} of score
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{c.description}</p>
                    <ul className="space-y-2">
                      {c.checks.map((check) => (
                        <li key={check} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <svg
                            className="w-3.5 h-3.5 text-gecko shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {check}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 p-5 bg-white border border-slate-200 rounded-lg">
              <p className="text-sm text-slate-500 leading-relaxed">
                <span className="font-semibold text-slate-900">Score interpretation — </span>
                <span className="text-emerald-700 font-medium">4.0–5.0:</span> Low risk &nbsp;·&nbsp;
                <span className="text-amber-700 font-medium">3.0–3.9:</span> Moderate risk, review recommended &nbsp;·&nbsp;
                <span className="text-red-700 font-medium">Below 3.0:</span> High risk, proceed with caution
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — Data sources */}
        <section className="bg-white border-t border-slate-100 px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold text-gecko uppercase tracking-widest mb-4">
              Data sources
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug max-w-xl">
              100% official government data.
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl leading-relaxed">
              Gecko does not rely on third-party data brokers or scraped web content. Every data point in a Gecko report is sourced directly from a French government registry or official publication.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sources.map((s) => (
                <div key={s.name} className="p-5 border border-slate-200 rounded-lg bg-offwhite">
                  <p className="text-sm font-bold text-slate-900">{s.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.full}</p>
                  <p className="mt-3 text-xs text-slate-500 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="px-6 py-20 border-t border-slate-100">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl font-bold text-slate-900">Questions or partnership inquiries?</h2>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
              We're a small team. We read and respond to every message.
            </p>
            <a
              href="mailto:hello@gecko.fr"
              className="mt-6 inline-flex items-center gap-2 bg-gecko text-white font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-gecko-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@gecko.fr
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
