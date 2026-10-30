import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Container, sectionPad } from "@/components/Sections";
import { IMAGES, SITE } from "@/lib/data";

export const metadata: Metadata = { title: "Contact", description: `Contact the ${SITE.name} team in Jubail.` };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;

  const info = [
    { icon: MapPin, label: "Head office", value: SITE.address },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Clock, label: "Working hours", value: SITE.hours },
  ];

  return (
    <>
      <PageHero
        title="Talk to our Jubail team"
        description="Send us the scope and our engineering team will respond with a resourcing and execution plan."
        image={IMAGES.workers}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className={`${sectionPad} bg-slate-50`}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 space-y-4">
              {info.map(({ icon: I, label, value, href }) => (
                <div key={label} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-200">
                  <span className="p-3 h-fit rounded-xl bg-[#2B2E83]/10 text-[#2B2E83]"><I className="w-5 h-5" /></span>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500">{label}</div>
                    {href ? <a href={href} className="font-semibold text-slate-900 hover:text-[#2B2E83] break-all">{value}</a> : <div className="font-semibold text-slate-900 leading-snug">{value}</div>}
                  </div>
                </div>
              ))}
              <p className="text-sm text-slate-500 px-1">Commercial registration and certifications are available on request.</p>
            </div>
            <div className="lg:col-span-7">
              <ContactForm defaultService={service ?? ""} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
