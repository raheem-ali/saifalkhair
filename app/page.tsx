import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import PartnersGrid from "@/components/PartnersGrid";
import PerformanceBars from "@/components/PerformanceBars";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { Container, CTABanner, Industries, SafetyQuality, StatsGrid, WhyUs, sectionPad } from "@/components/Sections";
import { EQUIPMENT, IMAGES, PROJECTS, SERVICES, SITE } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* ABOUT: text first, image second on mobile; image on the left on desktop */}
      <section className={`${sectionPad} bg-white`}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14 sm:mb-20">
            <div className="lg:col-span-7 lg:order-2 space-y-5">
              <span className="block text-xs font-bold tracking-widest uppercase text-[#2B2E83]">Who we are</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                A Jubail-based contractor built for industrial complexity
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {SITE.name} {SITE.legal} combines engineering discipline with hands-on execution strength. Our teams work inside live plants, on greenfield expansions and through demanding turnaround windows.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From tank fabrication and structural steel to high-voltage testing and protective coatings, every scope is planned by engineers, resourced with certified trades and governed by an uncompromising safety culture.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {[
                  ["Single-source capability", "Civil, mechanical and electrical under one contract."],
                  ["Rapid mobilisation", "Trade-ready crews across the Eastern Province."],
                  ["Documented quality", "Inspection and test plans that stand up to audit."],
                ].map(([t, d]) => (
                  <li key={t} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 text-sm">{t}</div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{d}</p>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-[#2B2E83] hover:gap-3 transition-all">
                More about us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-5 lg:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMAGES.site} alt="Industrial construction site" loading="lazy" className="w-full h-72 sm:h-96 lg:h-[520px] object-cover rounded-2xl shadow-xl border border-slate-200" />
            </div>
          </div>

          <StatsGrid />
        </Container>
      </section>


    {/* SERVICES */}
      <section className={`${sectionPad} bg-white`}>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <SectionHeading eyebrow="Engineering services" title="Multi-discipline capability across the plant lifecycle" description="Construction, fabrication, protection, maintenance and testing, engineered for oil and gas, power, water and mining assets." />
            <Link href="/services" className="mb-10 sm:mb-14 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-sm font-bold text-[#2B2E83] hover:bg-slate-50 self-start md:self-auto whitespace-nowrap">
              All services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {SERVICES.slice(0, 6).map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </Container>
      </section>


      {/* PARTNERS */}
      <section className={`${sectionPad} bg-[#F8FAFC] border-b border-slate-200`}>
        <Container>
          <SectionHeading eyebrow="Collaborators in growth" title="Trusted within the Kingdom's industrial ecosystem" description="We work alongside leading operators, EPC contractors and industrial developers across Saudi Arabia." center />
          <PartnersGrid />
        </Container>
      </section>




      
      {/* FLEET */}
      <section className={`${sectionPad} bg-slate-900 text-white`}>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <SectionHeading eyebrow="Equipment fleet" title="Heavy equipment and plant machinery" description="Cranes, earthmovers, trailers and generators supplied with certified operators and delivered to site." light />
            <Link href="/services/heavy-equipment-rental" className="mb-10 sm:mb-14 px-6 py-3 bg-[#00C2FF] hover:bg-[#00b0e6] text-[#0F172A] rounded-xl font-bold text-xs uppercase tracking-wider self-start md:self-auto whitespace-nowrap">
              Equipment rental
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {EQUIPMENT.map((e) => (
              <div key={e.name} className="bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-700">
                <div className="relative h-44 sm:h-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={e.image} alt={e.name} loading="lazy" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 text-[#00C2FF] text-[11px] font-bold">{e.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold">{e.name}</h3>
                  <span className="font-arabic text-xs text-slate-400 block mt-0.5" dir="rtl" style={{ textAlign: "left" }}>{e.arabic}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>


      
      <WhyUs />


  


      <SafetyQuality />

      {/* PROJECTS */}
      <section className={`${sectionPad} bg-slate-50 border-b border-slate-200`}>
        <Container>
          <SectionHeading eyebrow="Selected work" title="Representative project scopes" description="A snapshot of the disciplines our teams execute for industrial clients across the Kingdom." center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {PROJECTS.map((p) => (
              <article key={p.title} className="bg-white rounded-2xl overflow-hidden border border-slate-200 flex flex-col">
                <div className="relative h-48 sm:h-56">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#2B2E83]/90 text-white text-[11px] font-bold">{p.category}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-bold text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PerformanceBars />
      <Industries />
      <CTABanner />
    </>
  );
}
