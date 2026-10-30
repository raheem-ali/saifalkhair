"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { SLIDES } from "@/lib/data";

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  const go = (d: number) => setActive((p) => (p + d + SLIDES.length) % SLIDES.length);

  return (
    <section data-no-reveal className="relative bg-[#0F172A] text-white overflow-hidden min-h-[560px] sm:min-h-[600px] lg:min-h-[660px]">
      {SLIDES.map((s, i) => (
        <div key={s.id} aria-hidden={i !== active} className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "hero-active opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#191C5C]/80 to-black/40" />
          <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 h-full flex items-center pt-12 pb-28 sm:py-20">
            <div className="hero-content max-w-3xl space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00C2FF] text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 shrink-0" /> {s.badge}
              </div>
              <div className="space-y-2">
                <span className="text-[#00C2FF] font-bold text-xs tracking-widest block uppercase">{s.subtitle}</span>
                <h1 className="text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-5xl font-black tracking-tight">{s.title}</h1>
                <p className="font-arabic text-sm sm:text-lg text-slate-300 pt-1" dir="rtl" style={{ textAlign: "left" }}>{s.arabic}</p>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">{s.description}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                <Link href="/services" className="px-7 py-3.5 bg-[#00C2FF] hover:bg-[#00b0e6] text-[#0F172A] font-bold rounded-xl shadow-lg shadow-[#00C2FF]/20 transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold transition-colors text-xs uppercase tracking-wider text-center">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute z-30 bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0">
        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
          <button onClick={() => go(-1)} aria-label="Previous slide" className="p-2 rounded-lg hover:bg-white/20"><ChevronLeft className="w-4 h-4" /></button>
          <div className="flex items-center gap-2 px-2">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`Go to slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-[#00C2FF]" : "w-2 bg-white/40"}`} />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next slide" className="p-2 rounded-lg hover:bg-white/20"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  );
}
