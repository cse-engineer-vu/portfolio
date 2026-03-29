import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ShoppingBag, Play, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ProjectCarousel } from "./ProjectCarousel";
import { FEATURED_PROJECTS, OTHER_PROJECTS, type Project } from "@/data/projects";

/* ─── Regular project card ─────────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_10px_40px_rgba(0,212,255,0.1)] flex flex-col h-full">
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {project.title}
            </a>
          </h3>
          <div className="flex gap-2 shrink-0">
            {project.appStore && (
              <a href={project.appStore} target="_blank" rel="noopener noreferrer" title="App Store"
                className="flex items-center gap-1 px-2.5 py-1.5 bg-secondary rounded-lg hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors text-xs font-medium">
                <ShoppingBag className="w-3.5 h-3.5" /><span>iOS</span>
              </a>
            )}
            {project.playStore && (
              <a href={project.playStore} target="_blank" rel="noopener noreferrer" title="Google Play"
                className="flex items-center gap-1 px-2.5 py-1.5 bg-secondary rounded-lg hover:bg-green-500/20 text-muted-foreground hover:text-green-400 transition-colors text-xs font-medium">
                <Play className="w-3.5 h-3.5" /><span>Android</span>
              </a>
            )}
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-lg hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="mb-4 flex-1 space-y-3">
          <div>
            <strong className="text-white text-sm block mb-1">Problem:</strong>
            <span className="text-sm text-muted-foreground">{project.problem}</span>
          </div>
          <div>
            <strong className="text-white text-sm block mb-1">Impact:</strong>
            <span className="text-sm text-primary font-medium">{project.impact}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
          {project.tech.map(tech => (
            <span key={tech} className="text-xs font-mono px-3 py-1 bg-secondary text-muted-foreground rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Selected / highlighted project card (6th grid slot) ──────────── */
function SelectedProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-full">
      {/* Label above the card */}
      {/* <div className="flex items-center gap-2 mb-3">
        <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
        <span className="text-xs font-semibold uppercase tracking-widest text-primary flex items-center gap-1.5">
          <Star className="w-3 h-3 fill-primary" />
          Currently Selected
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-primary/40 to-transparent" />
      </div> */}

      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="group bg-card border-2 border-primary/50 rounded-2xl overflow-hidden shadow-[0_0_32px_rgba(0,212,255,0.12)] flex flex-col flex-1"
        >
          <div className="relative h-52 overflow-hidden">
            <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* "Selected Project" badge */}
            <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-primary to-violet-500 rounded-full shadow-lg shadow-primary/30">
              <Star className="w-3 h-3 text-white fill-white" />
              <span className="text-xs font-bold text-white">Selected Project</span>
            </div>
          </div>

          <div className="p-8 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-bold text-primary">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {project.title}
                </a>
              </h3>
              <div className="flex gap-2 shrink-0">
                {project.appStore && (
                  <a href={project.appStore} target="_blank" rel="noopener noreferrer" title="App Store"
                    className="flex items-center gap-1 px-2.5 py-1.5 bg-secondary rounded-lg hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors text-xs font-medium">
                    <ShoppingBag className="w-3.5 h-3.5" /><span>iOS</span>
                  </a>
                )}
                {project.playStore && (
                  <a href={project.playStore} target="_blank" rel="noopener noreferrer" title="Google Play"
                    className="flex items-center gap-1 px-2.5 py-1.5 bg-secondary rounded-lg hover:bg-green-500/20 text-muted-foreground hover:text-green-400 transition-colors text-xs font-medium">
                    <Play className="w-3.5 h-3.5" /><span>Android</span>
                  </a>
                )}
                {project.portfolioLink && (
                  <a href={project.portfolioLink} target="_blank" rel="noopener noreferrer"
                    className="p-2 bg-secondary rounded-lg hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="mb-4 flex-1 space-y-3">
              <div>
                <strong className="text-white text-sm block mb-1">Problem:</strong>
                <span className="text-sm text-muted-foreground">{project.problem}</span>
              </div>
              <div>
                <strong className="text-white text-sm block mb-1">Impact:</strong>
                <span className="text-sm text-primary font-medium">{project.impact}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-primary/20">
              {project.tech.map(tech => (
                <span key={tech} className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary/80 rounded-full border border-primary/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─── Main section ──────────────────────────────────────────────────── */
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project>(OTHER_PROJECTS[0]);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world cross-platform applications I've built and shipped to production."
        />

        {/*
          CSS Grid layout:
          Desktop (lg): 2 columns
            Slots 1-5 → project cards
            Slot 6     → Selected Project card
            Slot 7     → Carousel (col-span-2, full width)
          Mobile/Tablet: 1 column, carousel stacks naturally at the end
        */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">

          {/* Slots 1-5: regular project cards */}
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

          {/* Slot 6: Selected Project card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <SelectedProjectCard project={selectedProject} />
          </motion.div>

          {/* Slot 7: Carousel — full width row (col-span-2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-colors"
          >
            <ProjectCarousel
              projects={OTHER_PROJECTS}
              selectedId={selectedProject.id}
              onSelect={setSelectedProject}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
