import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const EXPERIENCE = [
  {
    company: "Avaton",
    link: "https://avaton.io/",
    role: "Senior Software Engineer",
    duration: "Nov 2025 – Present",
    location: "Dhaka, Bangladesh",
    workType: "Remote",
    responsibilities: "Working on an Enterprise Product 'Eat Good'. Supporting and mentoring team members through complex technical challenges.",
    achievements: "Spearheading enterprise-level Flutter product development from ground up."
  },
  {
    company: "Royex Technologies",
    link: "https://royex.net/",
    role: "Senior Software Engineer",
    duration: "Nov 2024 – Nov 2025",
    location: "Dubai, UAE",
    workType: "Remote",
    responsibilities: "Successfully developed and deployed the DryX – Laundry Service Booking App to both iOS and Android platforms. Integrated the Magnati Secure Payment Gateway with Apple Pay and implemented a dynamic Wallet System and Map-based Location Tracking.",
    achievements: "End-to-end delivery of DryX on both stores with Magnati Payment Gateway + Apple Pay integration."
  },
  {
    company: "Hi-Tech Bangla",
    link: "#",
    role: "Payment Gateway Expert",
    duration: "Jun 2023 – Oct 2024",
    location: "Texas, USA",
    workType: "Remote",
    responsibilities: "Led development of high-performance mobile applications for the Islamic Digital Lane platform. Architected Subscription & In-app Purchase features for Google Pay & Apple Pay. Managed all in-app purchase maintenance using RevenueCat and led cross-functional teams as Team Lead.",
    achievements: "Successfully led deployment of 9 projects to PlayStore & AppStore."
  },
  {
    company: "Royex Technologies",
    link: "https://royex.net/",
    role: "Software Engineer",
    duration: "Jun 2022 – May 2023",
    location: "Dubai, UAE",
    workType: "Remote",
    responsibilities: "Developed and maintained robust cross-platform mobile applications, successfully deploying 8+ projects to the PlayStore & AppStore. Functioned as a Team Lead, actively mentoring junior developers and solving complex technical problems.",
    achievements: "8+ production apps shipped; mentored junior team members across multiple client projects."
  },
  {
    company: "Motion View",
    link: "#",
    role: "Software Developer",
    duration: "Dec 2021 – May 2022",
    location: "Dhaka, Bangladesh",
    workType: "On-site",
    responsibilities: "Developed and maintained a high-scale business application serving 10K+ users in the PlayStore. Integrated multiple local payment gateways including bKash, Nagad, Upay, and SSLCOMMERZ.",
    achievements: "Scaled app to 10K+ active users with seamless multi-gateway payment integration."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" centered />

        <div className="relative mt-16">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

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
                <div className="absolute left-[-4px] md:left-[28px] top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20" />

                <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {exp.role}
                        </h3>
                        {/* Work type badge */}
                        {exp.workType === "Remote" ? (
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/25">
                            Remote
                          </span>
                        ) : (
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/25">
                            On-site
                          </span>
                        )}
                      </div>
                      <div className="text-lg font-medium text-primary">
                        {exp.link !== "#" ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-lg w-fit shrink-0">
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
