// app/product-details/[productId]/_components/ProductBanner.jsx
import Image from 'next/image';

export default function ProductBanner({ product }) {
  let src = "/placeholder-animal.jpg";

  if (product.banner?.url) {
    src = product.banner.url;
  } else if (product.banner?.data?.attributes?.url) {
    src = `http://127.0.0.1:1337${product.banner.data.attributes.url}`;
  }

  if (src.startsWith("/uploads")) {
    src = `http://127.0.0.1:1337${src}`;
  }

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-100">
      {/* PERFECT SIZE: 500px height on desktop, responsive */}
      <div className="relative w-full h-96 md:h-[500px] lg:h-[560px] bg-gray-100">
        <Image
          src={src}
          alt={product.title || "Animal"}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>

      {/* Premium Badge — Smaller & Cleaner */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-lg px-5 py-2.5 rounded-full shadow-xl border border-pink-200">
        <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">
          Premium
        </span>
      </div>
    </div>
  );
}