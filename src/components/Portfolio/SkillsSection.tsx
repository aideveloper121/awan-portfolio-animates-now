import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Smartphone, 
  Brain, 
  Server, 
  Palette,
  Globe,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="h-8 w-8" />,
    skills: [
      { name: "HTML", level: 100 },
      { name: "CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 90 },
      { name: "Angular", level: 85 }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend Development",
    icon: <Server className="h-8 w-8" />,
    skills: [
      { name: "PHP Laravel", level: 90 },
      { name: "Java", level: 85 },
      { name: ".NET", level: 80 },
      { name: "Node.js", level: 85 }
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Database & Cloud",
    icon: <Database className="h-8 w-8" />,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase", level: 75 }
    ],
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-8 w-8" />,
    skills: [
      { name: "Flutter", level: 85 },
      { name: "React Native", level: 80 },
      { name: "Android", level: 75 }
    ],
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "AI & Modern Tech",
    icon: <Brain className="h-8 w-8" />,
    skills: [
      { name: "AI Agents", level: 80 },
      { name: "Machine Learning", level: 75 },
      { name: "Python", level: 85 },
      { name: "TensorFlow", level: 70 }
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Tools & Others",
    icon: <Zap className="h-8 w-8" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Linux", level: 80 }
    ],
    color: "from-indigo-500 to-blue-500"
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Code className="mr-2 h-4 w-4" />
            Technical Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Expertise & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -15, 
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="h-full perspective-1000"
            >
              <Card className="h-full hover:shadow-glow transition-all duration-500 border-0 bg-gradient-card backdrop-blur-sm shadow-elevation relative overflow-hidden group">
                {/* Animated Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardContent className="p-6 relative z-10">
                  <motion.div 
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white shadow-lg relative overflow-hidden`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: -100, opacity: 0 }}
                        whileHover={{ x: 100, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                      {category.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-semibold"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {category.title}
                    </motion.h3>
                  </motion.div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.15,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="space-y-3 p-3 rounded-lg hover:bg-muted/30 transition-all duration-300 cursor-pointer group/skill"
                      >
                        <div className="flex justify-between items-center">
                          <motion.span 
                            className="font-medium group-hover/skill:text-primary transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill.name}
                          </motion.span>
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ 
                              delay: categoryIndex * 0.1 + skillIndex * 0.15 + 0.3,
                              type: "spring",
                              stiffness: 200
                            }}
                            viewport={{ once: true }}
                          >
                            <Badge 
                              variant="secondary" 
                              className={`text-xs font-bold bg-gradient-to-r ${category.color} text-white group-hover/skill:shadow-glow transition-all duration-300`}
                            >
                              {skill.level}%
                            </Badge>
                          </motion.div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3 overflow-hidden relative">
                          <motion.div
                            initial={{ width: 0, opacity: 0.7 }}
                            whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.15 + 0.5,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className={`h-3 rounded-full bg-gradient-to-r ${category.color} relative overflow-hidden group-hover/skill:shadow-glow transition-all duration-300`}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: [-100, 200] }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                repeatDelay: 3,
                                ease: "easeInOut"
                              }}
                            />
                          </motion.div>
                          <motion.div
                            className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${category.color} opacity-30`}
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ 
                              duration: 0.8, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.15 + 0.3
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};