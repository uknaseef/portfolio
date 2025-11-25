import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Webandcrafts (WAC)",
    role: "Associate Flutter Developer",
    period: "Nov 2022 – Present",
    achievements: [
      "Built Joy Alukkas Exchange app (10,000+ users)",
      "Implemented multi-factor auth + AES-256 encryption",
      "Added AI features increasing engagement by 35%",
      "Reduced load time by 40% and development cycles by 20%",
    ],
  },
  {
    company: "Gedexo Technologies",
    role: "Flutter Developer",
    period: "Jun 2022 – Oct 2022",
    achievements: [
      "Implemented 30+ features & fixes",
      "Collaborated in a 3-person team",
    ],
  },
  {
    company: "Baabtra",
    role: "Flutter Developer Intern",
    period: "Jan 2022 – Jun 2022",
    achievements: [
      "Built 3 small apps showcasing UI/UX skill",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 px-6 relative" id="experience">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            <span className="neon-text">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10" />

                  {/* Content Card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                      index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="glass-card p-6 hover-lift group">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary mb-1">{exp.company}</h3>
                          <p className="text-foreground/80 font-medium mb-1">{exp.role}</p>
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-foreground/80 flex items-start gap-2">
                            <span className="text-secondary mt-1.5">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
