import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { RegisterModal } from "@/components/landing/RegisterModal";
import {
  Hero, TrustedBy, Features, Workflow, Pricing, Security, Roles, Testimonials, FAQ, FinalCTA, Footer,
} from "@/components/landing/sections";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediCore HMS — Modern Hospital Management, Simplified" },
      { name: "description", content: "Multi-tenant Hospital Management System for hospitals, clinics, doctors, nurses, patients, and guardians. Secure, scalable EMR, scheduling, billing." },
      { property: "og:title", content: "MediCore HMS — Modern Hospital Management, Simplified" },
      { property: "og:description", content: "Secure multi-tenant HMS with EMR, scheduling, patient & guardian portals, and Stripe billing." },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const onRegister = () => setOpen(true);
  return (
    <div className="min-h-screen bg-background">
      <Navbar onRegister={onRegister} />
      <main>
        <Hero onRegister={onRegister} />
        <TrustedBy />
        <Features />
        <Workflow />
        <Pricing onRegister={onRegister} />
        <Security />
        <Roles />
        <Testimonials />
        <FAQ />
        <FinalCTA onRegister={onRegister} />
      </main>
      <Footer />
      <RegisterModal open={open} onOpenChange={setOpen} />
      <Toaster richColors position="top-right" />
    </div>
  );
}
