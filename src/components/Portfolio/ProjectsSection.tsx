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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden hover:shadow-glow transition-all duration-300 border-0 bg-gradient-card">
                {project.image && (
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300" />
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
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
          <h3 className="text-2xl font-bold text-center mb-8">Other Notable Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 hover:shadow-card transition-all duration-300 border-l-4 border-l-primary">
                  <div className="flex justify-between items-start mb-4">
                    <Folder className="h-8 w-8 text-primary" />
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
