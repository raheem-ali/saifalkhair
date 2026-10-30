import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { Container, CTABanner, sectionPad } from "@/components/Sections";
import { PROCESS, SERVICES } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.short } : {};
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={service.title}
        arabic={service.arabic}
        description={service.short}
        image={service.image}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section className={`${sectionPad} bg-white`}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">Overview</h2>
                <p className="text-slate-600 leading-relaxed">{service.intro}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why clients choose us for this scope</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#00C2FF] shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Scope of work</h3>
                <ul className="space-y-2.5">
                  {service.scope.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2B2E83] mt-2.5 shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">How we work</h3>
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROCESS.map((p, i) => (
                    <li key={p.title} className="p-5 rounded-2xl border border-slate-200">
                      <span className="text-xs font-bold text-[#2B2E83]">Step {i + 1}</span>
                      <div className="font-bold text-slate-900 mt-1">{p.title}</div>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">{p.desc}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-5">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">At a glance</h3>
                  <dl className="space-y-4">
                    {service.specs.map((s) => (
                      <div key={s.label} className="border-b border-slate-200 last:border-0 pb-3 last:pb-0">
                        <dt className="text-xs text-slate-500">{s.label}</dt>
                        <dd className="font-semibold text-slate-900 text-sm mt-0.5">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="p-6 rounded-2xl bg-[#2B2E83] text-white">
                  <h3 className="font-bold text-lg">Need this service?</h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">Send us your scope and we will reply with a resourcing and execution plan.</p>
                  <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="mt-5 flex items-center justify-center gap-2 w-full py-3.5 bg-[#00C2FF] hover:bg-[#00b0e6] text-[#0F172A] rounded-xl font-bold text-xs uppercase tracking-wider transition-colors">
                    Send an Inquiry <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className={`${sectionPad} bg-slate-50 border-t border-slate-200`}>
        <Container>
          <SectionHeading eyebrow="Related services" title="Other services you may need" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {related.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
