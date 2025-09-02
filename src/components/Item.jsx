import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <article className="card">
      <img
        src={product.img}
        alt={product.name}
        onError={(e)=>{ e.currentTarget.src="/img/placeholder.png"; }}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link className="btn" to={`/item/${product.id}`}>Comprar</Link>
    </article>
  );
}
