import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../mockData";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then(setItem);
  }, [itemId]);

  return (
    <section className="container">
      {item ? <ItemDetail product={item} /> : <p>Cargando...</p>}
    </section>
  );
}
