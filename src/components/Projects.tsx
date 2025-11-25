import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Joy Alukkas Exchange",
    description: "Authentication (Biometrics, OTP, PIN)",
    stats: "10,000+ users",
    tech: ["Flutter", "Provider", "Firebase Auth"],
    gradient: "from-primary/20 to-secondary/20",
    link: "https://play.google.com/store/apps/details?id=joyalukkas.app.webremit&pcampaignid=web_share",
  },
  {
    title: "Express Health",
    description: "Staff scheduling + job listings app",
    stats: "WebView integration + device optimization",
    tech: ["Flutter", "REST API"],
    gradient: "from-secondary/20 to-primary/20",
    link: "https://play.google.com/store/apps/details?id=com.xpress.health&pcampaignid=web_share",
  },
  {
    title: "Limoverse",
    description: "AI-driven workout & health metrics",
    stats: "Increased workout completion by 45%",
    tech: ["Flutter", "AI Integration", "Firebase"],
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "Short Vartha",
    description: "Firebase notifications",
    stats: "Boosted re-engagement by 28%",
    tech: ["Flutter", "FCM", "Firebase"],
    gradient: "from-secondary/20 to-primary/20",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 px-6 relative" id="projects">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            <span className="neon-text">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  rotateX: 2,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                className="glass-card p-5 md:p-6 group cursor-pointer relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="transition-all hover:scale-110 hover:rotate-12"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    )}
                  </div>

                  <p className="text-foreground/80 mb-3 text-sm md:text-base">{project.description}</p>
                  <p className="text-xs md:text-sm text-secondary font-semibold mb-4">{project.stats}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 md:px-3 py-1 text-xs font-medium bg-muted/50 border border-border rounded-full text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
