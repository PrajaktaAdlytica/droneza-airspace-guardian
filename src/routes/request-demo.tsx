import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/request-demo")({
  head: () => ({
    meta: [
      { title: "Request a Demo — Droneza" },
      { name: "description", content: "30-minute walkthrough on your own use case. European team, no hardware commitment." },
      { property: "og:title", content: "Request a Demo — Droneza" },
      { property: "og:description", content: "30-minute walkthrough on your own use case." },
    ],
  }),
  component: RequestDemo,
});

function RequestDemo() {
  const [done, setDone] = useState(false);
  return (
    <SiteLayout>
      <Section
        eyebrow="Request Demo"
        title="See Droneza on your own site — in 30 minutes."
        subtitle="A European solutions engineer walks you through Log, Risk and Evidence using your reporting scenario."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            className="glass-strong space-y-4 rounded-2xl p-8"
          >
            {done ? (
              <div className="flex flex-col items-center py-14 text-center">
                <CheckCircle2 className="text-success" size={40} />
                <h3 className="mt-4 text-xl font-semibold text-white">Request received.</h3>
                <p className="mt-2 text-sm text-white/60">A member of the Droneza team will reach out within one business day.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Full name" placeholder="Anna Kowalska" />
                  <Field label="Work email" placeholder="anna@airport.eu" type="email" />
                  <Field label="Organisation" placeholder="Warsaw Chopin Airport" />
                  <Field label="Country" placeholder="Poland" />
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-widest text-white/60">Sector</label>
                  <select className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-primary">
                    <option>Airport</option><option>Port</option><option>Municipality</option><option>Critical infrastructure</option><option>Event operator</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-widest text-white/60">Tell us about your use case</label>
                  <textarea rows={4} placeholder="What are you protecting, and how do you handle drone sightings today?" className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-primary" />
                </div>
                <button type="submit" className="liquid-btn w-full">
                  Request Demo
                </button>
                <p className="text-center text-[11px] text-white/40">We reply within one business day.</p>
              </>
            )}
          </form>
          <div className="space-y-6">
            {[
              ["30-minute walkthrough", "Focused on your reporting and escalation flow."],
              ["European team", "Solutions engineers in Warsaw, Berlin and Paris."],
              ["No hardware commitment", "We work with the sensors you already have."],
              ["Data residency, guaranteed", "Your choice of EU region, contractually backed."],
            ].map(([t, d]) => (
              <div key={t} className="glass rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-white">{t}</p>
                    <p className="mt-1 text-xs text-white/60">{d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-widest text-white/60">{label}</label>
      <input {...rest} className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary" />
    </div>
  );
}
