import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-background">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background Image with Advanced Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/90" />
        <div className="absolute inset-0 bg-gradient-hero opacity-25" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 border border-primary/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-16 h-16 bg-accent/10 transform rotate-45"
          animate={{ rotate: 405, y: [-10, 10, -10] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-12 h-12 border-2 border-primary/30"
          animate={{ rotate: -360, x: [0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-primary font-medium tracking-wide"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent animate-pulse-glow relative"
          >
            <span className="relative inline-block">
              {"Mubashir Awan".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.6 + index * 0.1, 
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="inline-block hover:scale-110 transition-transform duration-200"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl md:text-4xl font-semibold text-foreground"
          >
            Software Engineer & Full-Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions with cutting-edge technologies. 
            Specializing in web development, mobile apps, AI agents, and modern frameworks.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-hero transition-all duration-500 shadow-glow relative overflow-hidden group px-8 py-4"
              >
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-pulse-glow"
                />
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="glassmorphism hover:bg-primary hover:text-primary-foreground transition-all duration-500 border-primary/30 hover:border-primary px-8 py-4"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex justify-center gap-6 pt-8"
          >
            {[
              { icon: Github, delay: 0 },
              { icon: Linkedin, delay: 0.1 },
              { icon: Mail, delay: 0.2 }
            ].map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 1.7 + social.delay, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="glassmorphism hover:bg-primary hover:text-primary-foreground transition-all duration-500 border border-primary/20 hover:border-primary hover:shadow-glow"
                >
                  <social.icon className="h-6 w-6" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          whileHover={{ scale: 1.1 }}
        >
          <div className="relative">
            <motion.div 
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center group-hover:border-accent transition-colors duration-300"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="w-1 h-3 bg-primary rounded-full mt-2 group-hover:bg-accent transition-colors duration-300" 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 border-2 border-primary rounded-full opacity-0 group-hover:opacity-30"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <motion.p 
            className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
          >
            Scroll down
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};