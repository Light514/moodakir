'use client';

import { useCounter } from '@/lib/hooks/use-counter';
import { useUser } from '@/lib/hooks/use-user';
import { CountDisplay } from './count-display';
import { CounterButton } from './counter-button';
import { LogoutButton } from '@/components/auth/logout-button';
import { motion } from 'framer-motion';

export function TapCounter() {
  const { count, increment, reset } = useCounter(0);
  const { profile, loading } = useUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      {/* Logout button in top-right */}
      <div className="absolute top-4 right-4">
        <LogoutButton />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-12"
      >
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Moodakir</h1>
          <p className="text-gray-600">Digital Dhikr Companion</p>
          {!loading && profile && (
            <p className="text-sm text-emerald-600 mt-2">
              Welcome, {profile.username}! 🌙
            </p>
          )}
        </div>

        {/* Count Display */}
        <CountDisplay count={count} className="my-12" />

        {/* Counter Button */}
        <div className="flex justify-center">
          <CounterButton onClick={increment} />
        </div>

        {/* Reset Button */}
        {count > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={reset}
            className="
              px-6 py-3
              text-sm font-medium
              text-gray-600
              hover:text-gray-900
              border border-gray-300
              hover:border-gray-400
              rounded-lg
              transition-colors
            "
          >
            Reset Counter
          </motion.button>
        )}

        {/* Footer Info */}
        <div className="text-sm text-gray-500 space-y-1">
          <p>Tap the button to count</p>
          {count > 0 && (
            <p className="text-emerald-600 font-medium">
              {count} {count === 1 ? 'count' : 'counts'}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
