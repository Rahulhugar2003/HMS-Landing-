import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import heroImg from "@/assets/hero-dashboard.jpg";
import shieldImg from "@/assets/security-shield.jpg";
import {
  FileText, CalendarDays, Users, Shield, Building2, CreditCard, Bell, Lock,
  HeartPulse, UserCog, Stethoscope, Baby, UserRound, CheckCircle2, ArrowRight,
  KeyRound, Database, ScrollText, Mail, ShieldCheck, Sparkles, Activity,
  Twitter, Linkedin, Github,
} from "lucide-react";

/* HERO */
export function Hero({ onRegister }: { onRegister: () => void }) {
  const bullets = [
    { icon: FileText, label: "Electronic Medical Records" },
    { icon: UserRound, label: "Patient Portal Access" },
    { icon: CalendarDays, label: "Appointment Scheduling" },
    { icon: Lock, label: "Role-Based Access Control" },
    { icon: Building2, label: "Secure Multi-Tenant Architecture" },
    { icon: CreditCard, label: "Billing & Subscription Management" },
  ];
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute top-40 -right-20 w-[28rem] h-[28rem] rounded-full bg-secondary blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="animate-fade-up">
          <Badge variant="secondary" className="mb-5 bg-secondary text-primary-deep border border-primary/20 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Trusted multi-tenant HMS platform
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Modern Hospital Management,{" "}
            <span className="text-gradient">Simplified.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            A complete multi-tenant Hospital Management System for hospitals, clinics, doctors,
            nurses, patients, and guardians — secure, scalable, and built for modern healthcare operations.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
            {bullets.map((b) => (
              <li key={b.label} className="flex items-center gap-2.5 text-sm font-medium text-foreground/80">
                <span className="w-7 h-7 rounded-lg bg-secondary text-primary grid place-items-center">
                  <b.icon className="w-4 h-4" />
                </span>
                {b.label}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" className="bg-gradient-primary shadow-elegant hover:shadow-glow transition-shadow">
              Start Free Demo <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={onRegister} className="border-primary/30 hover:bg-secondary">
              Register Your Hospital
            </Button>
          </div>
        </div>
        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -inset-6 bg-gradient-primary rounded-3xl blur-2xl opacity-25" />
          <img
            src={heroImg}
            alt="Hospital management dashboard preview"
            width={1536}
            height={1152}
            className="relative rounded-2xl shadow-elegant border border-white/60"
          />
          <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 shadow-elegant hidden sm:flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center">
              <HeartPulse className="w-5 h-5 text-primary-foreground" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Patients managed</p>
              <p className="text-sm font-semibold">2.4M+ records</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* TRUSTED BY */
export function TrustedBy() {
  const logos = ["Apollo", "Fortis", "Manipal", "Aster", "Rainbow Hospitals"];
  return (
    <section className="py-14 border-y border-border/60 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground tracking-wider uppercase">
          Trusted by Hospitals & Clinics
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {logos.map((l) => (
            <div key={l} className="flex items-center gap-2 text-muted-foreground/70 hover:text-foreground transition-colors">
              <HeartPulse className="w-5 h-5" />
              <span className="text-xl font-semibold tracking-tight">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FEATURES */
export function Features() {
  const items = [
    { icon: Building2, title: "Multi-Tenant Hospital Portals", desc: "Each hospital gets its own dedicated secure portal URL." },
    { icon: FileText, title: "EMR Management", desc: "Digital patient medical records with secure access." },
    { icon: CalendarDays, title: "Appointment Scheduling", desc: "Manage doctors, nurses, and patient bookings." },
    { icon: UserRound, title: "Patient Portal", desc: "Patients can securely view records, prescriptions, and appointments." },
    { icon: Baby, title: "Guardian Access", desc: "Family members can securely access linked patient records." },
    { icon: Users, title: "Staff Management", desc: "Create and manage doctors, nurses, and hospital staff." },
    { icon: CreditCard, title: "Billing & Subscription", desc: "Stripe-powered subscription and invoice management." },
    { icon: Bell, title: "Notifications", desc: "Email and in-app alerts for appointments, reports, prescriptions." },
    { icon: Shield, title: "Security & Compliance", desc: "JWT auth, role permissions, tenant isolation." },
  ];
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-4 bg-secondary text-primary-deep border border-primary/20">Features</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Everything Your Hospital Needs <span className="text-gradient">in One Platform</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From EMR to billing — every workflow your team needs, beautifully unified.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <Card key={it.title} className="group p-7 rounded-2xl border-border/60 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 bg-card">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center mb-5 shadow-soft group-hover:shadow-glow transition-shadow">
                <it.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* WORKFLOW */
export function Workflow() {
  const steps = [
    { icon: Building2, label: "Register Your Hospital" },
    { icon: Sparkles, label: "Choose Subscription Plan" },
    { icon: CreditCard, label: "Secure Stripe Payment" },
    { icon: KeyRound, label: "Portal Auto-Created" },
    { icon: Mail, label: "Welcome Email & Credentials" },
    { icon: Users, label: "Setup Staff & Departments" },
    { icon: HeartPulse, label: "Start Managing Patients" },
  ];
  return (
    <section className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-4 bg-card border border-primary/20 text-primary-deep">Workflow</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">How HMS Works</h2>
          <p className="mt-4 text-muted-foreground text-lg">From sign-up to first patient, in under 10 minutes.</p>
        </div>
        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid lg:grid-cols-7 gap-6">
            {steps.map((s, i) => (
              <div key={s.label} className="relative flex lg:flex-col items-center gap-4 lg:gap-3 text-center">
                <div className="relative w-14 h-14 rounded-2xl bg-card border border-primary/20 shadow-soft grid place-items-center shrink-0">
                  <s.icon className="w-6 h-6 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold grid place-items-center shadow-soft">
                    {i + 1}
                  </span>
                </div>
                <p className="text-sm font-medium leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* PRICING */
export function Pricing({ onRegister }: { onRegister: () => void }) {
  const plans = [
    {
      name: "Starter", price: "₹4,999", popular: false,
      features: ["Up to 50 staff", "100 GB storage", "Full EMR", "Patient Portal", "Email Support"],
    },
    {
      name: "Professional", price: "₹9,999", popular: true,
      features: ["Up to 200 staff", "1 TB storage", "Advanced EMR", "Guardian Access", "Analytics", "Priority Support"],
    },
    {
      name: "Enterprise", price: "₹24,999", popular: false,
      features: ["Unlimited staff", "Unlimited storage", "Custom Integrations", "Dedicated Account Manager", "24/7 Support"],
    },
  ];
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-4 bg-secondary text-primary-deep border border-primary/20">Pricing</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Simple Transparent Pricing</h2>
          <p className="mt-4 text-muted-foreground text-lg">Choose a plan that scales with your hospital.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-4 items-stretch">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={`relative p-8 rounded-3xl border transition-all ${
                p.popular
                  ? "border-primary/40 shadow-elegant lg:scale-105 bg-card"
                  : "border-border/60 shadow-soft hover:shadow-elegant bg-card"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-primary text-primary-foreground shadow-soft">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{p.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={onRegister}
                className={`w-full mt-8 ${p.popular ? "bg-gradient-primary shadow-sog" : ""}`}
                variant={p.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SECURITY */
export function Security() {
  const items = [
    { icon: KeyRound, label: "JWT Authentication" },
    { icon: Database, label: "Tenant Data Isolation" },
    { icon: Lock, label: "Role-Based Access Control" },
    { icon: CreditCard, label: "Secure Stripe Billing" },
    { icon: ScrollText, label: "Audit Logs" },
    { icon: ShieldCheck, label: "Password Reset Enforcement" },
  ];
  return (
    <section id="security" className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Badge variant="secondary" className="mb-4 bg-card border border-primary/20 text-primary-deep">Security</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Built for Enterprise <span className="text-gradient">Healthcare Security</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Healthcare-grade protection out of the box. Every hospital's data stays isolated, encrypted, and audited.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {items.map((it) => (
              <div key={it.label} className="flex items-center gap-3 p-3 rounded-xl glass shadow-soft">
                <span className="w-9 h-9 rounded-lg bg-gradient-primary grid place-items-center">
                  <it.icon className="w-4 h-4 text-primary-foreground" />
                </span>
                <span className="text-sm font-medium">{it.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-primary blur-3xl opacity-20 rounded-full" />
          <img src={shieldImg} alt="Security illustration" width={1024} height={1024} loading="lazy" className="relative rounded-3xl shadow-elegant" />
        </div>
      </div>
    </section>
  );
}

/* ROLES */
export function Roles() {
  const roles = [
    { id: "admin", label: "Hospital Admin", icon: UserCog, desc: "Manage staff, billing, analytics, and full hospital operations from one dashboard.", points: ["Staff & department management", "Subscription & invoices", "Hospital-wide analytics"] },
    { id: "doctor", label: "Doctor", icon: Stethoscope, desc: "Access patient EMRs, write prescriptions, and manage appointments in seconds.", points: ["Patient EMR access", "E-prescriptions", "Appointment queue"] },
    { id: "nurse", label: "Nurse", icon: HeartPulse, desc: "Record vitals, manage patient notes, and coordinate with doctors seamlessly.", points: ["Vitals tracking", "Patient notes", "Doctor handoffs"] },
    { id: "patient", label: "Patient", icon: UserRound, desc: "View records, prescriptions, lab reports, and book appointments anytime.", points: ["Medical records", "Prescriptions & reports", "Online appointments"] },
    { id: "guardian", label: "Guardian", icon: Baby, desc: "Securely access linked patient records for children or elderly family members.", points: ["Linked patient access", "Appointment notifications", "Care coordination"] },
  ];
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-4 bg-secondary text-primary-deep border border-primary/20">Roles</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Built for every role in your hospital</h2>
          <p className="mt-4 text-muted-foreground text-lg">Tailored experiences for every user — from admin to guardian.</p>
        </div>
        <Tabs defaultValue="admin" className="mt-12">
          <TabsList className="w-full flex flex-wrap justify-center h-auto bg-secondary/60 p-2 rounded-2xl border border-border/60">
            {roles.map((r) => (
              <TabsTrigger key={r.id} value={r.id} className="data-[state=active]:bg-card data-[state=active]:shadow-soft rounded-xl px-4 py-2">
                <r.icon className="w-4 h-4 mr-2" /> {r.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {roles.map((r) => (
            <TabsContent key={r.id} value={r.id} className="mt-8">
              <Card className="p-8 lg:p-10 rounded-3xl border-border/60 shadow-soft grid lg:grid-cols-2 gap-8 items-center bg-card">
                <div>
                  <span className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-soft mb-5">
                    <r.icon className="w-7 h-7 text-primary-foreground" />
                  </span>
                  <h3 className="text-2xl font-bold">{r.label}</h3>
                  <p className="mt-3 text-muted-foreground">{r.desc}</p>
                  <ul className="mt-5 space-y-2.5">
                    {r.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-gradient-hero p-6 border border-border/60 min-h-[260px] flex items-center justify-center">
                  <div className="glass rounded-2xl p-5 w-full max-w-sm shadow-elegant">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-semibold text-sm">{r.label} Dashboard</p>
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                    <div className="space-y-2.5">
                      {r.points.map((p, i) => (
                        <div key={p} className="flex items-center justify-between p-2.5 rounded-lg bg-card/80">
                          <span className="text-xs font-medium">{p}</span>
                          <span className="text-xs text-primary font-semibold">{(i + 1) * 7}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

/* TESTIMONIALS */
export function Testimonials() {
  const items = [
    { name: "Dr. Priya Sharma", role: "Director, MedLife Hospitals", quote: "Onboarding was painless. Our staff was managing patients in our own portal within an hour." },
    { name: "Rakesh Iyer", role: "CIO, Care Plus Group", quote: "Tenant isolation and audit logs give us the compliance confidence we need across 14 facilities." },
    { name: "Dr. Aman Verma", role: "Chief of Medicine", quote: "EMR workflows are 3x faster than our legacy system. Doctors actually enjoy using it." },
    { name: "Sneha Reddy", role: "Patient Experience Lead", quote: "The patient & guardian portals dramatically reduced our front-desk load and improved satisfaction." },
  ];
  return (
    <section className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-4 bg-card border border-primary/20 text-primary-deep">Testimonials</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Loved by hospital teams</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((t) => (
            <Card key={t.name} className="p-6 rounded-2xl border-border/60 shadow-soft hover:shadow-elegant transition-shadow bg-card">
              <div className="flex gap-1 mb-3 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Sparkles key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-semibold text-sm">
                  {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FAQ */
export function FAQ() {
  const items = [
    { q: "How does hospital onboarding work?", a: "Register your hospital, choose a plan, complete Stripe checkout — your dedicated portal and admin credentials are emailed within minutes." },
    { q: "Do we get our own portal URL?", a: "Yes. Each hospital gets a dedicated subdomain (e.g. apollo.medicorehms.com) with fully isolated data and branding." },
    { q: "Is payment secure?", a: "All payments are processed via Stripe with PCI-DSS compliance. We never store card information." },
    { q: "Can patients access records?", a: "Yes — patients log into their own portal to view records, prescriptions, lab reports, and book appointments." },
    { q: "Can guardians access family records?", a: "Guardians can be securely linked to patient accounts (e.g. parents to children) with explicit permissions and audit trails." },
    { q: "Is data isolated between hospitals?", a: "Absolutely. Multi-tenant architecture enforces strict row-level and database-level isolation between every hospital." },
  ];
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4 bg-secondary text-primary-deep border border-primary/20">FAQ</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Frequently asked questions</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border/60 rounded-2xl px-5 bg-card shadow-soft">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{it.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* FINAL CTA */
export function FinalCTA({ onRegister }: { onRegister: () => void }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto rounded-[2rem] bg-gradient-cta p-12 lg:p-16 text-center relative overflow-hidden shadow-elegant">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground">
            Ready to Modernize Your Hospital Operations?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-xl mx-auto">
            Start your hospital's digital transformation today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button onClick={onRegister} size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90 shadow-elegant">
              Register Your Hospital <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-primary-foreground hover:bg-white/10">
              Book Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* FOOTER */
export function Footer() {
  const cols = [
    { title: "Product", links: ["Features", "Pricing", "Security", "Integrations"] },
    { title: "Company", links: ["About", "Contact", "Careers", "Blog"] },
    { title: "Legal", links: ["Terms", "Privacy", "Compliance", "Support"] },
  ];
  return (
    <footer id="contact" className="border-t border-border/60 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center shadow-soft">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </span>
            MediCore<span className="text-primary">HMS</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Multi-tenant Hospital Management System for modern healthcare operations.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <Mail className="inline w-4 h-4 mr-1.5 -mt-0.5" /> support@medicorehms.com
          </p>
          <div className="mt-4 flex gap-3">
            {[Twitter, Linkedin, Github].map((Ic, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg border border-border bg-card hover:bg-secondary grid place-items-center transition-colors">
                <Ic className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-semibold text-sm mb-4">{c.title}</p>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60 py-5">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MediCore HMS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}