import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PartnersGrid from "@/components/PartnersGrid";
import { Container, CTABanner, Industries, SafetyQuality, StatsGrid, WhyUs, sectionPad } from "@/components/Sections";
import { IMAGES, SITE, TRADES } from "@/lib/data";

export const metadata: Metadata = { title: "About Us", description: `Learn about ${SITE.name} ${SITE.legal}, an industrial contractor based in Jubail.` };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A Jubail-based contractor built for industrial complexity"
        arabic={SITE.arabic}
        description="Engineering discipline, certified trades and a safety-first culture, delivered inside live plants and on new expansions."
        image={IMAGES.plant}
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className={`${sectionPad} bg-white`}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5">
              <SectionHeading eyebrow="Our story" title="Engineering strength with hands-on execution" />
              <p className="text-slate-600 leading-relaxed -mt-6 sm:-mt-10">
                {SITE.name} {SITE.legal} was founded in the industrial capital of Saudi Arabia. We combine engineering planning with the execution strength of experienced crews, so scopes are delivered methodically rather than reactively.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We deliver civil, mechanical and electrical construction, plant maintenance, heavy equipment hire, material supply and certified manpower. Clients choose us because they can manage one contractor instead of several, with one safety standard and one quality system across every scope.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our mission is simple: complete industrial work safely, to specification and on programme, and earn a place on the client's approved vendor list for the next campaign.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMAGES.site} alt="Our teams on site" loading="lazy" className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-xl" />
          </div>
          <div className="mt-14 sm:mt-20"><StatsGrid /></div>
        </Container>
      </section>

      <WhyUs />

      <section className={`${sectionPad} bg-white`}>
        <Container>
          <SectionHeading eyebrow="Our workforce" title="Certified trades, mobilised when your programme demands them" description="Our workforce is made up of trained, experienced engineers and technicians for industrial repair, maintenance and construction work, supplied individually or as fully supervised crews." />
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {TRADES.map((t) => <span key={t} className="px-4 py-2 rounded-full bg-[#2B2E83]/5 border border-[#2B2E83]/20 text-sm font-semibold text-[#2B2E83]">{t}</span>)}
          </div>
        </Container>
      </section>

      <SafetyQuality />
      <Industries />

      <section className={`${sectionPad} bg-[#F8FAFC] border-y border-slate-200`}>
        <Container>
          <SectionHeading eyebrow="Collaborators in growth" title="Trusted within the Kingdom's industrial ecosystem" center />
          <PartnersGrid />
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
