import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "LOCATION",
      content: ["Huntsville, Alabama", "Northern Sector Grid"],
      color: "cyber-blue"
    },
    {
      icon: Phone,
      title: "SIGNAL",
      content: ["(256) XXX-XXXX", "Direct Neural Link"],
      color: "neon-purple"
    },
    {
      icon: Mail,
      title: "DATA STREAM",
      content: ["info@sparksmusiclessons.com", "Encrypted Channel"],
      color: "hot-pink"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-rich-black to-dark-purple relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-orbitron font-bold text-hot-pink mb-4 glitch-text" data-text="CONTACT">
            CONTACT
          </h2>
          <p className="text-xl text-gray-300">
            Ready to begin your musical transformation?
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="cyber-border bg-rich-black/80 p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`text-4xl text-${info.color} mb-4`}
                whileHover={{ scale: 1.1 }}
              >
                <info.icon size={48} className="mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                {info.title}
              </h3>
              <div className="text-gray-300">
                {info.content.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Contact Form */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="cyber-border bg-rich-black/80 text-white border-cyber-blue focus:border-cyber-blue focus:ring-cyber-blue"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="cyber-border bg-rich-black/80 text-white border-cyber-blue focus:border-cyber-blue focus:ring-cyber-blue"
                />
              </div>
            </div>
            
            <div>
              <Select onValueChange={(value) => setFormData({...formData, program: value})}>
                <SelectTrigger className="cyber-border bg-rich-black/80 text-white border-cyber-blue">
                  <SelectValue placeholder="Select Your Program" />
                </SelectTrigger>
                <SelectContent className="bg-rich-black border-cyber-blue">
                  <SelectItem value="guitar">Guitar</SelectItem>
                  <SelectItem value="drums">Drums</SelectItem>
                  <SelectItem value="piano">Piano</SelectItem>
                  <SelectItem value="ableton">Ableton Live Production</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Textarea
                rows={5}
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="cyber-border bg-rich-black/80 text-white border-cyber-blue focus:border-cyber-blue focus:ring-cyber-blue resize-none"
              />
            </div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full cyber-border bg-transparent text-cyber-blue hover:bg-cyber-blue hover:text-rich-black py-4 text-lg font-semibold transition-all duration-300 neon-glow hover:shadow-neon-blue"
              >
                TRANSMIT MESSAGE
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
