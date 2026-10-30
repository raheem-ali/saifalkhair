export default function SectionHeading({ eyebrow, title, description, center = false, light = false }: { eyebrow?: string; title: string; description?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`mb-10 sm:mb-14 space-y-3 ${center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {eyebrow && <span className={`block text-xs font-bold tracking-widest uppercase ${light ? "text-[#00C2FF]" : "text-[#2B2E83]"}`}>{eyebrow}</span>}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight ${light ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {description && <p className={`text-sm sm:text-base leading-relaxed ${light ? "text-slate-400" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
}
