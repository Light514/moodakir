import { AuthForm } from '@/components/auth/auth-form';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-emerald-50 to-white">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <h1 className="text-4xl font-bold text-gray-900">Moodakir</h1>
          </Link>
          <p className="text-gray-600">Sign in to start counting your dhikr</p>
        </div>

        {/* Auth Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <AuthForm />
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          By signing up, you agree to our terms of service
        </p>
      </div>
    </main>
  );
}
