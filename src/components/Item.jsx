import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.img} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`} className="text-blue-600 underline">
        Ver detalle
      </Link>
    </div>
  );
}

export { Item };