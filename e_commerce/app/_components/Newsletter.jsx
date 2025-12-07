// app/_components/Newsletter.jsx
import { Mail, Sparkles } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-6 animate-pulse" />
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Join the FluffyShop Family
        </h2>
        <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto">
          Get exclusive access to new arrivals, special offers, and care tips for your pet.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-8 py-6 rounded-full text-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
          />
          <button
            type="submit"
            className="px-12 py-6 bg-white text-purple-700 font-bold text-xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition whitespace-nowrap"
          >
            <Mail className="w-8 h-8 inline mr-3" />
            Join Now
          </button>
        </form>

        <p className="text-pink-200 text-sm mt-6">
          50,000+ pet parents already subscribed • Unsubscribe anytime
        </p>
      </div>
    </section>
  );
}