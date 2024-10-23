import React from 'react';
import { motion } from 'framer-motion';

interface CursorPosition {
  x: number;
  y: number;
}

interface CustomCursorProps {
  position: CursorPosition;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ position }) => {
  return (
    <motion.div
      className="fixed w-8 h-8 pointer-events-none z-50"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      <div className="w-full h-full rounded-full border-2 border-yellow-400 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full" />
    </motion.div>
  );
};

export default CustomCursor;