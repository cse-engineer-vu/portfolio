import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: "Email",
    value: "cse.engineer.vu@gmail.com",
    href: "mailto:cse.engineer.vu@gmail.com",
    gradient: "from-primary/20 to-cyan-500/10",
    iconColor: "text-primary",
    border: "hover:border-primary/50",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "mdsojibsarker",
    href: "https://www.linkedin.com/in/mdsojibsarker/",
    gradient: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
    border: "hover:border-blue-400/50",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "sojibsjoy",
    href: "https://github.com/sojibsjoy",
    gradient: "from-violet-500/20 to-violet-600/10",
    iconColor: "text-violet-400",
    border: "hover:border-violet-400/50",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Open to Opportunities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Let's Build Something{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #ec4899 100%)" }}
            >
              Exceptional
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-14 max-w-xl mx-auto leading-relaxed">
            Open to senior Flutter engineering roles and exciting mobile projects. Reach out through any of the channels below.
          </p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {CONTACT_CARDS.map((card, i) => (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("mailto") ? undefined : "_blank"}
                rel={card.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative bg-card border border-border ${card.border} rounded-2xl p-6 text-left transition-all duration-300 overflow-hidden`}
              >
                {/* Card gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <div className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">{card.title}</div>
                  <div className="text-sm font-semibold text-white break-all leading-snug">{card.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA button */}
          <motion.a
            href="mailto:cse.engineer.vu@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -2, scale: 1.02 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-white text-lg shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)" }}
          >
            <Send className="w-5 h-5" />
            Send a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
