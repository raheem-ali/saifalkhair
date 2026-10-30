import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import { Container, CTABanner, Industries, sectionPad } from "@/components/Sections";
import { IMAGES, SERVICES } from "@/lib/data";

export const metadata: Metadata = { title: "Services", description: "Construction, fabrication, electrical, maintenance, equipment rental, supply and manpower services from Jubail." };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Multi-discipline capability across the plant lifecycle"
        arabic="خدمات متكاملة للمقاولات العامة والصيانة والمعدات والكوادر"
        description="Construction, fabrication, protection, maintenance, supply and manpower, engineered for oil and gas, power, water and mining assets."
        image={IMAGES.steel}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className={`${sectionPad} bg-white`}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </Container>
      </section>
      <Industries />
      <CTABanner />
    </>
  );
}
