import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  title: string;
  description?: string;
  arabic?: string;
  image: string;
  crumbs: { label: string; href?: string }[];
}

export default function PageHero({ title, description, arabic, image, crumbs }: Props) {
  return (
    <section className="relative bg-[#0F172A] text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#191C5C]/85 to-[#0F172A]/60" />
      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-28">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300 mb-5">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {c.href ? <Link href={c.href} className="hover:text-[#00C2FF]">{c.label}</Link> : <span className="text-[#00C2FF]">{c.label}</span>}
              {i < crumbs.length - 1 && <ChevronRight className="w-3 h-3" />}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-3xl">{title}</h1>
        {arabic && <p className="font-arabic text-base sm:text-lg text-slate-300 mt-2" dir="rtl" style={{ textAlign: "left" }}>{arabic}</p>}
        {description && <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl">{description}</p>}
      </div>
    </section>
  );
}
