'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface CountDisplayProps {
  count: number;
  className?: string;
}

export function CountDisplay({ count, className = '' }: CountDisplayProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          className="text-9xl font-bold tabular-nums text-gray-900"
        >
          {count}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
