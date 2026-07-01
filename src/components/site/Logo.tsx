import logoAsset from "@/assets/droneza-logo.asset.json";

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoAsset.url} alt="Droneza" className="h-full w-auto object-contain" />
    </div>
  );
}
