import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, and real-time notifications.",
    image: project1,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    featured: true
  },
  {
    title: "Laravel CMS System",
    description: "Content Management System built with Laravel PHP framework. Includes role-based permissions, SEO optimization, and advanced content editing capabilities.",
    image: project2,
    technologies: ["Laravel", "PHP", "MySQL", "Vue.js", "Bootstrap"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    featured: true
  },
  {
    title: "AI Chatbot Assistant",
    description: "Intelligent chatbot using natural language processing and machine learning. Built with Python, TensorFlow, and integrated with multiple platforms.",
    image: project3,
    technologies: ["Python", "TensorFlow", "Flask", "NLP", "OpenAI"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    featured: true
  },
  {
    title: "Flutter Mobile App",
    description: "Cross-platform mobile application for task management with offline capabilities, push notifications, and cloud synchronization.",
    technologies: ["Flutter", "Dart", "Firebase", "SQLite"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    featured: false
  },
  {
    title: "Angular Dashboard",
    description: "Enterprise dashboard with real-time analytics, data visualization, and responsive design for business intelligence.",
    technologies: ["Angular", "TypeScript", "D3.js", "Chart.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    featured: false
  },
  {
    title: ".NET Web API",
    description: "RESTful API service with microservices architecture, JWT authentication, and comprehensive documentation.",
    technologies: [".NET Core", "C#", "SQL Server", "Docker"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    featured: false
  }
];

export const ProjectsSection = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl transform -translate-x-1/2" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl transform translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Folder className="mr-2 h-4 w-4" />
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my latest work and technical expertise across different technologies
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -20, 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="h-full perspective-1000"
            >
              <Card className="h-full overflow-hidden hover:shadow-glow transition-all duration-500 border-0 bg-gradient-card backdrop-blur-sm relative group">
                {project.image && (
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-primary"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Overlay gradient for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button 
                          variant="secondary" 
                          size="icon" 
                          className="h-8 w-8 glassmorphism hover:bg-primary hover:text-primary-foreground"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button 
                          variant="secondary" 
                          size="icon" 
                          className="h-8 w-8 glassmorphism hover:bg-primary hover:text-primary-foreground"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <motion.div 
                    className="flex justify-between items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.h3 
                      className="text-xl font-bold group-hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <motion.p 
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          delay: index * 0.2 + 0.7 + techIndex * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Other Notable Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="p-6 hover:shadow-elevation transition-all duration-500 border-l-4 border-l-primary hover:border-l-accent bg-gradient-card backdrop-blur-sm relative overflow-hidden group">
                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  
                  <motion.div 
                    className="flex justify-between items-start mb-4 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Folder className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </motion.div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary hover:text-primary-foreground">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary hover:text-primary-foreground">
                          <Github className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <motion.h4 
                    className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h4>
                  <motion.p 
                    className="text-muted-foreground text-sm mb-4 line-clamp-3 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-1 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          delay: index * 0.15 + 0.5 + techIndex * 0.1,
                          type: "spring",
                          stiffness: 300
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                    {project.technologies.length > 3 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          delay: index * 0.15 + 0.8,
                          type: "spring",
                          stiffness: 300
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      </motion.div>
                    )}
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
