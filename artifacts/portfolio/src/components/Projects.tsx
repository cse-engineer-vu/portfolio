import { motion } from "framer-motion";
import { ExternalLink, AppWindow } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const PROJECTS = [
  {
    title: "DryX Laundry",
    link: "https://dryx.ae/",
    appStore: "https://apps.apple.com/",
    playStore: "https://play.google.com/",
    description: "Premium dry cleaning & laundry service booking app with map-based location tracking.",
    problem: "Users lacked a seamless, real-time way to book laundry services with live tracking and secure payments.",
    tech: ["Flutter", "Dart", "Magnati Payment", "Apple Pay", "Google Maps SDK", "Wallet System"],
    impact: "Deployed to both iOS & Android. Integrated Magnati Secure Payment Gateway with Apple Pay and dynamic Wallet System.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=500&fit=crop"
  },
  {
    title: "OffTheBeatenTrack – UAE",
    link: "#",
    appStore: "https://apps.apple.com/",
    playStore: "https://play.google.com/",
    description: "Location-based event management application for Dubai with Stripe-gated access control.",
    problem: "200+ Dubai events needed a single, map-centric platform with subscription-based premium access.",
    tech: ["Flutter", "Google Maps SDK", "Stripe Subscriptions", "Firebase", "BLoC"],
    impact: "200+ events visualised on Google Map. Stripe subscription-based access control fully integrated.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop"
  },
  {
    title: "Cabby – Ride Tracking",
    link: "#",
    appStore: "https://apps.apple.com/",
    playStore: "https://play.google.com/",
    description: "Real-time ride tracking platform with dedicated customer and driver-side applications.",
    problem: "Riders and drivers needed a unified, reliable GPS-based tracking experience in real time.",
    tech: ["Flutter", "Google Maps GPS", "Real-time DB", "Firebase", "Provider"],
    impact: "Engineered both customer and driver apps. Implemented real-time Google GPS for precise ride tracking.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop"
  },
  {
    title: "noa.market",
    link: "#",
    appStore: "https://apps.apple.com/",
    playStore: "",
    description: "Real-time location-based e-commerce app integrated with supplier-side application and Stripe.",
    problem: "Buyers and suppliers needed a location-aware commerce experience with frictionless checkout.",
    tech: ["Flutter", "Stripe", "Firebase", "REST APIs", "BLoC"],
    impact: "Fully integrated with supplier application. Stripe payment gateway implemented end-to-end.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop"
  },
  {
    title: "Motion View App",
    link: "#",
    appStore: "https://apps.apple.com/",
    playStore: "https://play.google.com/",
    description: "Full-featured e-commerce application serving 10K+ active users with local payment gateway support.",
    problem: "Business needed a robust, scalable e-commerce app supporting local BD payment gateways.",
    tech: ["Flutter", "Firebase Auth", "bKash", "SSLCOMMERZ", "REST APIs (40+)"],
    impact: "40+ REST APIs across 35+ screens. Firebase Google & Facebook Auth. 10K+ users in PlayStore.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=500&fit=crop"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Real-world cross-platform applications I've built and shipped to production."
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
                    {project.link !== "#" ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    {project.appStore && (
                      <a href={project.appStore} target="_blank" rel="noopener noreferrer" 
                        className="p-2 bg-secondary rounded-lg hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                        title="App Store">
                        <AppWindow className="w-4 h-4" />
                      </a>
                    )}
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" 
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

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
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
