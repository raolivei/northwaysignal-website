export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-8 h-8">
        {/* Signal bars - representing infrastructure/signal strength */}
        <div className="absolute bottom-0 left-0 w-1.5 h-2 bg-accent/40 rounded-sm" />
        <div className="absolute bottom-0 left-[7px] w-1.5 h-3.5 bg-accent/60 rounded-sm" />
        <div className="absolute bottom-0 left-[14px] w-1.5 h-5 bg-accent/80 rounded-sm" />
        <div className="absolute bottom-0 left-[21px] w-1.5 h-7 bg-accent rounded-sm" />
      </div>
      <span className="font-display font-semibold text-lg tracking-tight text-foreground">
        Northway Signal
      </span>
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-8 h-8 ${className}`}>
      <div className="absolute bottom-0 left-0 w-1.5 h-2 bg-accent/40 rounded-sm" />
      <div className="absolute bottom-0 left-[7px] w-1.5 h-3.5 bg-accent/60 rounded-sm" />
      <div className="absolute bottom-0 left-[14px] w-1.5 h-5 bg-accent/80 rounded-sm" />
      <div className="absolute bottom-0 left-[21px] w-1.5 h-7 bg-accent rounded-sm" />
    </div>
  );
}
