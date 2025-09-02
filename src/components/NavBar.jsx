import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
  <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo">TiendaHolística</Link>
        <div className="nav-links">
          <NavLink to="/category/aromas" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>Aromas</NavLink>
          <NavLink to="/category/piedras" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>Piedras</NavLink>
          <NavLink to="/category/libros" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>Libros</NavLink>
        </div>
        <div className="nav-right">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}
