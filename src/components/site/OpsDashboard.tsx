import { Activity, AlertTriangle, MapPin, ShieldCheck, Video } from "lucide-react";
import { Radar } from "./Radar";

export function OpsDashboard() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10">
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="glass-strong relative rounded-2xl p-5 shadow-[0_40px_120px_-30px_rgba(59,130,246,0.35)]">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success pulse-dot" />
            <span className="text-xs font-medium tracking-wide text-white/70">
              LIVE · OPS CENTRE · WAW-01
            </span>
          </div>
          <span className="font-mono text-[10px] text-white/40">03:24:11 UTC</span>
        </div>

        <div className="mt-4 grid grid-cols-6 gap-3">
          {/* Radar */}
          <div className="col-span-3 rounded-xl border border-white/8 bg-black/30 p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-medium text-white/70">Live Detection</p>
              <span className="rounded-full bg-danger/15 px-2 py-0.5 text-[10px] font-semibold text-danger">
                1 THREAT
              </span>
            </div>
            <div className="flex items-center justify-center py-1">
              <Radar size={180} />
            </div>
          </div>

          {/* Risk score */}
          <div className="col-span-3 space-y-3">
            <div className="rounded-xl border border-white/8 bg-black/30 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-white/60">Risk Score</p>
                <AlertTriangle size={14} className="text-danger" />
              </div>
              <p className="mt-1 font-mono text-3xl font-semibold text-white">
                87<span className="text-lg text-white/40">/100</span>
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-primary via-accent to-danger" />
              </div>
              <p className="mt-2 text-[11px] text-white/50">
                Restricted zone breach · confidence 96%
              </p>
            </div>
            <div className="rounded-xl border border-white/8 bg-black/30 p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs text-white/60">Evidence Queue</p>
                <Video size={14} className="text-accent" />
              </div>
              <div className="space-y-1.5">
                {[
                  { n: "INC-2891", t: "Video 04:22", s: "Encrypted" },
                  { n: "INC-2890", t: "Photo x3", s: "Archived" },
                  { n: "INC-2889", t: "GPS track", s: "Verified" },
                ].map((r) => (
                  <div key={r.n} className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-white/70">{r.n}</span>
                    <span className="text-white/50">{r.t}</span>
                    <span className="text-success">{r.s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="col-span-4 rounded-xl border border-white/8 bg-black/30 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-medium text-white/70">Incident Timeline · INC-2891</p>
              <Activity size={14} className="text-primary" />
            </div>
            <div className="space-y-2">
              {[
                { t: "03:21:08", e: "Radar contact acquired", c: "text-accent" },
                { t: "03:21:22", e: "Classified: DJI Mavic 3", c: "text-primary" },
                { t: "03:22:04", e: "Risk analysed · HIGH", c: "text-danger" },
                { t: "03:23:11", e: "Evidence capture started", c: "text-accent" },
              ].map((x) => (
                <div key={x.t} className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-white/40">{x.t}</span>
                  <span className={`h-1.5 w-1.5 rounded-full ${x.c === "text-danger" ? "bg-danger" : x.c === "text-accent" ? "bg-accent" : "bg-primary"}`} />
                  <span className="text-[11px] text-white/75">{x.e}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Protected site */}
          <div className="col-span-2 rounded-xl border border-white/8 bg-black/30 p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs text-white/60">Protected Sites</p>
              <MapPin size={14} className="text-accent" />
            </div>
            <p className="font-mono text-2xl text-white">14</p>
            <div className="mt-2 flex items-center gap-1 text-[11px] text-white/60">
              <ShieldCheck size={12} className="text-success" /> All secured
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="glass absolute -left-6 top-16 hidden rounded-xl px-3 py-2 shadow-xl lg:block float-slow">
        <div className="flex items-center gap-2 text-xs">
          <span className="h-2 w-2 rounded-full bg-danger pulse-dot" />
          <span className="text-white/80">Unauthorized drone detected</span>
        </div>
      </div>
      <div className="glass absolute -right-6 bottom-14 hidden rounded-xl px-3 py-2 shadow-xl lg:block float-slow" style={{ animationDelay: "1.5s" }}>
        <div className="flex items-center gap-2 text-xs">
          <ShieldCheck size={14} className="text-success" />
          <span className="text-white/80">Evidence chain verified</span>
        </div>
      </div>
    </div>
  );
}
