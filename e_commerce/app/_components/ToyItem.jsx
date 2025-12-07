// app/_components/ToyItem.jsx
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ShoppingBag } from 'lucide-react';

export default function ToyItem({ product }) {
  const documentId = product.documentId;
  const title = product.title || "Luxury Toy";
  const price = product.price ? `$${Number(product.price).toFixed(2)}` : "$0.00";

  let imageUrl = "/placeholder-toy.jpg";
  if (product.banner?.url) {
    imageUrl = product.banner.url;
  } else if (product.banner?.data?.attributes?.url) {
    imageUrl = `http://127.0.0.1:1337${product.banner.data.attributes.url}`;
  }

  return (
    <Link href={`/product-details/${documentId}`}>
      <div className="group relative bg-gradient-to-br from-amber-50 to-pink-50 rounded-3xl shadow-xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-6">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-125 transition-transform duration-700"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {/* Sparkle Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-full px-4 py-2 shadow-lg">
            <Sparkles className="w-6 h-6 text-amber-600 inline mr-2" />
            <span className="font-bold text-amber-700">Premium</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white/80 backdrop-blur">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition">
            {title}
          </h3>
          
          <div className="flex items-center justify-between">
            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              {price}
            </span>
            <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-xl group-hover:scale-125 transition">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Floating sparkle effect */}
        <Sparkles className="absolute -top-4 -right-4 w-16 h-16 text-yellow-400 opacity-40 group-hover:opacity-80 transition" />
      </div>
    </Link>
  );
}