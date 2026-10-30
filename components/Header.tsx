"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, MapPin, Clock, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV, SITE } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* Top bar: hidden on mobile */}
      <div className="hidden md:block bg-[#191C5C] text-slate-300 text-xs py-2.5 px-6">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-[#00C2FF] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#00C2FF]" /> {SITE.email}
            </a>
            <span className="hidden lg:flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#00C2FF]" /> {SITE.shortLocation}</span>
          </div>
          <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#00C2FF]" /> {SITE.hours}</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          <Logo />

          <nav className="hidden lg:flex items-center gap-9 font-semibold text-sm" aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={`transition-colors hover:text-[#00C2FF] ${isActive(n.href) ? "text-[#2B2E83]" : "text-slate-700"}`}>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="hidden sm:inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#2B2E83] hover:bg-[#191C5C] rounded-xl shadow-md shadow-[#2B2E83]/20 transition-colors">
              Send Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
            <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden absolute inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl max-h-[calc(100dvh-4rem)] overflow-y-auto px-4 py-5 space-y-1">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={`block px-3 py-3 rounded-lg font-semibold ${isActive(n.href) ? "bg-slate-100 text-[#2B2E83]" : "text-slate-700 hover:bg-slate-50"}`}>
                {n.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-3 flex items-center justify-center gap-2 w-full py-3.5 bg-[#2B2E83] text-white rounded-xl font-bold text-xs uppercase tracking-wider">
              Send Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
