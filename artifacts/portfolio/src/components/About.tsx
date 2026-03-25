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

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 prose prose-invert prose-lg"
          >
            <p className="text-xl leading-relaxed text-foreground mb-6">
              Senior Software Engineer specializing in Flutter with 6+ years of experience building production-grade cross-platform applications for Android, iOS, and Web.
            </p>
            <p className="text-muted-foreground mb-6">
              I've led engineering across startups and scale-ups in Dubai and Bangladesh — shipping 17+ apps to the PlayStore and AppStore, integrating complex payment gateways (Stripe, Magnati, Apple Pay, RevenueCat), and building enterprise-grade platforms used by thousands of users daily.
            </p>
            <p className="text-muted-foreground">
              I hold a BSc in Computer Science from Varendra University with a thesis in Deep Learning (Glaucoma Detection). Beyond engineering, I'm a competitive programmer — a 1st place winner at the VUPC Juniors Programming Contest and multiple podium finishes across national and regional contests.
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold mb-8">What I bring to a team</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {BRING_TO_TEAM.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl glow-effect group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
