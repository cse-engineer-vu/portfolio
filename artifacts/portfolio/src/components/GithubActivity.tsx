import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useMemo } from "react";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["", "Mon", "", "Wed", "", "Fri", ""];

function generateContributions() {
  const weeks = 52;
  const days = 7;
  const data: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    const isActiveWeek = Math.random() > 0.15;
    for (let d = 0; d < days; d++) {
      if (!isActiveWeek || Math.random() < 0.25) {
        week.push(0);
      } else {
        const r = Math.random();
        if (r < 0.4) week.push(1);
        else if (r < 0.65) week.push(2);
        else if (r < 0.85) week.push(3);
        else week.push(4);
      }
    }
    data.push(week);
  }
  return data;
}

const LEVEL_COLORS = [
  "bg-secondary border-border",
  "bg-primary/30 border-primary/20",
  "bg-primary/55 border-primary/40",
  "bg-primary/80 border-primary/60",
  "bg-primary border-primary",
];

export function GithubActivity() {
  const contributions = useMemo(() => generateContributions(), []);

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="GitHub Activity"
          subtitle="Consistent open source contributions and code shipping."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 md:p-10 mt-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5 text-primary" />
              <span className="font-semibold text-white">@sojibsjoy</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Less</span>
              {LEVEL_COLORS.map((cls, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm border ${cls}`} />
              ))}
              <span>More</span>
            </div>
          </div>

          {/* Contribution graph */}
          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              <div className="flex gap-1">
                {/* Day labels */}
                <div className="flex flex-col gap-1 mr-1 pt-5">
                  {DAYS.map((day, i) => (
                    <div key={i} className="h-3 w-6 text-[9px] text-muted-foreground flex items-center">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Weeks column */}
                <div className="flex-1">
                  {/* Month labels row */}
                  <div className="flex mb-1.5">
                    {contributions.map((_, wi) => {
                      const weeksPerMonth = 52 / 12;
                      const monthIndex = Math.floor(wi / weeksPerMonth);
                      const isFirstWeekOfMonth = Math.floor(wi / weeksPerMonth) > Math.floor((wi - 1) / weeksPerMonth) || wi === 0;
                      const today = new Date();
                      const monthDate = new Date(today.getFullYear(), today.getMonth() - (11 - monthIndex), 1);
                      return (
                        <div key={wi} className="flex-1 min-w-0">
                          {isFirstWeekOfMonth && (
                            <span className="text-[9px] text-muted-foreground whitespace-nowrap">
                              {MONTHS[monthDate.getMonth()]}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Week columns */}
                  <div className="flex gap-1">
                    {contributions.map((week, wi) => (
                      <div key={wi} className="flex flex-col gap-1">
                        {week.map((level, di) => (
                          <div
                            key={di}
                            title={`${level} contributions`}
                            className={`w-3 h-3 rounded-sm border transition-transform hover:scale-125 cursor-pointer ${LEVEL_COLORS[level]}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://github.com/sojibsjoy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-violet-500 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              Visit GitHub Profile
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
