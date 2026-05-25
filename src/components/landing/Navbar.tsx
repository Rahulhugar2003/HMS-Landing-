import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Activity, Menu, X } from "lucide-react";

interface Props {
  onRegister: () => void;
}

export function Navbar({ onRegister }: Props) {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#security" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center shadow-soft">
            <Activity className="w-5 h-5 text-primary-foreground" />
          </span>
          <span className="tracking-tight">MediCore<span className="text-primary">HMS</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Login</Button>
          <Button onClick={onRegister} size="sm" className="bg-gradient-primary hover:opacity-95 shadow-soft">
            Register Your Hospital
          </Button>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-lg px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium py-2">{l.label}</a>
          ))}
          <Button variant="outline" size="sm">Login</Button>
          <Button onClick={() => { setOpen(false); onRegister(); }} size="sm" className="bg-gradient-primary">Register Your Hospital</Button>
        </div>
      )}
    </header>
  );
}