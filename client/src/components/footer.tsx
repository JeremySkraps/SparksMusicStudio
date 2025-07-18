import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-rich-black border-t border-cyber-blue/30 py-8">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          className="text-2xl font-orbitron font-bold text-cyber-blue mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          SPARKS MUSIC LESSONS
        </motion.div>
        
        <motion.p 
          className="text-gray-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Huntsville, Alabama • The Future of Music Education
        </motion.p>
        
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="text-gray-400 hover:text-cyber-blue transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
