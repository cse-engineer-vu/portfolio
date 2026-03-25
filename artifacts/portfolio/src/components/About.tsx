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

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building seamless mobile experiences that solve real-world problems."
        />

        {/* Top row: text + profile photo card */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-xl leading-relaxed text-foreground">
              Senior Software Engineer specializing in Flutter with <span className="text-primary font-semibold">6+ years</span> of experience building production-grade cross-platform applications for Android, iOS, and Web.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've led engineering across startups and scale-ups in Dubai and Bangladesh — shipping <strong className="text-white">17+ apps</strong> to the PlayStore and AppStore, integrating complex payment gateways (Stripe, Magnati, Apple Pay, RevenueCat), and building enterprise-grade platforms used by thousands of users daily.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I hold a BSc in Computer Science from Varendra University with a thesis in Deep Learning. Beyond engineering, I'm a competitive programmer — 1st place winner at the VUPC Juniors Programming Contest and multiple podium finishes across national contests.
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

          {/* Profile photo card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-80 lg:w-80 lg:h-96">
              {/* Gradient border card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-violet-600/20 to-transparent p-px">
                <div className="w-full h-full rounded-3xl bg-card overflow-hidden backdrop-blur-xl">
                  <img
                    src={`${import.meta.env.BASE_URL}images/profile.png`}
                    alt="Md. Sojib Sarker"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-violet-600/5 blur-xl -z-10 scale-110" />

              {/* Location badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-white">Rajshahi, Bangladesh</span>
              </div>
            </div>
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
