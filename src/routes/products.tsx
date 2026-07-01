import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, FileLock, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Droneza" },
      { name: "description", content: "Droneza Log, Risk and Evidence — three products, one command surface for airspace security." },
      { property: "og:title", content: "Products — Droneza" },
      { property: "og:description", content: "Three products, one command surface for European airspace security." },
    ],
  }),
  component: ProductsPage,
});

const items = [
  {
    slug: "/products/log",
    name: "Droneza Log",
    icon: FileLock,
    tag: "Incident logbook",
    d: "Structured incident logbook — every sighting becomes an audit-ready record with a shared timeline.",
  },
  {
    slug: "/products/risk",
    name: "Droneza Risk",
    icon: Brain,
    tag: "AI threat scoring",
    d: "AI classification, restricted-zone reasoning and threat scoring — with human-in-the-loop confirmation.",
  },
  {
    slug: "/products/evidence",
    name: "Droneza Evidence",
    icon: ShieldCheck,
    tag: "Sealed evidence vault",
    d: "Cryptographically sealed evidence — photos, video, GPS with independently verifiable chain of custody.",
  },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Products"
        title="Three products. One operating system for airspace security."
        subtitle="Buy them together as the Droneza Platform, or start with the module that closes your most urgent gap."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((p) => {
            const Icon = p.icon;
            return (
              <Link to={p.slug} key={p.name} className="holo block rounded-2xl p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Icon size={18} />
                </div>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-widest text-accent">
                  {p.tag}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-white/60">{p.d}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/8 bg-white/[0.02] p-8">
          <div>
            <h3 className="text-xl font-semibold text-white">Ready to see the full platform?</h3>
            <p className="text-sm text-white/60">30-minute walkthrough on your own use case.</p>
          </div>
          <LiquidButton to="/request-demo">Request Demo</LiquidButton>
        </div>
      </Section>
    </SiteLayout>
  );
}
