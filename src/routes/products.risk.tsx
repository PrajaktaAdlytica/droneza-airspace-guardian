import { createFileRoute } from "@tanstack/react-router";
import { Brain } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductDetail } from "./products.log";

export const Route = createFileRoute("/products/risk")({
  head: () => ({
    meta: [
      { title: "Droneza Risk — AI threat scoring" },
      { name: "description", content: "AI classification and threat scoring for drone incidents — restricted zones, drone type, flight pattern and confidence." },
      { property: "og:title", content: "Droneza Risk — AI threat scoring" },
      { property: "og:description", content: "AI risk assessment for European airspace incidents." },
    ],
  }),
  component: RiskPage,
});

function RiskPage() {
  return (
    <SiteLayout>
      <ProductDetail
        eyebrow="Droneza Risk"
        icon={<Brain size={16} />}
        title="AI risk scoring that your operators can defend."
        subtitle="Droneza Risk fuses radar, RF and camera signals with regulatory context and returns a score you can explain — with confidence bands, restricted-zone reasoning and a human-in-the-loop override."
        bullets={[
          "Drone classification across 300+ consumer and prosumer models",
          "Restricted-zone and U-space reasoning built into the score",
          "Confidence bands with per-signal explainability",
          "Human-in-the-loop override, fully audited",
        ]}
        preview={<RiskDemo />}
      />
    </SiteLayout>
  );
}

function RiskDemo() {
  return (
    <div>
      <p className="text-xs font-medium tracking-wide text-white/70">RISK ANALYSIS · INC-2891</p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-white/8 bg-black/30 p-4">
          <p className="text-xs text-white/60">Risk Score</p>
          <p className="mt-1 font-mono text-4xl text-white">87<span className="text-lg text-white/40">/100</span></p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-primary via-accent to-danger" />
          </div>
        </div>
        <div className="rounded-xl border border-white/8 bg-black/30 p-4">
          <p className="text-xs text-white/60">Confidence</p>
          <p className="mt-1 font-mono text-4xl text-success">96%</p>
          <p className="mt-3 text-[11px] text-white/50">Radar + RF + optical</p>
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-white/8 bg-black/30 p-4">
        <p className="text-xs text-white/60">Explainability</p>
        <div className="mt-2 space-y-2 text-[11px]">
          {[
            ["Restricted zone breach", "+34"],
            ["Class: consumer, controllable", "+18"],
            ["Vector toward runway", "+22"],
            ["Time-of-day risk profile", "+13"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between">
              <span className="text-white/70">{k}</span>
              <span className="font-mono text-danger">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
