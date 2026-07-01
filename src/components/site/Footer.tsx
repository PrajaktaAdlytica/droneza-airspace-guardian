import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Products",
    links: [
      { to: "/products/log", label: "Droneza Log" },
      { to: "/products/risk", label: "Droneza Risk" },
      { to: "/products/evidence", label: "Droneza Evidence" },
      { to: "/products", label: "Overview" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { to: "/solutions", label: "Airports" },
      { to: "/solutions", label: "Ports" },
      { to: "/solutions", label: "Municipalities" },
      { to: "/solutions", label: "Critical Infrastructure" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/about", label: "About" },
      { to: "/pricing", label: "Pricing" },
      { to: "/request-demo", label: "Request Demo" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/about", label: "Privacy" },
      { to: "/about", label: "Terms" },
      { to: "/about", label: "GDPR" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/5 bg-[#070f18]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo className="h-9" />
            <p className="mt-4 max-w-sm text-sm text-white/60">
              European Airspace Intelligence Platform. Detect, assess and document drone incidents in one operational workflow.
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-white/40">Contact</p>
            <p className="mt-1 text-sm text-white/70">Warsaw, Poland · hello@droneza.eu</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Droneza sp. z o.o. All rights reserved.</p>
          <p>Built in Europe · EU27 Ready · GDPR Compliant</p>
        </div>
      </div>
    </footer>
  );
}
