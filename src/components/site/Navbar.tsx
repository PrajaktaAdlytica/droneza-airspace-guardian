import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/products", label: "Products" },
  { to: "/solutions", label: "Solutions" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#08121D]/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-8" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-white/70 transition hover:text-white"
              activeProps={{ className: "text-sm text-white" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/sign-in"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Sign In
          </Link>
          <Link
            to="/request-demo"
            className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Request Demo
          </Link>
        </div>
        <button
          className="md:hidden text-white/80"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#08121D]/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm text-white/80 hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link
                to="/sign-in"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-md border border-white/10 px-4 py-2 text-center text-sm text-white/80"
              >
                Sign In
              </Link>
              <Link
                to="/request-demo"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
