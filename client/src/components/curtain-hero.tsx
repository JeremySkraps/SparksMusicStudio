import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll-position";

export default function CurtainHero() {
  const scrollPosition = useScrollPosition();
  const maxScroll = window.innerHeight;
  const openPercentage = Math.min((scrollPosition / maxScroll) * 100, 100);
  const fadeAmount = openPercentage > 80 ? (openPercentage - 80) / 20 : 0;

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Cyberpunk cityscape background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-purple/80 to-rich-black/90"></div>
      </div>
      
      {/* Stage floor */}
      <div 
        className="absolute bottom-0 w-full h-1/3 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=640')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-rich-black/60"></div>
      </div>
      
      {/* Left Curtain */}
      <motion.div 
        className="curtain-left absolute top-0 left-0 w-1/2 h-full z-20"
        style={{
          transform: `translateX(-${openPercentage}%)`,
          opacity: 1 - fadeAmount
        }}
      >
        <div 
          className="w-full h-full bg-cover bg-right"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1080')"
          }}
        >
          <div className="absolute inset-0 bg-burgundy/40"></div>
        </div>
      </motion.div>
      
      {/* Right Curtain */}
      <motion.div 
        className="curtain-right absolute top-0 right-0 w-1/2 h-full z-20"
        style={{
          transform: `translateX(${openPercentage}%)`,
          opacity: 1 - fadeAmount
        }}
      >
        <div 
          className="w-full h-full bg-cover bg-left"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&h=1080')",
            transform: "scaleX(-1)"
          }}
        >
          <div className="absolute inset-0 bg-burgundy/40"></div>
        </div>
      </motion.div>
      
      {/* Hero Content */}
      <div className="relative z-30 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1 
            className="text-6xl md:text-8xl font-orbitron font-bold mb-6 text-white glitch-text"
            data-text="SPARKS"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-cyber-blue animate-glow">SPARKS</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-rajdhani font-light mb-8 text-neon-purple"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            MUSIC LESSONS
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Enter the future of music education in Huntsville, Alabama. Master guitar, drums, piano, and Ableton Live production in our cyberpunk-inspired studio.
          </motion.p>
          
          <motion.button 
            className="cyber-border bg-transparent text-cyber-blue hover:bg-cyber-blue hover:text-rich-black px-8 py-4 text-lg font-semibold transition-all duration-300 neon-glow hover:shadow-neon-blue"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            BEGIN YOUR JOURNEY
          </motion.button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-cyber-blue">
          <ChevronDown size={32} />
        </div>
      </motion.div>
    </section>
  );
}
