import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "../index.css";

export default function ItemDetail({ product }) {
  const [count, setCount] = useState(1);
  const { addItem } = useContext(CartContext);

  if (!product) return null;

  const handleAdd = () => count < product.stock && setCount(count + 1);
  const handleSub = () => count > 1 && setCount(count - 1);

  const handleAddToCart = () => {
    addItem(product, count);
    alert(`${count} ${product.name} agregado(s) al carrito`);
  };

  return (
    <section className="detail">
      {/* Media */}
      <div>
        <img
          className="detail-img"
          src={product.img}
          alt={product.name}
          onError={(e) => { e.currentTarget.src = "/img/placeholder.png"; }}
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="detail-info">
        <h2>{product.name}</h2>

        <p className="price">${product.price?.toLocaleString?.() ?? product.price}</p>
        {product.category && <p>Categoría: <strong>{product.category}</strong></p>}
        <p>Stock disponible: {product.stock}</p>

        {/* Contador */}
        <div className="count">
          <button onClick={handleSub} aria-label="Restar">−</button>
          <span className="qty">{count}</span>
          <button onClick={handleAdd} aria-label="Sumar">＋</button>
        </div>

        {/* CTA */}
        <button
          className="btn-primary"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </button>

        <Link to="/" className="back-link">Volver al catálogo</Link>
      </div>
    </section>
  );
}
