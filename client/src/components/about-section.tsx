import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Professional-grade equipment and software",
  "Personalized lesson plans for all skill levels",
  "Industry-experienced instructors",
  "Flexible scheduling and competitive rates"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-deep-navy to-rich-black relative">
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-orbitron font-bold text-neon-purple mb-8 glitch-text" data-text="ABOUT SPARKS">
              ABOUT SPARKS
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Welcome to the future of music education. At Sparks Music Lessons, we bridge the gap between traditional musicianship and cutting-edge digital production.
            </p>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Located in the heart of Huntsville, Alabama, our cyberpunk-inspired studio is equipped with state-of-the-art technology and taught by industry professionals who live and breathe the digital music revolution.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-cyber-blue" size={20} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cyber-border bg-rich-black/50 p-8 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Futuristic music studio setup" 
                className="w-full rounded-lg shadow-neon-purple" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
