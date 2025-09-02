import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <div style={{ fontSize: '1.5rem', position: 'relative' }}>
      🛒
      <span style={{
        background: 'red',
        color: 'white',
        padding: '0.2rem 0.5rem',
        borderRadius: '50%',
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        fontSize: '0.8rem'
      }}>
        {totalItems}
      </span>
    </div>

  );
};

export default CartWidget;
