import { motion } from "framer-motion";
import { Layers, Cpu, Zap, GitMerge, Database, Smartphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const BRING_TO_TEAM = [
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: "Scalable Flutter Architecture",
    description: "Design systems and modular codebases built for growth, using Clean Architecture and dependency injection."
  },
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "Clean Architecture & SOLID",
    description: "Separation of concerns, testability, and maintainability — SOLID principles applied consistently."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Performance Optimization",
    description: "Smooth 60fps animations, efficient widget rebuilds, and reduced app sizes for better user experience."
  },
  {
    icon: <GitMerge className="w-6 h-6 text-primary" />,
    title: "CI/CD Automation",
    description: "Streamlined deployments using Fastlane, GitHub Actions, TestFlight, and automated release pipelines."
  },
  {
    icon: <Database className="w-6 h-6 text-primary" />,
    title: "Firebase & API Integration",
    description: "Deep expertise with Firebase Auth, Cloud Messaging, Real-time DB, REST APIs, and payment gateways."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Cross-Platform Expertise",
    description: "Production apps shipped to both PlayStore & AppStore — 17+ projects across Android and iOS."
  }
];

function DevIllustrationCard() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-violet-600/5 blur-2xl scale-110 -z-10" />

      {/* Gradient border card */}
      <div className="relative w-full h-full rounded-3xl p-px bg-gradient-to-br from-primary/40 via-violet-500/20 to-transparent">
        <div className="w-full h-full rounded-3xl bg-card/70 backdrop-blur-xl flex flex-col items-center justify-center gap-8 p-10">

          {/* Code brackets icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
              <rect width="120" height="120" rx="28" fill="url(#bg)" fillOpacity="0.15"/>
              {/* Left bracket */}
              <path d="M38 30 L20 60 L38 90" stroke="url(#grad1)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Right bracket */}
              <path d="M82 30 L100 60 L82 90" stroke="url(#grad2)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Slash */}
              <path d="M66 25 L54 95" stroke="url(#grad3)" strokeWidth="5" strokeLinecap="round"/>
              <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00d4ff"/>
                  <stop offset="1" stopColor="#7c3aed"/>
                </linearGradient>
                <linearGradient id="grad1" x1="20" y1="30" x2="38" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00d4ff"/>
                  <stop offset="1" stopColor="#7c3aed"/>
                </linearGradient>
                <linearGradient id="grad2" x1="82" y1="30" x2="100" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed"/>
                  <stop offset="1" stopColor="#ec4899"/>
                </linearGradient>
                <linearGradient id="grad3" x1="54" y1="25" x2="66" y2="95" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00d4ff"/>
                  <stop offset="1" stopColor="#ec4899"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Tags */}
          <div className="flex flex-col gap-3 w-full">
            {[
              { label: "Flutter SDK", color: "text-primary", bg: "bg-primary/10 border-primary/20" },
              { label: "Clean Architecture", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
              { label: "17+ Apps Shipped", color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20" },
            ].map((tag) => (
              <div key={tag.label} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border ${tag.bg}`}>
                <span className={`text-xs font-mono font-semibold ${tag.color}`}>{tag.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Smooth entry from hero */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building seamless mobile experiences that solve real-world problems."
        />

        {/* Top row: text left, illustration right */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I've led engineering across startups and scale-ups in Dubai and Bangladesh — shipping <strong className="text-white">17+ apps</strong> to the PlayStore and AppStore, integrating complex payment gateways (Stripe, Magnati, Apple Pay, RevenueCat), and building enterprise-grade platforms used by thousands of users daily.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I hold a BSc in Computer Science from Varendra University with a thesis in Deep Learning (Glaucoma Detection). Beyond engineering, I'm a competitive programmer — 1st place winner at the VUPC Juniors Programming Contest and multiple podium finishes across national contests.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "6+", label: "Years Experience" },
                { value: "17+", label: "Apps Shipped" },
                { value: "10K+", label: "Active Users" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/40 transition-colors">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Developer illustration card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="min-h-[320px]"
          >
            <DevIllustrationCard />
          </motion.div>
        </div>

        {/* What I bring — full width below */}
        <div>
          <h3 className="text-2xl font-bold mb-8">What I bring to a team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRING_TO_TEAM.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card p-6 rounded-2xl group hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-violet-500/10 flex items-center justify-center mb-4 group-hover:from-primary/30 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
