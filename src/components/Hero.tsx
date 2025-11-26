import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Sparkles } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 animated-gradient"
          style={{ opacity }}
        />
        
        {/* Floating Orbs with Parallax */}
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
          className="absolute top-1/4 left-1/4 w-72 md:w-[500px] h-72 md:h-[500px] rounded-full blur-3xl opacity-30"
        >
          <div className="w-full h-full bg-primary/40 animate-float" />
        </motion.div>
        
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 500], [0, -80]) }}
          className="absolute bottom-1/4 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] rounded-full blur-3xl opacity-30"
        >
          <div className="w-full h-full bg-secondary/40 animate-float-slow" />
        </motion.div>
        
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 500], [0, 120]) }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl opacity-20"
        >
          <div className="w-full h-full bg-accent/50 animate-glow-pulse" />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Content with Parallax */}
      <motion.div style={{ y }} className="container relative z-10 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              <div className="absolute inset-0 blur-xl bg-primary/50 animate-pulse-slow" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black mb-8 leading-tight px-4">
              <motion.span 
                className="neon-text inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Muhammed Naseef UK
              </motion.span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/90 mb-6 px-4 leading-relaxed"
          >
            <motion.span 
              className="inline-block"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(59,130,246,0.3)",
                  "0 0 40px rgba(168,85,247,0.3)",
                  "0 0 20px rgba(59,130,246,0.3)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Flutter Developer | Secure Auth | AI Integrations | UI/UX Focused
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto px-6 font-medium"
          >
            I build fast, secure, beautiful cross-platform apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 md:gap-6 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white font-bold px-8 md:px-10 py-6 md:py-7 text-base md:text-lg rounded-2xl shadow-xl transition-all"
                asChild
              >
                <a href="/Muhammed_Naseef_-_CV.pdf" download="Muhammed_Naseef_CV.pdf">
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity glow-primary" />
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-2 border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary text-foreground font-semibold px-8 md:px-10 py-6 md:py-7 text-base md:text-lg rounded-2xl shadow-lg transition-all"
                asChild
              >
                <a href="https://github.com/uknaseef" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    GitHub
                  </span>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity glow-soft" />
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-2 border-secondary/50 bg-background/50 backdrop-blur-sm hover:bg-secondary/10 hover:border-secondary text-foreground font-semibold px-8 md:px-10 py-6 md:py-7 text-base md:text-lg rounded-2xl shadow-lg transition-all"
                asChild
              >
                <a href="https://www.linkedin.com/in/muhammednaseefuk8086/" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </span>
                  <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity glow-secondary" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ opacity }}
        className="absolute bottom-20 md:bottom-16 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-8 h-14 border-2 border-primary/50 rounded-full p-2 backdrop-blur-sm bg-background/20">
            <motion.div 
              className="w-2 h-3 bg-primary rounded-full mx-auto"
              animate={{ y: [0, 20, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full animate-pulse-slow" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
