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
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-glow transition-all duration-300 border-0 bg-gradient-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3 
                            }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
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