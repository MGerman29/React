import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./mockdata";
import { ItemDetail } from "./ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then((res) => setProduct(res));
  }, [itemId]);

  return (
    <section className="p-4">
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </section>
  );
}
