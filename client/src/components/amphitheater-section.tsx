import { motion } from "framer-motion";

export default function AmphitheaterSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            className="text-6xl font-orbitron font-bold text-white mb-8 glitch-text" 
            data-text="YOUR STAGE AWAITS"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            YOUR STAGE AWAITS
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Step into the spotlight and unleash your musical potential
          </motion.p>
          
          <motion.button 
            className="cyber-border bg-transparent text-cyber-blue hover:bg-cyber-blue hover:text-rich-black px-12 py-6 text-xl font-semibold transition-all duration-300 neon-glow hover:shadow-neon-blue"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            BOOK YOUR FIRST LESSON
          </motion.button>
        </div>
      </div>
    </section>
  );
}
