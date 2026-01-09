import { motion } from "framer-motion";
import { Building2, CheckCircle2, Cloud, Code2, Cpu, FileCheck, Globe, Mail, Scale, Server, ShieldCheck, Terminal, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo, LogoMark } from "@/components/Logo";
import heroBg from "@assets/generated_images/abstract_network_architecture_lines_on_deep_green_background.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/20 selection:text-accent overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" data-testid="link-logo">
            <Logo />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors" data-testid="link-services">Services</a>
            <a href="#engagement" className="hover:text-foreground transition-colors" data-testid="link-engagement">Engagement</a>
            <a href="#compliance" className="hover:text-foreground transition-colors" data-testid="link-compliance">Compliance</a>
            <a href="#security" className="hover:text-foreground transition-colors" data-testid="link-security">Security</a>
          </div>
          <Button variant="outline" className="hidden md:flex border-white/10 hover:bg-white/5 hover:text-foreground text-xs uppercase tracking-wider font-semibold h-9 px-4" data-testid="button-contact-nav">
            Contact
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/90 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-20" />
          <img 
            src={heroBg} 
            alt="Abstract Architecture" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>

        <div className="container mx-auto px-6 relative z-30">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-accent/90 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              System Architecture & Advisory
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] text-foreground" data-testid="text-hero-title">
              High-leverage cloud consulting, <br />
              <span className="text-muted-foreground">built for scale.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-description">
              Northway Signal provides specialized support in cloud infrastructure, platform reliability, and large-scale systems operations. We work with technology organizations that require dependable execution, clear accountability, and minimal friction.
            </motion.p>

            <motion.div variants={fadeIn} className="pt-8">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-medium rounded-full px-8 h-12 text-base" data-testid="button-hero-cta">
                Get in touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Services</span>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6" data-testid="text-services-title">
              Engineering Services
            </h2>
            <p className="text-muted-foreground">
              Services are delivered under clearly defined scopes and integrate with existing client engineering teams and workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ServiceCard 
              icon={<Cloud className="w-6 h-6" />}
              title="Cloud Infrastructure"
              description="Cloud infrastructure and platform engineering for modern, distributed systems."
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Reliability & Observability"
              description="Reliability, observability, and monitoring systems that keep operations running smoothly."
            />
            <ServiceCard 
              icon={<Terminal className="w-6 h-6" />}
              title="Deployment Automation"
              description="Deployment automation and systems tooling for consistent, repeatable operations."
            />
            <ServiceCard 
              icon={<Code2 className="w-6 h-6" />}
              title="Infrastructure Modernization"
              description="Infrastructure modernization and migration initiatives for legacy systems."
            />
            <ServiceCard 
              icon={<Zap className="w-6 h-6" />}
              title="Performance Optimization"
              description="Operational stability and performance optimization for production workloads."
            />
            <ServiceCard 
              icon={<Server className="w-6 h-6" />}
              title="Platform Engineering"
              description="Internal developer platforms that accelerate delivery and reduce friction."
            />
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section id="engagement" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Engagement Model</span>
              <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6" data-testid="text-engagement-title">
                Independent Services Vendor
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Clients contract directly with Northway Signal LLC, maintaining a clean and straightforward U.S. vendor relationship.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <EngagementCard 
                icon={<CheckCircle2 className="w-5 h-5" />}
                title="Direct Services Relationship"
                description="Direct services-for-consideration relationship with defined statements of work and deliverables."
              />
              <EngagementCard 
                icon={<FileCheck className="w-5 h-5" />}
                title="No Employment Relationship"
                description="No employment, staffing, or labor relationship. No operational or managerial control over client teams."
              />
              <EngagementCard 
                icon={<Scale className="w-5 h-5" />}
                title="Clear Scope Definition"
                description="Defined statements of work with clear deliverables and measurable outcomes."
              />
              <EngagementCard 
                icon={<Users className="w-5 h-5" />}
                title="Seamless Integration"
                description="Services integrate with existing client engineering teams and workflows."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Structure */}
      <section id="compliance" className="py-24 md:py-32 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Compliance & Structure</span>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6" data-testid="text-compliance-title">
                Reduce Legal, Tax & Operational Complexity
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All contractual, tax, and compliance responsibilities are handled by Northway Signal LLC. This structure is designed to reduce complexity for clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <ComplianceItem text="U.S.-based contracting entity" />
              <ComplianceItem text="Standard enterprise documentation (W-9, NDAs, MSAs, SOWs)" />
              <ComplianceItem text="Invoicing in USD" />
              <ComplianceItem text="Clear separation between client operations and service delivery" />
            </div>
          </div>
        </div>
      </section>

      {/* Security & Confidentiality */}
      <section id="security" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Security & Confidentiality</span>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6" data-testid="text-security-title">
                Industry-Standard Security Practices
              </h2>
              <p className="text-muted-foreground">
                Security practices are adapted to meet client-specific requirements and controls.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <SecurityItem text="Client confidentiality and non-disclosure agreements" />
              <SecurityItem text="Secure access controls aligned with client policies" />
              <SecurityItem text="Responsible data handling and least-privilege access" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Clients</span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-8" data-testid="text-clients-title">
              Organizations Running Complex Systems
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Engagements prioritize long-term reliability, clarity of scope, and execution quality.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <ClientBadge>Technology Companies</ClientBadge>
              <ClientBadge>Infrastructure & Platform Teams</ClientBadge>
              <ClientBadge>Production Systems at Scale</ClientBadge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-8" data-testid="text-cta-title">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            For general inquiries or vendor onboarding discussions:
          </p>
          <a 
            href="mailto:contact@northwaysignal.com" 
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-full px-10 h-14 text-lg shadow-[0_0_30px_-10px_rgba(232,106,69,0.5)] transition-colors"
            data-testid="button-email-cta"
          >
            <Mail className="w-5 h-5" />
            contact@northwaysignal.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          <div className="text-sm text-muted-foreground/60">
            <p>© {new Date().getFullYear()} Northway Signal LLC · Independent engineering services provider</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-colors duration-300" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-accent mb-4 border border-white/5">
          {icon}
        </div>
        <CardTitle className="font-display text-xl text-foreground font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function EngagementCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-colors" data-testid={`card-engagement-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-display text-lg font-medium text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ComplianceItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5">
      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
      <span className="text-sm text-foreground/90">{text}</span>
    </div>
  );
}

function SecurityItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5">
      <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
      <span className="text-sm text-foreground/90">{text}</span>
    </div>
  );
}

function ClientBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-foreground/80">
      {children}
    </span>
  );
}

