"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Mail, MapPin, Clock, Menu, X } from "lucide-react";
import Logo from "./Logo";
import Icon from "./Icon";
import { NAV, SERVICES, SITE } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);      // mobile drawer
  const [dd, setDd] = useState(false);          // desktop services dropdown
  const [mSvc, setMSvc] = useState(false);      // mobile services accordion
  const pathname = usePathname();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close menus when the route changes (done during render, not in an effect)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setDd(false);
    setMSvc(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const enter = () => { if (timer.current) clearTimeout(timer.current); setDd(true); };
  const leave = () => { timer.current = setTimeout(() => setDd(false), 150); };
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const linkCls = (href: string) => `transition-colors hover:text-[#00C2FF] ${isActive(href) ? "text-[#2B2E83]" : "text-slate-700"}`;

  return (
    <>
      {/* Top bar: hidden on mobile */}
      <div className="hidden md:block bg-[#191C5C] text-slate-300 text-xs py-2.5 px-6">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href={`mailto:info@saifalkhair.com`} className="flex items-center gap-2 hover:text-[#00C2FF] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#00C2FF]" /> info@saifalkhair.com
            </a>
            <span className="hidden lg:flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#00C2FF]" /> {SITE.shortLocation}</span>
          </div>
          <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#00C2FF]" /> {SITE.hours}</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9 font-semibold text-sm" aria-label="Main">
            {NAV.map((n) =>
              n.href === "/services" ? (
                <div
                  key={n.href}
                  className="relative"
                  onMouseEnter={enter}
                  onMouseLeave={leave}
                  onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setDd(false); }}
                >
                  <div className="flex items-center gap-1">
                    <Link href={n.href} className={linkCls(n.href)}>{n.label}</Link>
                    <button
                      onClick={() => setDd((v) => !v)}
                      aria-label="Toggle services menu"
                      aria-expanded={dd}
                      className="p-1 rounded text-slate-500 hover:text-[#00C2FF]"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dd ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-5 w-[640px] transition-all duration-300 ease-out ${
                      dd ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                    }`}
                  >
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-3">
                      <div className="grid grid-cols-2 gap-1">
                        {SERVICES.map((s) => (
                          <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 group/item transition-colors">
                            <span className="p-2.5 rounded-lg bg-[#2B2E83]/10 text-[#2B2E83] group-hover/item:bg-[#2B2E83] group-hover/item:text-white transition-colors shrink-0">
                              <Icon name={s.icon} className="w-4 h-4" />
                            </span>
                            <span className="text-[13px] font-semibold text-slate-800 leading-snug group-hover/item:text-[#2B2E83]">{s.title}</span>
                          </Link>
                        ))}
                      </div>
                      <Link href="/services" className="mt-2 flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 text-[#2B2E83] text-sm font-bold hover:bg-slate-100 transition-colors">
                        View all services <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={n.href} href={n.href} className={linkCls(n.href)}>{n.label}</Link>
              )
            )}
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

        {/* Mobile drawer */}
        {open && (
          <div className="animate-menu lg:hidden absolute inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl max-h-[calc(100dvh-4rem)] overflow-y-auto px-4 py-5 space-y-1">
            {NAV.map((n) =>
              n.href === "/services" ? (
                <div key={n.href}>
                  <div className={`flex items-center rounded-lg ${isActive(n.href) ? "bg-slate-100" : ""}`}>
                    <Link href={n.href} className={`flex-1 px-3 py-3 font-semibold ${isActive(n.href) ? "text-[#2B2E83]" : "text-slate-700"}`}>{n.label}</Link>
                    <button onClick={() => setMSvc(!mSvc)} aria-label="Toggle services list" aria-expanded={mSvc} className="p-3 text-slate-500">
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mSvc ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${mSvc ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="ml-4 my-1 pl-3 border-l-2 border-slate-200 space-y-0.5">
                        {SERVICES.map((s) => (
                          <Link key={s.slug} href={`/services/${s.slug}`} className="block px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-[#2B2E83]">
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={n.href} href={n.href} className={`block px-3 py-3 rounded-lg font-semibold ${isActive(n.href) ? "bg-slate-100 text-[#2B2E83]" : "text-slate-700 hover:bg-slate-50"}`}>
                  {n.label}
                </Link>
              )
            )}
            <Link href="/contact" className="mt-3 flex items-center justify-center gap-2 w-full py-3.5 bg-[#2B2E83] text-white rounded-xl font-bold text-xs uppercase tracking-wider">
              Send Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </header>
    </>
  );
}