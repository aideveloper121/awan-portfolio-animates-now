import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle 
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    value: "mubashir.awan@email.com",
    href: "mailto:mubashir.awan@email.com"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    label: "Location",
    value: "Available Worldwide",
    href: null
  }
];

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    href: "https://github.com/mubashirawan",
    color: "hover:text-gray-900"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/mubashirawan",
    color: "hover:text-blue-600"
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    label: "Twitter",
    href: "https://twitter.com/mubashirawan",
    color: "hover:text-blue-400"
  }
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <MessageCircle className="mr-2 h-4 w-4" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="perspective-1000"
          >
            <Card className="border-0 bg-gradient-card shadow-elevation backdrop-blur-sm relative overflow-hidden group">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Send className="h-6 w-6 text-primary" />
                    </motion.div>
                    Send Message
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 30, x: -20 }}
                      whileInView={{ opacity: 1, y: 0, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-muted focus:border-primary transition-all duration-300 focus:shadow-glow hover:border-primary/50"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 30, x: 20 }}
                      whileInView={{ opacity: 1, y: 0, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-muted focus:border-primary transition-all duration-300 focus:shadow-glow hover:border-primary/50"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-muted focus:border-primary transition-all duration-300 focus:shadow-glow hover:border-primary/50"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-muted focus:border-primary transition-all duration-300 resize-none focus:shadow-glow hover:border-primary/50"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-primary hover:bg-gradient-hero transition-all duration-500 shadow-glow relative overflow-hidden group"
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                        initial={{ x: -100 }}
                        whileHover={{ x: 300 }}
                        transition={{ duration: 0.8 }}
                      />
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8 perspective-1000"
          >
            {/* Contact Details */}
            <Card className="border-0 bg-gradient-card shadow-elevation backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 cursor-pointer group/item"
                  >
                    <motion.div 
                      className="p-3 rounded-lg bg-gradient-primary text-primary-foreground shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <motion.p 
                        className="font-medium text-muted-foreground"
                        whileHover={{ x: 5 }}
                      >
                        {info.label}
                      </motion.p>
                      {info.href ? (
                        <motion.a
                          href={info.href}
                          className="text-lg font-semibold hover:text-primary transition-colors group-hover/item:text-primary"
                          whileHover={{ x: 5 }}
                        >
                          {info.value}
                        </motion.a>
                      ) : (
                        <motion.p 
                          className="text-lg font-semibold"
                          whileHover={{ x: 5 }}
                        >
                          {info.value}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-0 bg-gradient-card shadow-elevation backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <CardTitle className="text-2xl">Follow Me</CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.5 + index * 0.15,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-elevation hover:shadow-glow relative overflow-hidden group/social"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                        initial={{ x: -100 }}
                        whileHover={{ x: 100 }}
                        transition={{ duration: 0.6 }}
                      />
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="border-0 bg-gradient-primary text-primary-foreground shadow-glow relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
                
                <CardContent className="p-6 text-center relative z-10">
                  <motion.div 
                    className="inline-flex items-center gap-2 mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="font-semibold">Available for Work</span>
                  </motion.div>
                  <motion.p 
                    className="text-sm opacity-90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.9, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    I'm currently available for freelance projects and full-time opportunities. 
                    Let's discuss how we can work together!
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};