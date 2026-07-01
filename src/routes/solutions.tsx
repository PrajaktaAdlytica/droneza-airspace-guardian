import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";
import { Anchor, Building2, Factory, Plane } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Droneza" },
      { name: "description", content: "Droneza for airports, ports, municipalities and critical infrastructure — one platform, four operating contexts." },
      { property: "og:title", content: "Solutions — Droneza" },
      { property: "og:description", content: "One platform, four operating contexts." },
    ],
  }),
  component: Solutions,
});

const s = [
  { icon: Plane, t: "Airports", d: "From runway intrusions to perimeter overflights — coordinate detection, apron ops and CAA reporting in one timeline." },
  { icon: Anchor, t: "Ports", d: "Protect terminals, LNG jetties and container yards with a shared operational picture across security and harbour master." },
  { icon: Building2, t: "Municipalities", d: "City-wide event security, restricted-zone enforcement and public safety reporting — with EU data residency." },
  { icon: Factory, t: "Critical Infrastructure", d: "Nuclear, grid, rail and water — extend existing SOC and physical security stacks to the third dimension." },
];

function Solutions() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Solutions"
        title="One platform. Four operating contexts."
        subtitle="Droneza adapts to how your sector actually works — the regulators, the shifts and the escalation paths."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {s.map((x) => {
            const Icon = x.icon;
            return (
              <div key={x.t} className="holo rounded-2xl p-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{x.t}</h3>
                <p className="mt-2 text-sm text-white/60">{x.d}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-8">
          <div>
            <h3 className="text-xl font-semibold text-white">Not sure which fits your site?</h3>
            <p className="text-sm text-white/60">30-minute call — we'll tell you honestly.</p>
          </div>
          <LiquidButton to="/request-demo">Request Demo</LiquidButton>
        </div>
      </Section>
    </SiteLayout>
  );
}
