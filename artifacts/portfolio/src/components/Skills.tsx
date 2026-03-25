import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const SKILL_CATEGORIES = [
  {
    name: "Languages & Frameworks",
    skills: ["Flutter", "Dart", "Java", "Swift"]
  },
  {
    name: "State Management",
    skills: ["BLoC", "Cubit", "Provider", "GetX", "Riverpod"]
  },
  {
    name: "Architecture & Patterns",
    skills: ["Clean Architecture", "MVVM", "SOLID Principles", "OOP", "Dependency Injection", "Method Channel"]
  },
  {
    name: "Firebase & Backend",
    skills: ["Firebase Auth", "Cloud Messaging", "Real-time Database", "RESTful APIs", "MySQL"]
  },
  {
    name: "Payment Gateways",
    skills: ["Stripe", "Google Pay", "Apple Pay", "RevenueCat", "Magnati", "SSLCOMMERZ"]
  },
  {
    name: "Tools & DevOps",
    skills: ["Git", "Android Studio", "Xcode", "TestFlight", "AppStore Connect", "CocoaPods", "Gradle", "Fastlane"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="My toolkit for building robust, scalable cross-platform mobile applications."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-white">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-secondary text-primary-foreground font-medium text-sm border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
