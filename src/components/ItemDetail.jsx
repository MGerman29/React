import { useState } from "react";

export default function ItemDetail({ product }) {
  const [count, setCount] = useState(1);

  const handleAdd = () => setCount(count + 1);
  const handleSub = () => count > 1 && setCount(count - 1);

  return (
    <div className="border p-6 rounded-lg shadow-md max-w-md mx-auto">
      <img src={product.img} alt={product.name} className="w-full h-60 object-cover mb-4" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-lg">Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      <p>Stock: {product.stock}</p>

      <div className="flex items-center gap-4 mt-4">
        <button onClick={handleSub} className="px-3 py-1 bg-gray-300 rounded">-</button>
        <span>{count}</span>
        <button onClick={handleAdd} className="px-3 py-1 bg-gray-300 rounded">+</button>
      </div>

      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded">
        Agregar al carrito
      </button>
    </div>
  );
}

export { ItemDetail };