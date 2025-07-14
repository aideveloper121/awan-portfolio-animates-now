import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Back to Top Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>

          {/* Logo and Tagline */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mubashir Awan
            </h3>
            <p className="text-muted-foreground max-w-md">
              Software Engineer passionate about creating innovative solutions with modern technologies
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
              { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <Mail className="h-5 w-5" />, href: "mailto:mubashir.awan@email.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <Separator className="w-full max-w-md" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground"
          >
            <p className="flex items-center justify-center gap-2 text-sm">
              © {currentYear} Mubashir Awan. Built with
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              using React & TypeScript
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};