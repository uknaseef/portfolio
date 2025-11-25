import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-48 md:w-72 h-48 md:h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight px-4">
              <span className="neon-text">Muhammed Naseef UK</span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 mb-4 px-4"
          >
            Flutter Developer | Secure Auth | AI Integrations | UI/UX Focused
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto px-6"
          >
            I build fast, secure, beautiful cross-platform apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover:scale-105 transition-all text-white font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              asChild
            >
              <a href="/Muhammed_Naseef_-_CV.pdf" download="Muhammed_Naseef_CV.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-sm px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all"
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
              className="border-secondary/50 hover:bg-secondary/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-sm px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all"
              asChild
            >
              <a href="https://www.linkedin.com/in/muhammednaseefuk8086/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1 animate-pulse">
          <div className="w-1 h-2 bg-primary rounded-full mx-auto animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
