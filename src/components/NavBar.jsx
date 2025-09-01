import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="p-4 bg-purple-700 text-white flex gap-4 justify-center">
      <Link to="/">Inicio</Link>
      <Link to="/category/aromas">Aromas</Link>
      <Link to="/category/piedras">Piedras</Link>
      <Link to="/category/libros">Libros</Link>
    </nav>
  );
}
