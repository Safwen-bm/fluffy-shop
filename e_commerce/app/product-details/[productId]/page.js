// app/product-details/[productId]/page.js
import { notFound } from 'next/navigation';
import ProductApis from '../../_utils/ProductApis';
import ProductBanner from './_components/ProductBanner';
import ProductInfo from './_components/ProductInfo';
import ProductList from '../../_components/ProductList';
import { Sparkles, Package, Shield, Heart } from 'lucide-react';

export default async function ProductDetails({ params }) {
  const { productId } = await params;

  if (!productId) notFound();

  let product = null;
  let similarProducts = [];

  try {
    const res = await ProductApis.getProductById(productId);
    product = res.data.data;
    if (!product) notFound();

    const category = product.category;
    if (category) {
      const catRes = await ProductApis.getProductsByCategory(category);
      similarProducts = (catRes.data.data || [])
        .filter(p => p.documentId !== product.documentId)
        .slice(0, 8);
    }
  } catch (err) {
    console.error("Product error:", err);
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/30 via-white to-purple-50/20 pt-20 pb-32"> {/* ← pt-20 instead of pt-32 */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb — Tighter */}
        <div className="text-sm text-gray-500 mb-4"> {/* ← mb-4 instead of mb-8 */}
          <span>Home</span> → <span>Animals</span> → <span className="text-pink-600 font-bold">{product.title}</span>
        </div>

        {/* Main Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> {/* ← gap-12 instead of gap-16 */}
          {/* Image */}
          <div className="sticky top-20">
            <ProductBanner product={product} />
            <div className="mt-5 flex justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-5 py-3 rounded-full shadow-lg text-sm font-medium">
                <Shield className="w-6 h-6 text-green-600" />
                Health Guaranteed
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-5 py-3 rounded-full shadow-lg text-sm font-medium">
                <Package className="w-6 h-6 text-purple-600" />
                Free Delivery
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <ProductInfo product={product} />
            
            {/* Trust Badges */}
            <div className="mt-10 grid grid-cols-2 gap-6"> {/* ← mt-10 instead of mt-12 */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 text-center">
                <Heart className="w-16 h-16 text-pink-600 fill-pink-600 mx-auto mb-4" />
                <p className="font-bold text-gray-900">Loved & Raised with Care</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 text-center">
                <Sparkles className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <p className="font-bold text-gray-900">Exclusive Bloodline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products — Tighter */}
        {similarProducts.length > 0 && (
          <div className="mt-20"> {/* ← mt-20 instead of mt-32 */}
            <h2 className="text-5xl font-black text-center text-gray-900 mb-12"> {/* ← mb-12 instead of mb-16 */}
              More <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">Beautiful Friends</span>
            </h2>
            <ProductList productList={similarProducts} />
          </div>
        )}
      </div>
    </div>
  );
}