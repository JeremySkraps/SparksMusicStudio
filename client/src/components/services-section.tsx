import { motion } from "framer-motion";
import { Guitar, Music, Piano, Sliders } from "lucide-react";

const services = [
  {
    title: "GUITAR",
    icon: Guitar,
    description: "Shred through dimensions with electric and acoustic mastery",
    color: "hot-pink",
    image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "DRUMS",
    icon: Music,
    description: "Command the rhythm matrix with precision and power",
    color: "neon-purple",
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "PIANO",
    icon: Piano,
    description: "Unlock harmonic codes from classical to cyberpunk",
    color: "cyber-blue",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "ABLETON LIVE",
    icon: Sliders,
    description: "Engineer sonic landscapes in the digital realm",
    color: "cyber-green",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-dark-purple to-deep-navy relative">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-orbitron font-bold text-cyber-blue mb-4 glitch-text" data-text="PROGRAMS">
            PROGRAMS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your sonic weapon and master the art of digital music creation
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="cyber-border bg-rich-black/80 p-8 text-center hover:shadow-neon-blue transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src={service.image} 
                  alt={`${service.title} equipment`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              
              <motion.div
                className={`text-4xl text-${service.color} mb-4 animate-float`}
                whileHover={{ scale: 1.1 }}
              >
                <service.icon size={48} className="mx-auto" />
              </motion.div>
              
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              
              <motion.button 
                className={`w-full cyber-border bg-transparent text-${service.color} hover:bg-${service.color} hover:text-rich-black py-3 transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ACTIVATE
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
