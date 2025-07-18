import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-rich-black/90 backdrop-blur-md border-b border-cyber-blue/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-orbitron font-bold text-cyber-blue glitch-text cursor-pointer"
            data-text="SPARKS"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("home")}
          >
            SPARKS
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="hover:text-cyber-blue transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="hover:text-cyber-blue transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="hover:text-cyber-blue transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="hover:text-cyber-blue transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          
          <button 
            className="md:hidden text-cyber-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden mt-4 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <button 
              onClick={() => scrollToSection("home")}
              className="block w-full text-left hover:text-cyber-blue transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block w-full text-left hover:text-cyber-blue transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left hover:text-cyber-blue transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left hover:text-cyber-blue transition-colors duration-300"
            >
              Contact
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
