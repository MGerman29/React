import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a nuestra tienda holística!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 className="text-center mt-10">404 - Página no encontrada</h2>} />
      </Routes>
    </CartProvider>
  );
}

export default App;

