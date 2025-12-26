'use client';

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="
        px-4 py-2
        text-sm font-medium
        text-gray-600
        hover:text-gray-900
        border border-gray-300
        hover:border-gray-400
        rounded-lg
        transition-colors
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
    >
      {loading ? 'Logging out...' : 'Logout'}
    </button>
  );
}
