// app/_components/CategoryShowcase.jsx
import Link from 'next/link';

export default function CategoryShowcase() {
  const categories = [
    { name: "Kittens", icon: "🐱", color: "from-pink-400 to-pink-600" },
    { name: "Puppies", icon: "🐶", color: "from-purple-400 to-purple-600" },
    { name: "Bunnies", icon: "🐰", color: "from-amber-400 to-orange-500" },
    { name: "Toys & Food", icon: "🎾", color: "from-blue-400 to-cyan-500" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-black text-gray-900 mb-4">Shop by Category</h2>
        <p className="text-xl text-gray-600 mb-16">Find exactly what your pet deserves</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/${cat.name.toLowerCase().replace(' & ', '-')}`}
              className="group relative p-12 bg-white rounded-3xl shadow-xl hover:shadow-2xl border-4 border-gray-100 hover:border-transparent transition-all"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition blur-xl`}></div>
              <div className="relative text-8xl mb-6">{cat.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white transition">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}