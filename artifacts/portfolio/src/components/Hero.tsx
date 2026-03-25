import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, ChevronDown, CreditCard, Code2 } from "lucide-react";

const floatAnimation = {
  y: [0, -10, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
};

const floatAnimationDelayed = {
  y: [0, -8, 0],
  transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt=""
          className="w-full h-full object-cover opacity-15 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Smooth transition into About section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/20 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Open to New Opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Senior <span className="text-gradient">Flutter</span><br />Engineer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Building scalable cross-platform mobile applications for Android, iOS & Web with{" "}
              <strong className="text-white">6+ years of expertise</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a href="#projects"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-violet-500 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Projects <ArrowRight className="w-5 h-5" />
              </a>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <a href="#contact"
                  className="flex-1 sm:flex-none px-8 py-4 rounded-xl font-semibold bg-secondary text-white border border-border hover:bg-secondary/80 hover:border-primary/50 transition-all duration-300 text-center"
                >Contact Me</a>
                <a href="https://github.com/sojibsjoy" target="_blank" rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-secondary text-white border border-border hover:bg-secondary/80 hover:text-primary transition-all duration-300" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/mdsojibsarker/" target="_blank" rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-secondary text-white border border-border hover:bg-secondary/80 hover:text-primary transition-all duration-300" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-violet-500/10 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 rounded-full p-2 bg-gradient-to-br from-primary via-violet-600 to-transparent">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.png`}
                  alt="Md. Sojib Sarker"
                  className="w-full h-full object-cover rounded-full bg-card shadow-2xl shadow-black/50"
                />
              </div>

              {/* Bottom-left: Payment Gateway Expert */}
              <motion.div
                animate={floatAnimation}
                className="absolute -bottom-6 -left-10 md:-left-16 bg-card/80 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 z-10"
                style={{ boxShadow: "0 0 30px rgba(0,212,255,0.08), 0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/30 to-violet-500/20 flex items-center justify-center shrink-0">
                  <CreditCard className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground leading-none mb-0.5">Certified</div>
                  <div className="text-sm font-semibold text-white leading-tight">Payment Gateway<br />Expert</div>
                </div>
              </motion.div>

              {/* Top-right: Flutter & Payment Systems Engineer */}
              <motion.div
                animate={floatAnimationDelayed}
                className="absolute -top-6 right-0 md:-right-4 bg-card/80 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 z-10"
                style={{ boxShadow: "0 0 30px rgba(139,92,246,0.08), 0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500/30 to-primary/20 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground leading-none mb-0.5">Specialist</div>
                  <div className="text-sm font-semibold text-white leading-tight">Cross-Platform<br />App Specialist</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
