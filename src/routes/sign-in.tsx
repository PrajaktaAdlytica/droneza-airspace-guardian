import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/sign-in")({
  head: () => ({
    meta: [
      { title: "Sign In — Droneza" },
      { name: "description", content: "Sign in to the Droneza operational platform." },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="mx-auto flex max-w-md flex-col items-center px-6 py-24">
        <Logo className="h-10" />
        <div className="mt-8 w-full glass-strong rounded-2xl p-8">
          <h1 className="text-2xl font-semibold text-white">Sign in</h1>
          <p className="mt-1 text-sm text-white/60">Enter your work email to access the ops centre.</p>
          {sent ? (
            <p className="mt-6 rounded-md border border-success/20 bg-success/10 p-4 text-sm text-success">
              Check your inbox — we've sent a secure sign-in link.
            </p>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-white/60">Work email</label>
                <input type="email" required placeholder="you@company.eu" className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary" />
              </div>
              <button type="submit" className="liquid-btn w-full">Send sign-in link</button>
              <div className="relative py-2 text-center text-[11px] uppercase tracking-widest text-white/40">
                <span className="relative bg-transparent px-2">or</span>
              </div>
              <button type="button" className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white hover:bg-white/10">
                Continue with SSO
              </button>
            </form>
          )}
        </div>
        <p className="mt-6 text-sm text-white/50">
          Don't have an account?{" "}
          <Link to="/request-demo" className="text-primary hover:text-accent">Request a demo</Link>
        </p>
      </section>
    </SiteLayout>
  );
}
