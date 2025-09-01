import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {items.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
}
