import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 95 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Provider", level: 90 },
      { name: "Riverpod", level: 85 },
      { name: "BLoC", level: 80 },
      { name: "GetX", level: 85 },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "REST APIs", level: 90 },
      { name: "Firebase", level: 90 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Android Studio", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 85 },
      { name: "Git", level: 90 },
      { name: "Xcode", level: 85 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center mb-12 md:mb-16 px-4">
            <span className="neon-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-5 md:p-6 hover-lift"
              >
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">{category.title}</h3>
                
                <div className="space-y-3 md:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm md:text-base text-foreground/90 font-medium">{skill.name}</span>
                        <span className="text-sm md:text-base text-secondary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.2, delay: categoryIndex * 0.1 + skillIndex * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
