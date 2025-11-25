import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 px-6 relative" id="contact">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            <span className="neon-text">Get In Touch</span>
          </h2>

          <div className="glass-card p-8 md:p-12 hover-lift">
            <div className="text-center mb-8">
              <p className="text-lg text-foreground/80 mb-8">
                Interested in working together? Let's connect and create something amazing!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:naseefuk.official@gmail.com"
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl hover:bg-primary/10 transition-colors group"
              >
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground/90">naseefuk.official@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918086810157"
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl hover:bg-secondary/10 transition-colors group"
              >
                <div className="p-3 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-foreground/90">+91-8086810157</p>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-6 border-t border-border/50">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 backdrop-blur-sm"
                asChild
              >
                <a href="https://github.com/naseefuk" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary/50 hover:bg-secondary/10 backdrop-blur-sm"
                asChild
              >
                <a href="https://linkedin.com/in/muhammednaseefuk" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="text-center mt-16 text-muted-foreground text-sm">
        <p>© 2024 Muhammed Naseef UK. Built with React, Framer Motion & Tailwind CSS.</p>
      </footer>
    </section>
  );
};

export default Contact;
