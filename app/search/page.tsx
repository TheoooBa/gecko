import Link from "next/link";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { searchAssociations, NATURE_JURIDIQUE, type AssociationResult } from "../lib/rna";

// ─── Helpers ───────────────────────────────────────────────────────────────────

const PUBLIC_UTILITY_CODES = new Set(["9230", "9231"]);

function isPublicUtility(a: AssociationResult) {
  return PUBLIC_UTILITY_CODES.has(a.nature_juridique);
}

function sortResults(results: AssociationResult[]): AssociationResult[] {
  return [...results].sort((a, b) => {
    // 1. Public utility associations first
    const aTop = isPublicUtility(a);
    const bTop = isPublicUtility(b);
    if (aTop !== bTop) return aTop ? -1 : 1;

    // 2. Tiebreaker: oldest founding date first (null dates last)
    const aMs = a.siege.date_creation ? Date.parse(a.siege.date_creation) : Infinity;
    const bMs = b.siege.date_creation ? Date.parse(b.siege.date_creation) : Infinity;
    return aMs - bMs;
  });
}

// libelle_commune comes in uppercase ("PARIS 13EME ARRONDISSEMENT")
// Convert to title case for display, fall back to postal code
function formatCity(a: AssociationResult): string | null {
  const name = a.siege.libelle_commune;
  if (name) {
    return name
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");
  }
  return a.siege.code_postal ?? null;
}

// ─── Result card ───────────────────────────────────────────────────────────────

function ResultCard({ a }: { a: AssociationResult }) {
  const isActive = a.etat_administratif === "A";
  const legalForm = NATURE_JURIDIQUE[a.nature_juridique] ?? "Association";
  const city = formatCity(a);
  const founded = a.siege.date_creation
    ? new Date(a.siege.date_creation).getFullYear()
    : null;

  return (
    <Link
      href={`/rapport?siren=${a.siren}`}
      className="group flex items-start justify-between gap-4 bg-white border border-slate-200 rounded-lg px-5 py-4 hover:border-gecko/50 hover:shadow-sm transition-all"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-slate-900 group-hover:text-gecko transition-colors">
            {a.nom_complet}
          </span>
          <span
            className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${
              isActive ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"
            }`}
          >
            {isActive ? "Active" : "Inactive"}
          </span>
          {isPublicUtility(a) && (
            <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-gecko-muted text-gecko">
              Utilité publique
            </span>
          )}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5">
          {city && <span className="text-xs text-slate-500">{city}</span>}
          <span className="text-xs text-slate-400">{legalForm}</span>
          {founded && <span className="text-xs text-slate-400">Est. {founded}</span>}
          <span className="text-xs text-slate-300 font-mono">SIREN {a.siren}</span>
        </div>
      </div>
      <svg
        className="w-4 h-4 text-slate-300 group-hover:text-gecko transition-colors shrink-0 mt-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

// ─── Empty state ───────────────────────────────────────────────────────────────

function EmptyState({ query }: { query: string }) {
  return (
    <div className="text-center py-16">
      <p className="text-3xl font-bold text-slate-200 mb-3">0</p>
      <p className="text-sm font-semibold text-slate-900">No associations found</p>
      <p className="mt-1 text-sm text-slate-500 max-w-xs mx-auto">
        No match for <span className="font-medium">"{query}"</span> in the RNA registry.
        Try a different name or a 9-digit SIREN number.
      </p>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  if (!query) {
    return (
      <>
        <Navbar />
        <main className="flex flex-col pt-16 bg-offwhite min-h-screen">
          <div className="max-w-3xl mx-auto w-full px-6 py-12">
            <h1 className="text-xl font-semibold text-slate-900 mb-6">
              Search the French association registry
            </h1>
            <SearchBar />
          </div>
        </main>
      </>
    );
  }

  let results: AssociationResult[] = [];
  let totalResults = 0;
  let apiError = false;

  try {
    const data = await searchAssociations(query, 20);
    results = sortResults(data.results);
    totalResults = data.total_results;
  } catch {
    apiError = true;
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-col pt-16 bg-offwhite min-h-screen">
        <div className="max-w-3xl mx-auto w-full px-6 py-10">

          <div className="mb-8">
            <SearchBar defaultValue={query} />
          </div>

          {apiError ? (
            <div className="text-center py-16">
              <p className="text-sm font-semibold text-slate-900">RNA registry unavailable</p>
              <p className="mt-1 text-sm text-slate-500">
                Could not reach the French government database. Please try again.
              </p>
            </div>
          ) : results.length === 0 ? (
            <EmptyState query={query} />
          ) : (
            <>
              <div className="flex items-baseline justify-between mb-4">
                <p className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-900">
                    {totalResults.toLocaleString("en")}
                  </span>{" "}
                  association{totalResults !== 1 ? "s" : ""} matching{" "}
                  <span className="font-medium">"{query}"</span>
                </p>
                {totalResults > 20 && (
                  <p className="text-xs text-slate-400">Showing top 20 — refine to narrow</p>
                )}
              </div>

              <div className="space-y-2">
                {results.map((a) => (
                  <ResultCard key={a.siren} a={a} />
                ))}
              </div>

              {totalResults > 20 && (
                <p className="mt-6 text-xs text-slate-400 text-center">
                  {totalResults.toLocaleString("en")} total results — showing first 20.
                  Narrow your search for more precise results.
                </p>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}
