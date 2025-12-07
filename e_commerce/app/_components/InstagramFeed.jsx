// app/_components/InstagramFeed.jsx
import Link from 'next/link';
import { Instagram, Heart } from 'lucide-react';

export default function InstagramFeed() {
  const posts = ["post1.jpg", "post2.jpg", "post3.jpg", "post4.jpg", "post5.jpg", "post6.jpg"];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Instagram className="w-12 h-12 text-pink-600" />
          <h2 className="text-5xl font-black text-gray-900">@FluffyShop</h2>
        </div>
        <p className="text-xl text-gray-600 mb-12">Tag us in your photos for a chance to be featured!</p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {posts.map((_, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl aspect-square bg-gray-200 border-2 border-dashed"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 opacity-80 flex items-center justify-center">
                <Heart className="w-16 h-16 text-white" />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <Instagram className="w-12 h-12 text-white" />
              </div>
            </div>
          ))}
        </div>

        <Link
          href="https://instagram.com"
          className="mt-12 inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-700 text-white text-xl font-bold rounded-full shadow-xl hover:shadow-pink-600/50 transform hover:scale-105 transition"
        >
          Follow Us on Instagram
        </Link>
      </div>
    </section>
  );
}