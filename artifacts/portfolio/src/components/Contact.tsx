import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-10 md:p-16 border-primary/20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            Open to senior Flutter engineering roles and exciting mobile projects. Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a 
              href="mailto:sojib.sarker@email.com"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
            
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold bg-secondary text-white border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              Connect
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">sojib.sarker@email.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
