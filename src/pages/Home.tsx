import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedHeader from '../components/AnimatedHeader';
import FloatingImage from '../components/FloatingImage';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-0">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mohamed <span className="text-yellow-400">Raashid</span>
          </motion.h1>
          
          <AnimatedHeader />
          
          <motion.p 
            className="text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Motivated software engineering student with a solid foundation in full-stack development. 
            Passionate about leveraging my skills in real-world projects and delivering tech-driven solutions. 
            Known for a proactive mindset, problem-solving skills, and collaboration. 
            Seeking a software developer internship to enhance my professional growth.
          </motion.p>
          
          <motion.button 
            onClick={() => window.open('/My_Portfolio/Raashid_Resume.pdf', '_blank')}
            className="group relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-black bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">
              <Download className="w-5 h-5" />
            </span>
            Download CV
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FloatingImage
            src="./My_Portfolio/about.png"
            alt="Mohamed Raashid"
            className="w-96 h-96 md:w-96 md:h-96"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;