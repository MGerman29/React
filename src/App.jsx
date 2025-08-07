import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  const handleClick = () => {
    if (nuevoMensaje.trim() !== '') {
      setMensajes([...mensajes, nuevoMensaje]);
      setNuevoMensaje('');
    }
  };

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a nuestra tienda holística!" />

      <section className="mensaje-section">
        <input
          type="text"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          placeholder="Escribe tu mensaje"
          className="mensaje-input"
        />
        <button onClick={handleClick} className="mensaje-button">
          Agregar mensaje
        </button>

        <ul className="mensaje-lista">
          {mensajes.map((msg, index) => (
            <li key={index} className="mensaje-item">{msg}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
