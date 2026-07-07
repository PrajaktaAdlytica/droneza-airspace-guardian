export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src="/droneza-logo.svg" alt="Droneza" className="h-full w-auto object-contain" />
    </div>
  );
}
