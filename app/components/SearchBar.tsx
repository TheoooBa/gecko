"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({
  placeholder,
  defaultValue,
}: {
  placeholder?: string;
  defaultValue?: string;
}) {
  const [query, setQuery] = useState(defaultValue ?? "");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 w-full">
      <div className="flex-1 relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder ?? "Search an association... (e.g. Les Restos du Cœur)"}
          className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 rounded-md bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gecko focus:border-transparent shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="px-5 py-3 bg-gecko text-white text-sm font-medium rounded-md hover:bg-gecko-dark transition-colors whitespace-nowrap shadow-sm"
      >
        Search
      </button>
    </form>
  );
}
