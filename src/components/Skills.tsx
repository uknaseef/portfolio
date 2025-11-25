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
    <section className="py-24 px-6 relative" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            <span className="neon-text">Skills & Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass-card p-6 hover-lift"
              >
                <h3 className="text-xl font-bold text-primary mb-6">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground/90 font-medium">{skill.name}</span>
                        <span className="text-secondary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                    </div>
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
