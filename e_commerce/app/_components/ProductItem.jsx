// app/_components/ProductItem.jsx
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';

export default function ProductItem({ product }) {
  const documentId = product.documentId;
  const title = product.title || "Beautiful Companion";
  const price = product.price ? `$${Number(product.price).toLocaleString()}` : "$0";
  const category = product.category || "Pet";

  let imageUrl = "/placeholder-animal.jpg";
  if (product.banner?.url) {
    imageUrl = product.banner.url;
  } else if (product.banner?.data?.attributes?.url) {
    imageUrl = `http://127.0.0.1:1337${product.banner.data.attributes.url}`;
  }

  return (
    <Link href={`/product-details/${documentId}`}>
      <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:border-pink-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
          
          {/* Hover Heart */}
          <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition shadow-lg">
            <Heart className="w-6 h-6 text-pink-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-4">{category}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">
              {price}
            </span>
            <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg group-hover:scale-110 transition">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}