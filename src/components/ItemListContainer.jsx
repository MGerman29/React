import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../mockData";
import ItemList from "./ItemList";

export default function ItemListContainer({ mensaje }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    let p = categoryId ? getProductsByCategory(categoryId) : getProducts();
    p.then(setItems);
  }, [categoryId]);

  return (
    <section className="container">
      {mensaje && <h1>{mensaje}</h1>}
      <ItemList items={items} />
    </section>
  );
}