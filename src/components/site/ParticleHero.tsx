import { useEffect, useRef } from "react";

/**
 * Premium airspace-telemetry particle hero.
 * - Two depth layers of particles (far/near) for parallax feel.
 * - Line links between neighbours (data-mesh look).
 * - Occasional radar-signal pulses (expanding rings).
 * - Soft cyan/blue radial glows layered behind the canvas.
 * - Subtle SVG noise overlay for a filmic finish.
 */
export function ParticleHero({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0,
      h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
      depth: number; // 0 far -> 1 near
      hue: number; // 190 cyan .. 220 blue
    };
    type Pulse = { x: number; y: number; r: number; max: number; a: number };

    let ps: P[] = [];
    let pulses: Pulse[] = [];
    let lastPulse = 0;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(120, Math.floor((w * h) / 13000));
      ps = Array.from({ length: count }, () => {
        const depth = Math.random();
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * (0.15 + depth * 0.35),
          vy: (Math.random() - 0.5) * (0.15 + depth * 0.35),
          r: 0.4 + depth * 1.6,
          a: 0.2 + depth * 0.6,
          depth,
          hue: 190 + Math.random() * 30,
        };
      });
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const spawnPulse = () => {
      const src = ps[Math.floor(Math.random() * ps.length)];
      if (!src) return;
      pulses.push({
        x: src.x,
        y: src.y,
        r: 2,
        max: rand(90, 180),
        a: 0.35,
      });
    };

    const tick = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      // Faint scanline gradient (very subtle)
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "rgba(59,130,246,0.04)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Update + draw links
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        for (let j = i + 1; j < ps.length; j++) {
          const q = ps[j];
          const dx = p.x - q.x,
            dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          const LINK = 130;
          if (d2 < LINK * LINK) {
            const dist = Math.sqrt(d2);
            const a = (1 - dist / LINK) * 0.22 * ((p.depth + q.depth) / 2);
            ctx.strokeStyle = `rgba(79, 209, 197, ${a})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles with glow
      for (const p of ps) {
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        glow.addColorStop(0, `hsla(${p.hue}, 90%, 70%, ${p.a})`);
        glow.addColorStop(1, `hsla(${p.hue}, 90%, 70%, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${p.hue}, 95%, 85%, ${Math.min(1, p.a + 0.25)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Radar pulses
      if (t - lastPulse > 1400) {
        spawnPulse();
        lastPulse = t;
      }
      pulses = pulses.filter((pu) => pu.a > 0.01);
      for (const pu of pulses) {
        pu.r += 0.7;
        pu.a *= 0.985;
        ctx.strokeStyle = `rgba(79, 209, 197, ${pu.a})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pu.x, pu.y, pu.r, 0, Math.PI * 2);
        ctx.stroke();
        if (pu.r > pu.max) pu.a = 0;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {/* Layered radial glows for depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.28),transparent_70%)] blur-2xl" />
        <div className="absolute right-[-10%] top-[10%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(79,209,197,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.18),transparent_70%)] blur-3xl" />
      </div>
      <canvas ref={ref} className="relative h-full w-full" />
      {/* Filmic noise + vignette */}
      <div className="noise-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(8,18,29,0.9)_100%)]" />
    </div>
  );
}
