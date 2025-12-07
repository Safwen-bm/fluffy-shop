// app/(auth)/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs';
import { PawPrint } from 'lucide-react';

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="rounded-lg shadow-lg max-w-md w-full bg-white p-6 space-y-6">

        {/* Logo */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition"></div>
            <div className="relative bg-white rounded-full p-6 shadow-2xl border-4 border-white">
              <PawPrint className="w-20 h-20 text-pink-500" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Welcome Back!
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Sign in to continue to your FluffyShop account
          </p>
        </div>

        {/* Clerk Sign In */}
        <div className="mt-6">
          <SignIn
            appearance={{
              elements: {
                formButtonText: "Sign In",
                card: "shadow-none border-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
              },
            }}
            routing="path"
            path="/sign-in"
          />
        </div>
      </div>
    </div>
  );
}