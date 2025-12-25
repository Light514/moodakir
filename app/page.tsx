import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-emerald-50 to-white">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Moodakir</h1>
          <p className="text-xl text-gray-600">Digital Dhikr Companion</p>
          <p className="mt-2 text-sm text-gray-500">
            Modern dhikr counter with no-tap mode
          </p>
        </div>

        <Link
          href="/counter"
          className="
            inline-block
            px-8 py-4
            text-lg font-semibold
            text-white
            bg-gradient-to-r from-emerald-500 to-emerald-600
            hover:from-emerald-600 hover:to-emerald-700
            rounded-full
            shadow-lg
            hover:shadow-xl
            transition-all
            transform
            hover:scale-105
          "
        >
          Start Counting →
        </Link>

        <div className="text-xs text-gray-400 mt-8">
          <p>MVP in development - Week 1</p>
        </div>
      </div>
    </main>
  );
}
