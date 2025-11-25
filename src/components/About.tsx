import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 px-6 relative" id="about">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
            <span className="neon-text">About Me</span>
          </h2>

          <div className="glass-card p-8 md:p-12 hover-lift">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              <span className="text-primary font-semibold">Flutter Developer</span> with{" "}
              <span className="text-secondary font-semibold">3+ years of experience</span> specializing in{" "}
              <span className="font-semibold">secure authentication</span>,{" "}
              <span className="font-semibold">AI integrations</span>, and{" "}
              <span className="font-semibold">high-performance cross-platform apps</span>. 
              Worked on multiple published apps with <span className="text-primary font-semibold">10,000+ users</span>, 
              improving performance, engagement, and development efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
