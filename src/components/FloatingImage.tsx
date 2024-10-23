import React from 'react';
import { motion } from 'framer-motion';

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FloatingImage: React.FC<FloatingImageProps> = ({ src, alt, className = '' }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <img
        src={src}
        alt={alt}
        className="relative w-full h-full object-cover rounded-full border-4 border-yellow-400 shadow-2xl"
      />
    </motion.div>
  );
};

export default FloatingImage;