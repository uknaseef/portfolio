import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Smartphone, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Joy Alukkas Exchange",
    description: "Authentication (Biometrics, OTP, PIN)",
    stats: "10,000+ users",
    tech: ["Flutter", "Provider", "Firebase Auth"],
    gradient: "from-primary/20 via-accent/20 to-secondary/20",
    iosLink: "https://apps.apple.com/in/app/joyalukkas-exchange/id1479025554",
    androidLink: "https://play.google.com/store/apps/details?id=joyalukkas.app.webremit&pcampaignid=web_share",
  },
  {
    title: "Express Health",
    description: "Staff scheduling + job listings app",
    stats: "WebView integration + device optimization",
    tech: ["Flutter", "REST API"],
    gradient: "from-secondary/20 via-accent/20 to-primary/20",
    iosLink: "https://apps.apple.com/in/app/xpress-health/id1631544033",
    androidLink: "https://play.google.com/store/apps/details?id=com.xpress.health&pcampaignid=web_share",
  },
  {
    title: "Limoverse",
    description: "AI-driven workout & health metrics",
    stats: "Increased workout completion by 45%",
    tech: ["Flutter", "AI Integration", "Firebase"],
    gradient: "from-accent/20 via-primary/20 to-secondary/20",
    androidLink: "https://play.google.com/store/apps/details?id=com.app.limoverse&pcampaignid=web_share",
  },
  {
    title: "Short Vartha",
    description: "Firebase notifications",
    stats: "Boosted re-engagement by 28%",
    tech: ["Flutter", "FCM", "Firebase"],
    gradient: "from-secondary/20 via-primary/20 to-accent/20",
    iosLink: "https://apps.apple.com/in/app/short-vartha-malayalam-news/id6473996734",
    androidLink: "https://play.google.com/store/apps/details?id=com.shortvartha.app&pcampaignid=web_share",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-center mb-20 px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="neon-text">Featured Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  whileHover={{ 
                    y: -6,
                    scale: 1.01,
                    transition: { duration: 0.3, type: "spring", stiffness: 200 }
                  }}
                  className="glass-card p-6 md:p-8 group cursor-pointer relative overflow-hidden h-full"
                >
                  {/* Animated Gradient Overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 rounded-3xl`}
                    animate={hoveredIndex === index ? { 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-6">
                      <motion.div
                        whileHover={{ rotate: 180, scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all shadow-lg shrink-0"
                      >
                        <Smartphone className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-primary group-hover:text-secondary transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-foreground/80 mb-4 text-base md:text-lg font-medium leading-relaxed">
                      {project.description}
                    </p>
                    
                    <motion.p 
                      className="text-sm md:text-base text-secondary font-bold mb-6 flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <span className="inline-block w-2 h-2 bg-secondary rounded-full animate-pulse-slow" />
                      {project.stats}
                    </motion.p>

                    <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.15 + i * 0.05 }}
                          whileHover={{ scale: 1.05, y: -1 }}
                          className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-bold bg-muted/50 border border-border/50 rounded-full text-foreground/80 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all backdrop-blur-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* App Store Links */}
                    {(project.iosLink || project.androidLink) && (
                      <div className="flex flex-wrap gap-3">
                        {project.iosLink && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="group relative overflow-hidden border border-border/50 bg-muted/30 hover:bg-primary/10 hover:border-primary/50 text-foreground font-medium rounded-xl transition-all"
                              asChild
                            >
                              <a href={project.iosLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                <Apple className="w-4 h-4 mr-2" />
                                App Store
                              </a>
                            </Button>
                          </motion.div>
                        )}
                        {project.androidLink && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="group relative overflow-hidden border border-border/50 bg-muted/30 hover:bg-secondary/10 hover:border-secondary/50 text-foreground font-medium rounded-xl transition-all"
                              asChild
                            >
                              <a href={project.androidLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
                                </svg>
                                Play Store
                              </a>
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Enhanced Border Glow on Hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 blur-md" />
                    <div className="absolute inset-0 rounded-3xl border border-secondary/20" />
                  </div>

                  {/* Corner Accents */}
                  <motion.div 
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
