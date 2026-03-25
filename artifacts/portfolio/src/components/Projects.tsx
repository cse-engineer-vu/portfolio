import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const PROJECTS = [
  {
    title: "DryX Laundry",
    link: "https://dryx.ae/",
    description: "On-demand laundry & dry cleaning service platform connecting users with providers.",
    problem: "Fragmented laundry booking experience with no real-time tracking.",
    tech: ["Flutter", "Firebase", "Bloc", "REST APIs", "Google Maps SDK"],
    impact: "50k+ downloads, 4.8 star rating, streamlined operations for 200+ providers.",
    // landing page hero abstract blue water waves laundry clean
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=500&fit=crop"
  },
  {
    title: "Avaton Luxury App",
    link: "https://avaton.io/",
    description: "Premium hospitality booking platform connecting guests with luxury villas.",
    problem: "Complex booking flows and multi-property management needed seamless UX.",
    tech: ["Flutter", "Clean Architecture", "Riverpod", "Stripe API"],
    impact: "Increased booking conversion by 35%, serving 5-star luxury properties.",
    // landing page hero luxury resort pool modern architecture
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=500&fit=crop"
  },
  {
    title: "FinTrack Pro",
    link: "#",
    description: "Personal finance management and dynamic expense tracking app.",
    problem: "Users struggled to track multi-currency expenses and investments securely.",
    tech: ["Flutter", "Bloc", "SQLite", "Plaid API", "Charts"],
    impact: "30k+ active users, 4.7 app store rating, featured in Top Finance Apps.",
    // landing page hero digital finance chart abstract
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
  },
  {
    title: "DeliverEase",
    link: "#",
    description: "Real-time delivery tracking and logistics management platform.",
    problem: "Disconnected rider, customer, and admin experiences causing severe delays.",
    tech: ["Flutter", "Firebase DB", "Google Maps", "WebSockets"],
    impact: "40% reduction in delivery disputes, 98% on-time delivery rate.",
    // landing page hero abstract maps navigation pins
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Real-world applications I've built and scaled to thousands of users."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,212,255,0.1)] flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.link !== "#" ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <div className="flex gap-3">
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-white text-muted-foreground transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-lg">{project.description}</p>
                
                <div className="mb-6 flex-1">
                  <div className="mb-3">
                    <strong className="text-white block mb-1">The Problem:</strong>
                    <span className="text-sm text-muted-foreground">{project.problem}</span>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">The Impact:</strong>
                    <span className="text-sm text-primary font-medium">{project.impact}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-mono px-3 py-1 bg-secondary text-muted-foreground rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
