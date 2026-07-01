import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Radar as RadarIcon,
  Brain,
  FileLock,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Building2,
  Plane,
  Anchor,
  Radio,
  Camera,
  KeyRound,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ParticleHero } from "@/components/site/ParticleHero";
import { OpsDashboard } from "@/components/site/OpsDashboard";
import { LiquidButton } from "@/components/site/LiquidButton";
import { Section } from "@/components/site/Section";
import { Radar } from "@/components/site/Radar";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustedBy />
      <Problem />
      <Solution />
      <Products />
      <HowItWorks />
      <BuiltInEurope />
      <CommandCentre />
      <Integrations />
      <Stats />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ParticleHero />
      </div>
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-28 lg:grid-cols-[1.05fr_1fr] lg:pt-32">
        <div className="fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            European Airspace Intelligence Platform
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-[64px] lg:leading-[1.05]">
            Protect critical infrastructure{" "}
            <span className="text-accent-gradient">before drone incidents</span>{" "}
            become security incidents.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            Droneza unifies drone detection, AI-powered risk assessment and secure evidence management into one operational platform for airports, ports, municipalities and critical infrastructure.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <LiquidButton to="/request-demo">Request Demo</LiquidButton>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Watch Platform Tour
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
            {["GDPR compliant", "EU27 operational", "SOC 2 aligned", "ISO 27001 in progress"].map((x) => (
              <span key={x} className="inline-flex items-center gap-2">
                <CheckCircle2 size={14} className="text-success" /> {x}
              </span>
            ))}
          </div>
        </div>
        <div className="relative fade-up" style={{ animationDelay: "0.15s" }}>
          <OpsDashboard />
        </div>
      </div>
    </section>
  );
}

const LOGOS = [
  "Frankfurt Port Authority",
  "Kraków Airport",
  "EDF Nuclear",
  "Deutsche Bahn",
  "Port of Rotterdam",
  "SNCF Réseau",
  "Warsaw Chopin",
  "Enel Grid",
  "Copenhagen Metro",
  "Munich Stadion",
];

