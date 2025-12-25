'use client';

import { motion } from 'framer-motion';
import { vibrate } from '@/lib/vibration';
import { useState } from 'react';

interface CounterButtonProps {
  onClick: () => void;
  label?: string;
  className?: string;
}

export function CounterButton({ onClick, label = 'Tap', className = '' }: CounterButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleTap = () => {
    // Trigger vibration
    vibrate('tap');

    // Visual feedback
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 300);

    // Call the onClick handler
    onClick();
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      animate={isPressed ? {
        scale: [0.95, 1.05, 1],
      } : {
        scale: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      onClick={handleTap}
      className={`
        relative
        w-64 h-64
        rounded-full
        bg-gradient-to-br from-emerald-400 to-emerald-600
        shadow-lg
        hover:shadow-xl
        active:shadow-md
        transition-shadow
        ${isPressed ? 'shadow-emerald-500/50' : ''}
        ${className}
      `}
    >
      {/* Glow pulse effect */}
      <motion.div
        animate={isPressed ? {
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        } : {}}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 rounded-full bg-emerald-400 blur-xl"
      />

      {/* Button content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <span className="text-2xl font-semibold text-white drop-shadow-md">
          {label}
        </span>
      </div>
    </motion.button>
  );
}
