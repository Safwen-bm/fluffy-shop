// app/(auth)/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from '@clerk/nextjs';
import { PawPrint } from 'lucide-react';

export default function SignUpPage() {
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
            Join the Pack!
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Create your FluffyShop account
          </p>
        </div>

        {/* Clerk Sign Up */}
        <div className="mt-6">
          <SignUp
            appearance={{
              elements: {
                formButtonText: "Sign Up",
                card: "shadow-none border-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
              },
            }}
            routing="path"
            path="/sign-up"
          />
        </div>
      </div>
    </div>
  );
}