import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-44 sm:h-52 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 p-3 rounded-xl bg-white/90 text-[#2B2E83] shadow-md"><Icon name={service.icon} /></span>
      </div>
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#2B2E83] transition-colors">{service.title}</h3>
        <span className="font-arabic text-xs text-[#2B2E83] font-semibold mt-1" dir="rtl" style={{ textAlign: "left" }}>{service.arabic}</span>
        <p className="text-slate-600 text-sm leading-relaxed mt-3 flex-1">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2B2E83]">
          Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
