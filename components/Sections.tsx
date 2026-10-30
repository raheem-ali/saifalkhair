import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { INDUSTRIES, SAFETY_POINTS, STATS, WHY_US } from "@/lib/data";

export const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-[1320px] mx-auto px-4 sm:px-6 ${className}`}>{children}</div>
);

export const sectionPad = "py-16 sm:py-20 lg:py-28";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
      {STATS.map((s) => (
        <div key={s.label} className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200">
          <div className="text-3xl sm:text-4xl font-black text-[#2B2E83] tracking-tight">{s.value}</div>
          <div className="font-bold text-slate-900 text-sm mt-2">{s.label}</div>
          <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
        </div>
      ))}
    </div>
  );
}

export function WhyUs() {
  return (
    <section className={`${sectionPad} bg-slate-50 border-y border-slate-200`}>
      <Container>
        <SectionHeading eyebrow="Why choose us" title="Six reasons clients keep us on their approved vendor list" description="Industrial clients need certainty. These commitments keep our crews returning to the same plants, campaign after campaign." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {WHY_US.map((w) => (
            <div key={w.title} className="p-6 bg-white rounded-2xl border border-slate-200">
              <span className="inline-flex p-3 rounded-xl bg-[#2B2E83]/10 text-[#2B2E83] mb-4"><Icon name={w.icon} /></span>
              <h3 className="font-bold text-slate-900 mb-2">{w.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Industries() {
  return (
    <section className={`${sectionPad} bg-white`}>
      <Container>
        <SectionHeading eyebrow="Industries served" title="Where our crews work every day" center />
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {INDUSTRIES.map((i) => (
            <span key={i} className="px-4 sm:px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-700">{i}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SafetyQuality() {
  return (
    <section className={`${sectionPad} bg-[#191C5C] text-white`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Safety & quality" title="Nobody gets hurt, nothing gets reworked" description="Safety is not a document we file before mobilisation. It governs how every task is planned, supervised and closed out." light />
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SAFETY_POINTS.map((p) => (
              <div key={p.title} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#00C2FF] mb-3" />
                <h3 className="font-bold mb-1.5">{p.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CTABanner({ title = "Planning a shutdown, expansion or maintenance campaign?", text = "Send us the scope and our engineering team will respond with a resourcing and execution plan." }: { title?: string; text?: string }) {
  return (
    <section className="py-16 sm:py-20 bg-[#2B2E83] text-white">
      <Container>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">{title}</h2>
            <p className="text-slate-300 text-sm sm:text-base">{text}</p>
          </div>
          <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-[#00C2FF] hover:bg-[#00b0e6] text-[#0F172A] font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider whitespace-nowrap">
            Send an Inquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
