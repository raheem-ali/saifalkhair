"use client";
import { PARTNERS } from "@/lib/data";

export default function PartnersGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
      {PARTNERS.map((p) => (
        <div key={p.id} className="h-20 sm:h-28 bg-white rounded-2xl border border-slate-200 flex items-center justify-center p-4 sm:p-6 group hover:shadow-lg transition-shadow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.url}
            alt={p.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = "none"; }}
          />
        </div>
      ))}
    </div>
  );
}
