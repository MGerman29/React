import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "./mockdata";
import ItemList from "./ItemList";

export default function ItemListContainer({ mensaje }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = categoryId ? getProductsByCategory(categoryId) : getProducts();
    fetchData.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <section className="p-4">
      {mensaje && <h1>{mensaje}</h1>}
      <ItemList items={items} />
    </section>
  );
}

export { ItemListContainer };