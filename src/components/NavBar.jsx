import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold' }}>MiTienda</div>
      <div>
        <a href="#" style={{ margin: '0 1rem' }}>Inicio</a>
        <a href="#" style={{ margin: '0 1rem' }}>Productos</a>
        <a href="#" style={{ margin: '0 1rem' }}>Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
