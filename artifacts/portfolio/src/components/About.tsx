import { motion } from "framer-motion";
import { Layers, Cpu, Zap, GitMerge, Database, Smartphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const BRING_TO_TEAM = [
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: "Scalable Architecture",
    description: "Design systems and modular codebases built for growth and massive scale."
  },
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "Clean Architecture",
    description: "Separation of concerns, testability, and maintainability adhering to SOLID principles."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Performance Optimization",
    description: "Ensuring 60fps animations, reduced bundle sizes, and highly efficient rebuilds."
  },
  {
    icon: <GitMerge className="w-6 h-6 text-primary" />,
    title: "CI/CD Automation",
    description: "Streamlining deployments with Fastlane, GitHub Actions, and automated release pipelines."
  },
  {
    icon: <Database className="w-6 h-6 text-primary" />,
    title: "Backend Integration",
    description: "Deep expertise connecting apps to Firebase, REST, GraphQL APIs, and WebSockets."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Cross-Platform",
    description: "Delivering unified production experiences across Android, iOS, and Flutter Web."
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
              I am a Mobile Engineering expert specializing in Flutter. With over 6 years of experience, I've built production-grade cross-platform apps for Android, iOS, and Web.
            </p>
            <p className="text-muted-foreground mb-6">
              I'm deeply passionate about clean architecture, performance optimization, and creating scalable mobile solutions. Throughout my career, I've led the development of multiple high-impact consumer applications serving hundreds of thousands of users.
            </p>
            <p className="text-muted-foreground">
              Beyond just writing code, I am a strong advocate for SOLID principles, test-driven development, and mentoring teams to elevate the overall engineering culture.
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
