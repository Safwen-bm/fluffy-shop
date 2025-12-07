// app/pages/Animals.jsx
"use client";

import { useEffect, useState } from 'react';
import ProductApis from '../_utils/ProductApis';
import ProductItem from '../_components/ProductItem';
import { Search, Filter, Sparkles } from 'lucide-react';

export default function Animals() {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch all products
    ProductApis.getLatestProducts().then(res => {
      const allProducts = res.data.data || [];
      
      // Filter only animals (case insensitive)
      const animalProducts = allProducts.filter(product => {
        const cat = product.category?.toLowerCase();
        return cat === 'animal' || cat === 'animals';
      });

      setAnimals(animalProducts);
      setFilteredAnimals(animalProducts);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  // Search filter
  useEffect(() => {
    const filtered = animals.filter(animal =>
      animal.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAnimals(filtered);
  }, [searchTerm, animals]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="h-16 bg-gray-200 rounded-full w-96 mx-auto mb-8 animate-pulse"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-3xl h-96 animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700">
              Beautiful Animals
            </span>
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Healthy, happy companions waiting for their forever home
          </p>
          <Sparkles className="w-16 h-16 text-purple-600 mx-auto mt-6 animate-pulse" />
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-400" />
            <input
              type="text"
              placeholder="Search for bunny, kitten, puppy..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-20 pr-8 py-6 text-xl rounded-full shadow-2xl border-4 border-pink-200 focus:border-pink-400 focus:outline-none transition"
            />
            <Filter className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 text-pink-500" />
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600">
            Showing <span className="font-bold text-pink-600">{filteredAnimals.length}</span> beautiful friends
          </p>
        </div>

        {/* Animal Grid */}
        {filteredAnimals.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-3xl text-gray-500 mb-4">No animals found</p>
            <p className="text-xl text-gray-400">Try a different search term!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredAnimals.map((animal) => (
              <ProductItem key={animal.documentId} product={animal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}