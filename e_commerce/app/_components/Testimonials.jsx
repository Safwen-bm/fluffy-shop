// app/_components/Testimonials.jsx
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah & Milo",
      animal: "Persian Kitten",
      text: "Best decision ever. Milo arrived healthy, happy, and already litter-trained. The support team still checks in monthly!",
      rating: 5,
    },
    {
      name: "The Johnson Family",
      animal: "French Bulldog Puppy",
      text: "We were nervous buying online, but FluffyShop made it perfect. Free delivery, all paperwork, and lifetime advice. 100% recommend.",
      rating: 5,
    },
    {
      name: "Emma Chen",
      animal: "Holland Lop Bunny",
      text: "My daughter hasn’t stopped smiling since Snowball arrived. The quality of care from breeder to delivery was outstanding.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-pink-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-black text-gray-900 mb-4">
          Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">10,000+ Families</span>
        </h2>
        <p className="text-xl text-gray-600 mb-16">Real stories from real homes</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <div key={review.name} className="relative bg-white rounded-3xl shadow-xl p-8 border border-pink-100">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-pink-200" />
              <div className="mt-8 text-left">
                <p className="text-lg text-gray-700 italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">Owner of {review.animal}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}