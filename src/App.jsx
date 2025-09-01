import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a nuestra tienda holística!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;