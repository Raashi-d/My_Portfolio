import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const subject = encodeURIComponent('Portfolio Contact Form');
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`
    );
    window.location.href = `mailto:raashidm862@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="section-subtitle">Let's Connect</h2>
            <p className="text-gray-300">
              Looking to collaborate? Feel free to get in touch!
            </p>
            
            <div className="space-y-4">
              <motion.a
                href="mailto:raashidm862@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5" />
                raashidm862@gmail.com
              </motion.a>
              
              <motion.div 
                className="flex items-center gap-3 text-gray-300"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-5 h-5" />
                +94 778 253 443
              </motion.div>
              
              <motion.a
                href="https://maps.app.goo.gl/JsMp7H9ckeAqpEop8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-5 h-5" />
                32/2, Polgolla Road, Udathalawinna, Kandy, Sri Lanka
              </motion.a>
            </div>
          </motion.div>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white resize-none"
                required
              />
            </div>
            
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
