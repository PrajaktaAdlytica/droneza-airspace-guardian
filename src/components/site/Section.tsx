import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-24 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="mb-14 max-w-3xl">
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base text-white/60 md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
