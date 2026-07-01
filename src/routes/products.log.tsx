import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileLock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";

export const Route = createFileRoute("/products/log")({
  head: () => ({
    meta: [
      { title: "Droneza Log — Structured incident logbook" },
      { name: "description", content: "Turn every drone sighting into an audit-ready record. One shared timeline for security, operations and law enforcement." },
      { property: "og:title", content: "Droneza Log — Structured incident logbook" },
      { property: "og:description", content: "Structured incident logbook for European airspace security." },
    ],
  }),
  component: LogPage,
});

function LogPage() {
  return (
    <SiteLayout>
      <ProductDetail
        eyebrow="Droneza Log"
        icon={<FileLock size={20} />}
        title="Every sighting becomes a structured, audit-ready record."
        subtitle="Droneza Log replaces radios, WhatsApp threads and paper reports with one shared timeline that every stakeholder — security, ops, law enforcement — reads from."
        bullets={[
          "Structured incident schema (time, location, drone type, operator notes, witnesses)",
          "Shift-agnostic timeline with immutable audit history",
          "One-click export to EASA / national CAA reporting formats",
          "Automatic linking to Risk and Evidence artifacts",
        ]}
        preview={<LogDemo />}
      />
    </SiteLayout>
  );
}

export function ProductDetail({
  eyebrow, icon, title, subtitle, bullets, preview,
}: {
  eyebrow: string; icon: React.ReactNode; title: string; subtitle: string; bullets: string[]; preview: React.ReactNode;
}) {
  return (
    <Section>
      <Link to="/products" className="mb-8 inline-flex items-center gap-1 text-sm text-white/60 hover:text-white">
        <ArrowLeft size={14} /> All products
      </Link>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-accent">
            <span className="inline-flex h-5 w-5 items-center justify-center text-accent">{icon}</span>
            {eyebrow}
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-lg text-white/60">{subtitle}</p>
          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-white/80">
                <CheckCircle2 size={16} className="mt-0.5 text-success" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex gap-3">
            <LiquidButton to="/request-demo">Request Demo</LiquidButton>
            <Link to="/products" className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Compare products
            </Link>
          </div>
        </div>
        <div className="glass-strong rounded-2xl p-6">{preview}</div>
      </div>
    </Section>
  );
}

function LogDemo() {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <p className="text-xs font-medium tracking-wide text-white/70">INCIDENT LOG · Warsaw Chopin</p>
        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">12 TODAY</span>
      </div>
      <div className="mt-4 space-y-2 font-mono text-[11px]">
        {[
          ["INC-2891", "03:22", "Runway 33 · DJI Mavic 3", "HIGH", "text-danger"],
          ["INC-2890", "02:58", "Perimeter S · Autel EVO", "MED", "text-accent"],
          ["INC-2889", "01:41", "Terminal A · Unknown", "LOW", "text-success"],
          ["INC-2888", "00:12", "Hangar 4 · Parrot Anafi", "LOW", "text-success"],
          ["INC-2887", "23:04", "Perimeter N · DJI Air 2S", "MED", "text-accent"],
          ["INC-2886", "22:11", "Runway 15 · Unknown", "HIGH", "text-danger"],
        ].map((r) => (
          <div key={r[0]} className="grid grid-cols-[80px_60px_1fr_60px] items-center gap-2 rounded border border-white/5 bg-white/[0.02] px-3 py-2">
            <span className="text-white/70">{r[0]}</span>
            <span className="text-white/40">{r[1]}</span>
            <span className="text-white/70">{r[2]}</span>
            <span className={`text-right font-semibold ${r[4]}`}>{r[3]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
