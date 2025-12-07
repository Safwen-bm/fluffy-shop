// app/_components/ProductList.jsx
import ProductItem from './ProductItem';

export default function ProductList({ productList }) {
  if (!productList?.length) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl text-gray-500">No animals available right now.</p>
        <p className="text-lg text-gray-400 mt-4">Check back soon — new friends arrive daily!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
      {productList.map((product) => (
        <ProductItem key={product.documentId} product={product} />
      ))}
    </div>
  );
}