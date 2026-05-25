import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface Props { open: boolean; onOpenChange: (v: boolean) => void }

export function RegisterModal({ open, onOpenChange }: Props) {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast.success("Registration received", { description: "We'll be in touch shortly to provision your hospital portal." });
    }, 900);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Register Your Hospital</DialogTitle>
          <DialogDescription>Get your dedicated, secure HMS portal in minutes.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="hname">Hospital name</Label>
              <Input id="hname" required placeholder="Apollo Hospitals" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="sub">Subdomain</Label>
              <Input id="sub" required placeholder="apollo" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="admin">Admin full name</Label>
            <Input id="admin" required placeholder="Dr. Priya Sharma" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" type="email" required placeholder="admin@apollo.com" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" required placeholder="+91 90000 00000" />
            </div>
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-gradient-primary shadow-soft">
            {loading ? "Creating portal..." : "Continue to Plan Selection"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">Secure Stripe checkout · No card required for demo</p>
        </form>
      </DialogContent>
    </Dialog>
  );
}