export type AssociationSiege = {
  adresse: string;
  code_postal: string;
  commune: string;
  libelle_commune: string | null;
  date_creation: string | null;
  siret: string;
  etat_administratif: string;
};

export type AssociationComplements = {
  identifiant_association: string | null;
  est_association: boolean;
  est_ess: boolean;
};

export type AssociationResult = {
  siren: string;
  nom_complet: string;
  sigle: string | null;
  etat_administratif: "A" | "F";
  nature_juridique: string;
  activite_principale: string | null;
  tranche_effectif_salarie: string | null;
  siege: AssociationSiege;
  complements: AssociationComplements;
  dirigeants: Array<{
    nom?: string;
    prenoms?: string;
    qualite?: string;
    denomination?: string;
    type_dirigeant: string;
  }>;
};

export type SearchResponse = {
  results: AssociationResult[];
  total_results: number;
  page: number;
  per_page: number;
  total_pages: number;
};

export const NATURE_JURIDIQUE: Record<string, string> = {
  "9220": "Association déclarée",
  "9221": "Association déclarée (règlement général)",
  "9222": "Association intermédiaire",
  "9223": "Groupement d'employeurs",
  "9224": "Association d'Alsace-Moselle",
  "9230": "Association reconnue d'utilité publique",
  "9231": "Association de bienfaisance reconnue d'utilité publique",
  "9240": "Congrégation religieuse",
  "9241": "Congrégation religieuse reconnue d'utilité publique",
  "9260": "Association de droit local (Alsace-Moselle)",
};

export const EFFECTIF_LABELS: Record<string, string> = {
  "00": "0 employees",
  "01": "1–2 employees",
  "02": "3–5 employees",
  "03": "6–9 employees",
  "11": "10–19 employees",
  "12": "20–49 employees",
  "21": "50–99 employees",
  "22": "100–199 employees",
  "31": "200–249 employees",
  "32": "250–499 employees",
  "41": "500–999 employees",
  "42": "1,000–1,999 employees",
  "51": "2,000–4,999 employees",
  "52": "5,000–9,999 employees",
  "53": "10,000+ employees",
};

export function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "N/A";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function searchAssociations(
  query: string,
  perPage = 10
): Promise<SearchResponse> {
  const url = `https://recherche-entreprises.api.gouv.fr/search?q=${encodeURIComponent(query)}&page=1&per_page=${perPage}&type=association`;
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`RNA API returned ${res.status}`);
  return res.json() as Promise<SearchResponse>;
}

export async function getAssociationBySiren(
  siren: string
): Promise<AssociationResult | null> {
  const data = await searchAssociations(siren, 1);
  const match = data.results.find((r) => r.siren === siren);
  return match ?? data.results[0] ?? null;
}
