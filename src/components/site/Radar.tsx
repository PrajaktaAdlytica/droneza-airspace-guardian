export function Radar({ size = 240, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="rg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4FD1C5" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#4FD1C5" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="95" fill="url(#rg)" />
        {[20, 40, 60, 80, 95].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#4FD1C5" strokeOpacity="0.18" strokeWidth="0.6" />
        ))}
        <line x1="5" y1="100" x2="195" y2="100" stroke="#4FD1C5" strokeOpacity="0.15" strokeWidth="0.5" />
        <line x1="100" y1="5" x2="100" y2="195" stroke="#4FD1C5" strokeOpacity="0.15" strokeWidth="0.5" />
      </svg>
      <div className="radar-sweep absolute inset-0">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <defs>
            <linearGradient id="sw" x1="50%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#4FD1C5" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#4FD1C5" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M100 100 L195 100 A95 95 0 0 0 165 32 Z" fill="url(#sw)" />
        </svg>
      </div>
      {/* Blips */}
      <div className="absolute" style={{ left: "62%", top: "34%" }}>
        <span className="block h-2 w-2 rounded-full bg-danger pulse-dot" />
      </div>
      <div className="absolute" style={{ left: "40%", top: "58%" }}>
        <span className="block h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
      </div>
    </div>
  );
}
