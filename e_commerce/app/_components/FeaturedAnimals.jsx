// app/_components/FeaturedAnimals.jsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FeaturedAnimals() {
  const animals = [
    { name: "Persian Kitten", price: "$1,200", img: "/featured-cat.webp" },
    { name: "French Bulldog", price: "$3,800", img: "/featured-dog.webp" },
    { name: "Holland Lop Bunny", price: "$450", img: "/featured-bunny.jpg" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">Star Animals</span>
          </h2>
          <p className="text-xl text-gray-600">Hand-selected companions ready for their forever home</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {animals.map((animal) => (
            <div key={animal.name} className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white">
              <div className="aspect-[4/5] relative">
                <Image
                  src={animal.img}
                  alt={animal.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                
                {/* Dark overlay + text on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-8 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-4xl font-bold mb-2">{animal.name}</h3>
                    <p className="text-3xl font-bold text-pink-400 mb-4">{animal.price}</p>
                    <Link 
                      href="/animals"
                      className="inline-flex items-center gap-3 text-white font-semibold hover:gap-5 transition-all"
                    >
                      View Details <ArrowRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}