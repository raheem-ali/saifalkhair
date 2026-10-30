"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/data";

const field = "w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:ring-2 focus:ring-[#2B2E83] outline-none";

export default function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to your backend, e.g. fetch("/api/contact", { method: "POST", body: new FormData(e.currentTarget) })
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 text-center">
        <CheckCircle2 className="w-12 h-12 text-[#00C2FF] mx-auto mb-4" />
        <h3 className="text-xl font-black text-slate-900">Inquiry received</h3>
        <p className="text-slate-600 text-sm mt-2">Our engineering team will review your scope and reply by email.</p>
        <button onClick={() => setSent(false)} className="mt-6 text-sm font-bold text-[#2B2E83] hover:underline">Send another inquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block text-sm font-semibold text-slate-700">Full name *
          <input required name="name" type="text" autoComplete="name" className={`${field} mt-1`} />
        </label>
        <label className="block text-sm font-semibold text-slate-700">Company *
          <input required name="company" type="text" autoComplete="organization" className={`${field} mt-1`} />
        </label>
      </div>
      <label className="block text-sm font-semibold text-slate-700">Email address *
        <input required name="email" type="email" autoComplete="email" className={`${field} mt-1`} />
      </label>
      <label className="block text-sm font-semibold text-slate-700">Service required
        <select name="service" defaultValue={defaultService} className={`${field} mt-1`}>
          <option value="">Select a service</option>
          {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          <option value="Multi-discipline contract">Multi-discipline contract</option>
        </select>
      </label>
      <label className="block text-sm font-semibold text-slate-700">Scope and timeline *
        <textarea required name="message" rows={5} placeholder="Describe the work, location, crew or equipment needed and your programme dates." className={`${field} mt-1 resize-none`} />
      </label>
      <button type="submit" className="w-full py-4 bg-[#2B2E83] hover:bg-[#191C5C] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors">
        Send Inquiry
      </button>
    </form>
  );
}
