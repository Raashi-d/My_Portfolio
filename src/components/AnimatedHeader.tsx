import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedHeader: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const titles = [
    "Entry-Level Software Engineer",
    "Full Stack Developer",
    "Delivering Innovative Solutions"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-semibold text-yellow-400"
        >
          {titles[currentIndex]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedHeader;