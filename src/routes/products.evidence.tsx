import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductDetail } from "./products.log";

export const Route = createFileRoute("/products/evidence")({
  head: () => ({
    meta: [
      { title: "Droneza Evidence — Sealed evidence vault" },
      { name: "description", content: "Cryptographically sealed evidence for drone incidents — photos, video, GPS with independently verifiable chain of custody." },
      { property: "og:title", content: "Droneza Evidence — Sealed evidence vault" },
      { property: "og:description", content: "Chain-of-custody grade evidence for airspace incidents." },
    ],
  }),
  component: EvidencePage,
});

function EvidencePage() {
  return (
    <SiteLayout>
      <ProductDetail
        eyebrow="Droneza Evidence"
        icon={<ShieldCheck size={16} />}
        title="Evidence your legal team can hand to a regulator, unedited."
        subtitle="Every artifact — photo, video clip, GPS track, RF fingerprint — is hashed and countersigned on capture. The chain of custody is immutable and independently verifiable, from the sensor to the court."
        bullets={[
          "SHA-256 hash + timestamp seal on capture",
          "Independently verifiable chain of custody",
          "EU-resident encrypted storage with per-tenant keys",
          "One-click regulator export bundle",
        ]}
        preview={<EvidenceDemo />}
      />
    </SiteLayout>
  );
}

function EvidenceDemo() {
  return (
    <div>
      <p className="text-xs font-medium tracking-wide text-white/70">EVIDENCE VAULT · INC-2891</p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          ["Video", "04:22", "SEALED"],
          ["Photo x3", "IMG", "SEALED"],
          ["GPS track", "TRK", "SEALED"],
          ["RF finger", "RF", "SEALED"],
          ["Audio", "AUD", "SEALED"],
          ["Op notes", "TXT", "SIGNED"],
        ].map(([n, t, s]) => (
          <div key={n} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <div className="flex h-14 items-center justify-center rounded bg-black/40 text-[10px] font-mono text-white/50">{t}</div>
            <p className="mt-2 text-[11px] text-white/80">{n}</p>
            <p className="text-[10px] text-success">{s}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-white/8 bg-black/30 p-4 font-mono text-[10px] text-white/60">
        <p><span className="text-accent">hash:</span> 3fa1c9…b70e</p>
        <p><span className="text-accent">sig:</span> ed25519 · droneza-vault-eu-central</p>
        <p><span className="text-accent">sealed:</span> 2026-06-30T03:24:11Z</p>
      </div>
    </div>
  );
}
