import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative" id="about">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center mb-8 md:mb-12 px-4">
            <span className="neon-text">About Me</span>
          </h2>

          <motion.div 
            className="glass-card p-6 md:p-8 lg:p-12 hover-lift"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center">
              Flutter Developer with 3+ years of experience specializing in secure authentication, 
              AI integrations, and high-performance cross-platform apps. Worked on multiple published 
              apps with 10,000+ users, improving performance, engagement, and development efficiency.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
