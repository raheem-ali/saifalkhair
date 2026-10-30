import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";
import Image from "next/image";
import { NAV, SERVICES, SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0A0D18] text-slate-400 text-sm">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group min-w-0" aria-label={`${SITE.name} home`}>
              {/* Logo Image */}
              <div className="relative w-50  sm:w-50">
                <Image
                  src="/images/logo.png" // Change extension if it's .svg, .jpg, etc.
                  alt={`${SITE.name} logo`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="font-arabic leading-loose max-w-sm" dir="rtl" style={{ textAlign: "left" }}>
              حلول متكاملة في الإنشاءات الصناعية والصيانة والمعدات والكوادر الفنية في المملكة العربية السعودية.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4">Quick links</h4>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}><Link href={n.href} className="hover:text-[#00C2FF] transition-colors">{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-[#00C2FF] transition-colors">{s.title}</Link></li>
              ))}
              <li><Link href="/services" className="text-[#00C2FF] hover:underline">View all services</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold mb-4">Head office</h4>
            <p className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#00C2FF]" /> {SITE.address}</p>
            <a href={`mailto:${SITE.email}`} className="flex gap-3 hover:text-[#00C2FF] break-all"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#00C2FF]" /> {SITE.email}</a>
            <p className="flex gap-3"><Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#00C2FF]" /> {SITE.hours}</p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-xs text-slate-500 text-center sm:text-left">
          © {new Date().getFullYear()} {SITE.name} {SITE.legal} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
