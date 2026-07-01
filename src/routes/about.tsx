import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Droneza" },
      { name: "description", content: "Droneza is a Warsaw-based European airspace intelligence platform for airports, ports, municipalities and critical infrastructure." },
      { property: "og:title", content: "About — Droneza" },
      { property: "og:description", content: "European team building the operating system of airspace security." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <Section
        eyebrow="About Droneza"
        title="A European team building the operating system of airspace security."
        subtitle="Founded in Warsaw by operators and engineers who spent the last decade in critical infrastructure, aviation and cyber. We build for the shift lead at 3am, not for the trade-show demo."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Mission", "Give every European operator the tools to detect, assess and document drone incidents in minutes, not days."],
            ["Principles", "Boring where it counts — encryption, residency, auditability. Ambitious where it matters — AI, UX, workflow design."],
            ["Location", "Headquartered in Warsaw. Operating across EU27. Talking to your national CAA in your language."],
          ].map(([t, d]) => (
            <div key={t} className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white">{t}</h3>
              <p className="mt-2 text-sm text-white/60">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-8">
          <div>
            <h3 className="text-xl font-semibold text-white">Work with a European team.</h3>
            <p className="text-sm text-white/60">Get a walkthrough with someone who has stood in your ops centre.</p>
          </div>
          <LiquidButton to="/request-demo">Request Demo</LiquidButton>
        </div>
      </Section>
    </SiteLayout>
  );
}
