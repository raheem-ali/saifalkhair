"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { METRICS } from "@/lib/data";

const R = 52;
const C = 2 * Math.PI * R;
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

// Reads the reduced-motion preference without setting state inside an effect.
function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(REDUCED_QUERY);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false // server snapshot
  );
}

function Ring({ value, label, show, delay }: { value: number; label: string; show: boolean; delay: number }) {
  const [n, setN] = useState(0);
  const reduced = useReducedMotion();

  // count-up number (skipped entirely when reduced motion is on)
  useEffect(() => {
    if (!show || reduced) return;
    let raf = 0;
    const dur = 1600;
    const start = performance.now() + delay;
    const tick = (t: number) => {
      const p = Math.min(Math.max((t - start) / dur, 0), 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [show, reduced, value, delay]);

  // with reduced motion, show the final value immediately
  const display = reduced && show ? value : n;

  return (
    <div className="group h-full rounded-2xl bg-white/[0.06] border border-white/10 p-5 sm:p-7 text-center backdrop-blur-sm hover:bg-white/10 hover:border-[#00C2FF]/40 transition-colors">
      <div
        className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32"
        role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}
      >
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="9" />
          <circle
            cx="60" cy="60" r={R} fill="none" stroke="#00C2FF" strokeWidth="9" strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={show ? C * (1 - value / 100) : C}
            style={{ transition: `stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms` }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl sm:text-3xl font-black text-white tabular-nums">
          {display}<span className="text-[#00C2FF] text-base sm:text-xl ml-0.5">%</span>
        </span>
      </div>
      <div className="mt-4 sm:mt-5 text-sm sm:text-base font-semibold text-white leading-snug">{label}</div>
    </div>
  );
}

export default function PerformanceBars() {
  const ref = useRef<HTMLElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect(); } },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-[#191C5C] via-[#22267a] to-[#2B2E83] py-16 sm:py-20 lg:py-28">
      {/* decorative background */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#00C2FF]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-24 w-[24rem] h-[24rem] rounded-full bg-white/5 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-bold tracking-wide">
              Performance you can measure
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-white">
              Get a solution for all your industrial needs.
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Strict quality control, permit-to-work discipline and engineer-led planning keep every contract on programme, safe and signed off first time.
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 bg-[#00C2FF] hover:bg-[#00b0e6] text-[#0F172A] font-bold rounded-xl text-xs uppercase tracking-wider transition-colors">
              Talk to our team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-5">
            {METRICS.map((m, i) => (
              <Ring key={m.label} value={m.value} label={m.label} show={show} delay={i * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}