function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#0a1521]/60 py-14">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
        <Radar size={520} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-white/50">
          Trusted across critical infrastructure
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee flex w-max gap-14 whitespace-nowrap">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <span
                key={i}
                className="text-lg font-semibold tracking-tight text-white/50 transition hover:text-white/80"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    { t: "Manual reporting", d: "Sightings arrive by radio, phone or paper — impossible to correlate across shifts." },
    { t: "Slow coordination", d: "Security, ops and law enforcement work in separate tools with no shared timeline." },
    { t: "Lost evidence", d: "Video and telemetry get scattered across devices, with no chain of custody." },
  ];
  return (
    <Section
      eyebrow="The Problem"
      title={<>Drone incidents are still handled with <span className="text-white/50">paper, radios and guesswork.</span></>}
      subtitle="Every minute a drone stays unclassified over your site increases operational, financial and regulatory risk. Manual coordination isn't a strategy — it's an exposure."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.t} className="glass rounded-xl p-6">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-danger/30 bg-danger/10 text-danger">
              <RadarIcon size={16} />
            </div>
            <h3 className="text-lg font-semibold text-white">{it.t}</h3>
            <p className="mt-2 text-sm text-white/60">{it.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Solution() {
  const steps = ["Drone Detected", "Risk Analysed", "Evidence Captured", "Incident Resolved"];
  return (
    <Section
      eyebrow="The Solution"
      title="One operational workflow, four decisive outcomes."
      subtitle="Droneza converts a chaotic sighting into a resolved, documented incident — automatically."
    >
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 line-flow md:block" />
        <div className="relative grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s} className="glass relative rounded-xl p-5 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-sm font-medium text-white">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const PRODUCTS = [
  {
    slug: "/products/log",
    name: "Droneza Log",
    status: "Live",
    icon: FileLock,
    desc: "Structured incident logbook that turns any sighting into a searchable, audit-ready record.",
    preview: LogPreview,
  },
  {
    slug: "/products/risk",
    name: "Droneza Risk",
    status: "AI",
    icon: Brain,
    desc: "AI classification and threat scoring — restricted zones, drone type, flight pattern and confidence.",
    preview: RiskPreview,
  },
  {
    slug: "/products/evidence",
    name: "Droneza Evidence",
    status: "Vault",
    icon: ShieldCheck,
    desc: "Cryptographically sealed evidence vault — photos, video, GPS tracks with chain-of-custody.",
    preview: EvidencePreview,
  },
];

function Products() {
  return (
    <Section
      id="products"
      eyebrow="Products"
      title={<>Three products, <span className="text-accent-gradient">one command surface.</span></>}
      subtitle="Each product ships standalone. Together they form the operating system of your airspace security team."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {PRODUCTS.map((p) => {
          const Icon = p.icon;
          const Preview = p.preview;
          return (
            <div key={p.name} className="holo rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Icon size={18} />
                </div>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent">
                  {p.status}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-2 text-sm text-white/60">{p.desc}</p>
              <div className="mt-5 rounded-lg border border-white/8 bg-black/30 p-3">
                <Preview />
              </div>
              <Link
                to={p.slug}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition hover:text-accent"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function LogPreview() {
  return (
    <div className="space-y-1.5 font-mono text-[11px]">
      {[
        ["INC-2891", "03:22", "DJI Mavic 3", "HIGH"],
        ["INC-2890", "02:58", "Autel EVO", "LOW"],
        ["INC-2889", "01:41", "Unknown", "MED"],
      ].map((r) => (
        <div key={r[0]} className="flex items-center justify-between">
          <span className="text-white/70">{r[0]}</span>
          <span className="text-white/40">{r[1]}</span>
          <span className="text-white/60">{r[2]}</span>
          <span className={r[3] === "HIGH" ? "text-danger" : r[3] === "MED" ? "text-accent" : "text-success"}>{r[3]}</span>
        </div>
      ))}
    </div>
  );
}
function RiskPreview() {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-2xl text-white">87</span>
        <span className="text-[10px] text-danger">HIGH · 96%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
        <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-primary via-accent to-danger" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-1 text-[10px] text-white/60">
        <span>Zone: RESTRICTED</span>
        <span>Alt: 82m</span>
        <span>Vector: NE</span>
        <span>Class: Consumer</span>
      </div>
    </div>
  );
}
function EvidencePreview() {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {["04:22", "GPS", "IMG", "IMG", "SEAL", "AUD"].map((t, i) => (
        <div key={i} className="flex h-9 items-center justify-center rounded border border-white/10 bg-white/5 text-[10px] text-white/60">
          {t}
        </div>
      ))}
    </div>
  );
}

const WORKFLOW = [
  { t: "Drone Detected", d: "A drone enters protected airspace and is automatically detected or reported." },
  { t: "Droneza Log", d: "Every sighting is recorded in a structured incident log." },
  { t: "Droneza Risk", d: "Droneza evaluates the threat level and prioritises the incident." },
  { t: "Droneza Evidence", d: "Evidence is securely preserved with a complete audit trail." },
  { t: "Incident Resolved", d: "Operators close the incident with all evidence and actions documented." },
];

function HowItWorks() {
  return (
    <Section
      eyebrow="How Droneza Works"
      title="From first sighting to closed case."
      subtitle="From the first drone sighting to a fully documented incident, Droneza keeps every team coordinated in one operational workflow."
    >
      <div className="relative">
        <div className="pointer-events-none absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px line-flow md:block md:left-1/2" />
        <div className="space-y-6">
          {WORKFLOW.map((s, i) => (
            <div
              key={s.t}
              className={`grid gap-6 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="holo rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{s.t}</h3>
                </div>
                <p className="mt-3 text-sm text-white/60">{s.d}</p>
                <div className="mt-4 rounded-lg border border-white/8 bg-black/30 p-3">
                  <StepPreview index={i} />
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function StepPreview({ index }: { index: number }) {
  if (index === 0) return (
    <div className="flex items-center gap-4">
      <Radar size={110} />
      <div className="text-[11px] text-white/60">
        <p><span className="text-white/80">Contact:</span> DJI Mavic 3</p>
        <p><span className="text-white/80">GPS:</span> 52.16°N · 20.96°E</p>
        <p><span className="text-white/80">Alt:</span> 82 m</p>
      </div>
    </div>
  );
  if (index === 1) return <LogPreview />;
  if (index === 2) return <RiskPreview />;
  if (index === 3) return <EvidencePreview />;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <CheckCircle2 size={16} className="text-success" />
        <div>
          <p className="text-sm font-medium text-white">INC-2891 · Resolved</p>
          <p className="text-[11px] text-white/50">Response · 4m 12s</p>
        </div>
      </div>
      <span className="rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">CLOSED</span>
    </div>
  );
}

function BuiltInEurope() {
  const cities = [
    ["Warsaw", 62, 42],
    ["Berlin", 52, 40],
    ["Paris", 38, 52],
    ["Madrid", 30, 68],
    ["Rome", 52, 66],
    ["Copenhagen", 50, 28],
    ["Amsterdam", 42, 38],
    ["Vienna", 55, 50],
  ] as const;
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Built in Europe
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Built in Europe. <br />
            <span className="text-accent-gradient">Designed for Europe's airspace.</span>
          </h2>
          <p className="mt-5 max-w-lg text-white/60">
            Headquartered in Warsaw and operating across EU27, Droneza is engineered around European regulatory frameworks — U-space, EASA and national CAA reporting — with data residency you can prove.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              ["EU", "Data residency"],
              ["GDPR", "By design"],
              ["27+", "Countries ready"],
            ].map(([a, b]) => (
              <div key={a} className="glass rounded-xl p-4">
                <p className="font-mono text-2xl text-white">{a}</p>
                <p className="mt-1 text-xs text-white/60">{b}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[5/4] rounded-2xl border border-white/8 bg-black/30 p-4">
          {/* Placeholder Europe map */}
          <svg viewBox="0 0 100 80" className="h-full w-full">
            <defs>
              <radialGradient id="eu" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100" height="80" fill="url(#eu)" />
            {/* stylised europe outline */}
            <path
              d="M20 30 Q28 22 38 24 Q46 18 55 22 Q66 20 72 28 Q80 30 78 40 Q82 48 72 54 Q66 62 54 62 Q46 68 36 64 Q28 66 22 58 Q14 52 18 42 Q16 34 20 30 Z"
              fill="none"
              stroke="#3B82F6"
              strokeOpacity="0.35"
              strokeWidth="0.4"
            />
            {cities.map(([, x, y], i) => (
              <g key={i}>
                {cities.slice(i + 1).map(([, x2, y2], j) => (
                  <line key={j} x1={x} y1={y} x2={x2} y2={y2} stroke="#4FD1C5" strokeOpacity="0.08" strokeWidth="0.25" />
                ))}
              </g>
            ))}
            {cities.map(([name, x, y]) => (
              <g key={name}>
                <circle cx={x} cy={y} r="1.6" fill="#4FD1C5" />
                <circle cx={x} cy={y} r="3" fill="#4FD1C5" opacity="0.25">
                  <animate attributeName="r" values="1.6;4;1.6" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x={x + 2.5} y={y + 1} fill="#fff" opacity="0.55" fontSize="2.4" fontFamily="Space Grotesk">{name}</text>
              </g>
            ))}
          </svg>
          {/* Spline shield placeholder */}
          <div className="absolute -right-4 -top-6 hidden h-32 w-32 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-2 text-center text-[10px] uppercase tracking-widest text-white/40 backdrop-blur lg:flex float-slow">
            <div>
              <ShieldCheck className="mx-auto mb-1 text-accent" size={28} />
              Spline shield<br/>slot
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommandCentre() {
  return (
    <Section
      eyebrow="Command Centre"
      title="A realistic operations dashboard, not a demo screenshot."
      subtitle="Every widget below is production surface — the same panels your night-shift operator will use."
    >
      <div className="glass-strong rounded-2xl p-6">
        <div className="grid gap-4 md:grid-cols-6">
          <div className="col-span-4 rounded-xl border border-white/8 bg-black/30 p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-medium text-white/70">Incident Feed</p>
              <span className="rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-semibold text-success">
                LIVE
              </span>
            </div>
            <div className="space-y-2">
              {[
                ["INC-2891", "Warsaw Chopin · Runway 33", "HIGH", "text-danger"],
                ["INC-2890", "Port Gdynia · Terminal 2", "MED", "text-accent"],
                ["INC-2889", "Berlin BER · Perimeter S", "LOW", "text-success"],
                ["INC-2888", "Munich Arena · East gate", "MED", "text-accent"],
                ["INC-2887", "Enel Piombino · Substation A", "LOW", "text-success"],
              ].map(([id, loc, sev, c]) => (
                <div key={id} className="flex items-center justify-between rounded-md border border-white/5 bg-white/[0.02] px-3 py-2 text-xs">
                  <span className="font-mono text-white/70">{id}</span>
                  <span className="text-white/60">{loc}</span>
                  <span className={`font-semibold ${c}`}>{sev}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 space-y-4">
            <div className="rounded-xl border border-white/8 bg-black/30 p-5">
              <p className="text-xs text-white/60">Threat Level</p>
              <p className="mt-1 font-mono text-3xl text-danger">ELEVATED</p>
              <p className="mt-1 text-[11px] text-white/50">Rolling 24h · +12%</p>
            </div>
            <div className="rounded-xl border border-white/8 bg-black/30 p-5">
              <p className="text-xs text-white/60">Evidence Queue</p>
              <p className="mt-1 font-mono text-3xl text-white">08</p>
              <p className="mt-1 text-[11px] text-white/50">3 pending seal</p>
            </div>
          </div>
          <div className="col-span-3 rounded-xl border border-white/8 bg-black/30 p-5">
            <p className="text-xs font-medium text-white/70">Risk Analytics · 7d</p>
            <svg viewBox="0 0 200 60" className="mt-3 h-24 w-full">
              <defs>
                <linearGradient id="ra" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 45 L20 38 L40 42 L60 30 L80 34 L100 22 L120 28 L140 16 L160 24 L180 12 L200 18 L200 60 L0 60 Z" fill="url(#ra)" />
              <path d="M0 45 L20 38 L40 42 L60 30 L80 34 L100 22 L120 28 L140 16 L160 24 L180 12 L200 18" stroke="#3B82F6" strokeWidth="1.2" fill="none" />
            </svg>
          </div>
          <div className="col-span-3 rounded-xl border border-white/8 bg-black/30 p-5">
            <p className="text-xs font-medium text-white/70">Activity Timeline</p>
            <div className="mt-3 space-y-2 text-[11px]">
              {[
                ["03:24", "Evidence sealed · INC-2891"],
                ["03:22", "Risk elevated · Warsaw Chopin"],
                ["03:15", "Shift handover · Ops team B"],
                ["02:58", "New contact · Port Gdynia"],
              ].map(([t, e]) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="font-mono text-white/40">{t}</span>
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  <span className="text-white/70">{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Integrations() {
  const items = [
    { icon: Plane, label: "Airport Security" },
    { icon: Camera, label: "CCTV" },
    { icon: KeyRound, label: "Access Control" },
    { icon: Radio, label: "Command Centres" },
    { icon: ShieldCheck, label: "Emergency Response" },
    { icon: Building2, label: "Municipal Systems" },
    { icon: Anchor, label: "Port Ops" },
    { icon: RadarIcon, label: "C-UAS Sensors" },
  ];
  return (
    <Section
      eyebrow="Integrations"
      title="Part of a Smarter Security Stack."
      subtitle="Droneza plugs into the tools your ops teams already trust — from CCTV and access control to command-centre radios and municipal alert systems."
    >
      <div className="glass rounded-2xl p-6">
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee flex w-max gap-4">
            {[...items, ...items, ...items].map((it, i) => {
              const Icon = it.icon;
              return (
                <div key={i} className="flex min-w-[220px] items-center gap-3 rounded-xl border border-white/8 bg-black/30 px-5 py-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-accent">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm text-white/80">{it.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Stats() {
  const stats = [
    ["420K+", "Drone events logged"],
    ["98%", "Evidence accuracy"],
    ["EU27", "Regulatory ready"],
    ["24/7", "Monitoring uptime"],
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="glass grid rounded-2xl md:grid-cols-4">
        {stats.map(([a, b], i) => (
          <div key={a} className={`p-8 ${i ? "md:border-l md:border-white/5" : ""}`}>
            <Counter value={a} />
            <p className="mt-2 text-sm text-white/60">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Counter({ value }: { value: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const num = parseInt(value.replace(/\D/g, ""), 10);
    if (!num) { setDisplay(value); return; }
    let started = false;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const dur = 1400;
          const t0 = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const v = Math.floor(num * (1 - Math.pow(1 - p, 3)));
            setDisplay(value.replace(String(num), v.toLocaleString("en-US")));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);
  return <p ref={ref} className="font-mono text-3xl font-semibold text-white md:text-4xl">{display}</p>;
}

function Testimonials() {
  return (
    <Section
      eyebrow="Testimonials"
      title="From the people running Europe's airspace."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <blockquote className="glass rounded-2xl p-8">
          <p className="text-lg text-white/85">
            "Before Droneza, a drone sighting meant three phone calls, four paper reports and a lost weekend rebuilding the timeline. Now the incident is logged, scored and sealed before I finish my coffee."
          </p>
          <footer className="mt-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
            <div>
              <p className="text-sm font-medium text-white">Marta K.</p>
              <p className="text-xs text-white/50">Head of Ops · European regional airport</p>
            </div>
          </footer>
        </blockquote>
        <blockquote className="glass rounded-2xl p-8">
          <p className="text-lg text-white/85">
            "The evidence vault alone changed how our legal team engages with the CAA. Chain-of-custody is no longer a spreadsheet."
          </p>
          <footer className="mt-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-primary" />
            <div>
              <p className="text-sm font-medium text-white">Lukas B.</p>
              <p className="text-xs text-white/50">Port Security Director · Northern Europe</p>
            </div>
          </footer>
        </blockquote>
      </div>
    </Section>
  );
}

const FAQS = [
  ["Do I need to install radar hardware?", "No. Droneza integrates with the C-UAS sensors and CCTV you already operate, and works with manual reporting from day one."],
  ["Where is my data stored?", "Exclusively within the EU. You choose the region — Frankfurt, Warsaw or Paris — with residency contractually guaranteed."],
  ["Is Droneza compliant with EASA and national CAA reporting?", "Yes. Incident exports are pre-formatted for EASA and major national CAA frameworks."],
  ["How is evidence sealed?", "Each artifact is hashed and countersigned on capture; the chain is immutable and independently verifiable."],
  ["Can we run Droneza on-prem?", "Airports and critical infrastructure customers can deploy the platform inside their own environment. Talk to us about air-gapped options."],
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="FAQ" title="Answers before the demo call.">
      <div className="mx-auto max-w-3xl divide-y divide-white/5 rounded-2xl border border-white/8 bg-white/[0.02]">
        {FAQS.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <button
              key={q}
              onClick={() => setOpen(isOpen ? null : i)}
              className="block w-full px-6 py-5 text-left"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-medium text-white">{q}</span>
                <ChevronDown
                  size={18}
                  className={`text-white/50 transition ${isOpen ? "rotate-180 text-accent" : ""}`}
                />
              </div>
              <div
                className={`grid transition-all duration-300 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-white/60">{a}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0d1a29] to-[#08121D] p-14 text-center">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Ready to secure your airspace?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            30-minute call · European team · No hardware commitment.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <LiquidButton to="/request-demo">Request Demo</LiquidButton>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Explore Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
