import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Droneza" },
      { name: "description", content: "Three plans for European operators — Site, Fleet and Sovereign. Transparent, per-site pricing with EU data residency." },
      { property: "og:title", content: "Pricing — Droneza" },
      { property: "og:description", content: "Transparent per-site pricing for European airspace security." },
    ],
  }),
  component: Pricing,
});

const plans = [
  { n: "Site", p: "€1,900", per: "/site · month", d: "Single protected site. Log + Risk. Cloud only.", f: ["Droneza Log", "Droneza Risk", "5 operators", "EU cloud residency", "Email support"] },
  { n: "Fleet", p: "€6,400", per: "/month · up to 6 sites", d: "Multi-site operations with full evidence vault.", f: ["Everything in Site", "Droneza Evidence", "Unlimited operators", "SSO / SCIM", "24/7 support"], featured: true },
  { n: "Sovereign", p: "Custom", per: "on-prem / air-gapped", d: "For airports and critical infrastructure with sovereignty needs.", f: ["On-prem deployment", "Air-gapped option", "Named account team", "Custom integrations", "SLA + on-call"] },
];

function Pricing() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Pricing"
        title="Transparent. Per site. European."
        subtitle="No PDFs, no games. Prices you can put in a procurement doc today."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((pl) => (
            <div
              key={pl.n}
              className={`rounded-2xl p-8 ${pl.featured ? "border border-primary/40 bg-gradient-to-b from-primary/10 to-transparent shadow-[0_30px_80px_-30px_rgba(59,130,246,0.5)]" : "glass"}`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium uppercase tracking-widest text-white/70">{pl.n}</p>
                {pl.featured && (
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-accent">
                    Most chosen
                  </span>
                )}
              </div>
              <p className="mt-5 font-mono text-4xl text-white">{pl.p}</p>
              <p className="text-xs text-white/50">{pl.per}</p>
              <p className="mt-4 text-sm text-white/70">{pl.d}</p>
              <ul className="mt-6 space-y-2">
                {pl.f.map((x) => (
                  <li key={x} className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle2 size={14} className="mt-1 text-success" /> {x}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <LiquidButton to="/request-demo">Talk to sales</LiquidButton>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
