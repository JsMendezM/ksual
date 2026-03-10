import { Link } from 'react-router-dom';
import { Menu, User, Calendar } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <div className="container nav-content">
        <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <span className="text-gradient" style={{ marginRight: '6px' }}>Ksual Spa</span>
          <span style={{ color: '#fff', fontWeight: 'bold' }}>Rostros que Inspiran</span>
        </Link>

        <div className="nav-links">
          <a href="#" className="nav-item d-none-mobile">
            <Calendar size={18} />
            <span>Reservas</span>
          </a>
          <Link to="/login" className="nav-item">
            <User size={18} />
            <span>Iniciar Sesión</span>
          </Link>
          <button className="btn-primary d-none-mobile">
            Academia Carol Herran
          </button>
          <button className="nav-menu-btn d-mobile">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
