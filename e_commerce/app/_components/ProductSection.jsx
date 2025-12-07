// app/_components/ProductSection.jsx
"use client";

import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import ProductApis from '../_utils/ProductApis';

export default function ProductSection() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ProductApis.getLatestProducts().then(res => {
      const allProducts = res.data.data || [];
      // Only take the latest 4
      const latestFour = allProducts.slice(0, 4);
      setProductList(latestFour);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="h-12 bg-gray-200 rounded-full w-96 mx-auto mb-8 animate-pulse"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-3xl h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">Latest Arrivals</span>
        </h2>
        <p className="text-xl text-gray-600 mb-16">New healthy companions ready for loving homes</p>
        
        {/* Only 4 cards */}
        <ProductList productList={productList} />
      </div>
    </section>
  );
}