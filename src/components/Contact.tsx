import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative" id="contact">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center mb-12 md:mb-16 px-4">
            <span className="neon-text">Get In Touch</span>
          </h2>

          <motion.div 
            className="glass-card p-6 md:p-8 lg:p-12 hover-lift"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-6 md:mb-8">
              <p className="text-base md:text-lg text-foreground/80 mb-6 md:mb-8">
                Interested in working together? Let's connect and create something amazing!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <motion.a
                href="mailto:naseefuk.official@gmail.com"
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl hover:bg-primary/10 transition-all group"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-xs md:text-sm font-medium text-foreground/90 break-all">naseefuk.official@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+918086810157"
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl hover:bg-secondary/10 transition-all group"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-xs md:text-sm font-medium text-foreground/90">+91-8086810157</p>
                </div>
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-6 border-t border-border/50">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-sm transition-all"
                asChild
              >
                <a href="https://github.com/uknaseef" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary/50 hover:bg-secondary/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-sm transition-all"
                asChild
              >
                <a href="https://www.linkedin.com/in/muhammednaseefuk8086/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <footer className="text-center mt-12 md:mt-16 text-muted-foreground text-xs md:text-sm px-4">
        <p>© 2024 Muhammed Naseef UK. Built with React, Framer Motion & Tailwind CSS.</p>
      </footer>
    </section>
  );
};

export default Contact;
