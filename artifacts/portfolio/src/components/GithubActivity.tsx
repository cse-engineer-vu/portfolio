import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function GithubActivity() {
  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading 
          title="GitHub Activity" 
          subtitle="Open source contributions and consistent code shipping."
          centered
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-4 md:p-8 mt-12 overflow-x-auto"
        >
          {/* GitHub Contribution Graph */}
          <div className="mb-10 min-w-[700px]">
            <img 
              src="https://ghchart.rshah.org/00d4ff/sojibsjoy" 
              alt="Sojib's GitHub Contribution Chart" 
              className="w-full h-auto rounded opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* GitHub Stats Card */}
          <div className="flex justify-center mb-10">
            <img 
              src="https://github-readme-stats.vercel.app/api?username=sojibsjoy&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000" 
              alt="GitHub Stats" 
              className="h-48 drop-shadow-xl"
            />
          </div>

          <a 
            href="https://github.com/sojibsjoy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-secondary text-white border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            Visit GitHub Profile
            <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
