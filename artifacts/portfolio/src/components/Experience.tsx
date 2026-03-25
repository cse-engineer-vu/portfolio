import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const EXPERIENCE = [
  {
    company: "Avaton",
    link: "https://avaton.io/",
    role: "Senior Flutter Engineer",
    duration: "Jan 2022 – Present",
    responsibilities: "Led Flutter development for luxury hospitality platform, architected Clean Architecture solution, implemented CI/CD pipeline, mentored junior developers, integrated complex third-party APIs.",
    achievements: "35% conversion improvement, reduced build time by 60%."
  },
  {
    company: "TechNova Solutions",
    link: "#",
    role: "Flutter Developer",
    duration: "Mar 2020 – Dec 2021",
    responsibilities: "Developed cross-platform mobile apps for e-commerce clients, implemented state management with Bloc, integrated payment gateways and Firebase.",
    achievements: "Delivered 5 production apps, 100k+ combined downloads."
  },
  {
    company: "AppCraft Studio",
    link: "#",
    role: "Junior Flutter Developer",
    duration: "Jun 2018 – Feb 2020",
    responsibilities: "Built UI components following design specifications, integrated REST APIs, fixed bugs and performance issues.",
    achievements: "Contributed to 3 shipped apps, improved app performance by 25%."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Work Experience" 
          centered
        />

        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline Node */}
                <div className="absolute left-[-4px] md:left-[28px] top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></div>
                
                <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                        {exp.role}
                      </h3>
                      <div className="text-lg font-medium text-primary mt-1">
                        {exp.link !== "#" ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-lg w-fit">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.responsibilities}
                  </p>
                  
                  <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 flex gap-3">
                    <Briefcase className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-primary mr-1">Key Achievement:</span>
                      {exp.achievements}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
