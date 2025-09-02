import Item from "./Item";
export default function ItemList({ items }) {
  if (!items?.length) return <p>No hay productos.</p>;
  return (
    <div className="grid">
      {items.map(prod => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
}
