import Link from "next/link";
import { SITE } from "@/lib/data";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group min-w-0" aria-label={`${SITE.name} home`}>
      <span className="flex shrink-0 items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#2B2E83] shadow-lg shadow-[#2B2E83]/20 group-hover:scale-105 transition-transform">
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#00C2FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M3 21L12 3l9 18H3z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 15h6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col min-w-0">
        <span className={`text-lg sm:text-2xl font-black tracking-tight leading-none ${light ? "text-white" : "text-[#2B2E83]"}`}>{SITE.name}</span>
        <span className={`text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mt-1 truncate ${light ? "text-slate-400" : "text-slate-600"}`}>{SITE.legal}</span>
        <span className={`hidden sm:block font-arabic text-[10px] leading-tight ${light ? "text-slate-500" : "text-slate-400"}`}>{SITE.arabic}</span>
      </span>
    </Link>
  );
}
