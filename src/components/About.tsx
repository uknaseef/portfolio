import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Shield } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "3+ Years",
    description: "Flutter Experience",
    color: "primary",
  },
  {
    icon: Shield,
    title: "10,000+",
    description: "Active Users",
    color: "secondary",
  },
  {
    icon: Rocket,
    title: "35%",
    description: "Engagement Boost",
    color: "accent",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-center mb-8 px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="neon-text">About Me</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="glass-card p-8 md:p-12 hover-lift group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl" />
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed relative z-10 font-medium">
                Flutter Developer with <span className="text-primary font-bold">3+ years of experience</span> specializing in{" "}
                <span className="text-secondary font-bold">secure authentication</span>,{" "}
                <span className="text-accent font-bold">AI integrations</span>, and high-performance cross-platform apps. 
                Worked on multiple published apps with <span className="text-primary font-bold">10,000+ users</span>, 
                improving performance, engagement, and development efficiency.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="glass-card p-6 md:p-8 text-center group cursor-pointer relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-2xl bg-${item.color}/10 mb-4 group-hover:shadow-lg transition-all`}
                  >
                    <item.icon className={`w-8 h-8 md:w-10 md:h-10 text-${item.color}`} />
                  </motion.div>
                  
                  <motion.h3 
                    className={`text-3xl md:text-4xl font-black mb-2 text-${item.color}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <p className="text-sm md:text-base text-muted-foreground font-medium">
                    {item.description}
                  </p>
                </div>

                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-${item.color}/20 rounded-3xl -z-10`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
