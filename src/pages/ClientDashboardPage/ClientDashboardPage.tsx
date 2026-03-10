import { useNavigate } from 'react-router-dom';
import {
  User,
  History,
  CreditCard,
  Heart,
  FileText,
  ShoppingBag,
  Settings,
  Pencil,
  Home,
  Briefcase,
  Plus
} from 'lucide-react';
import './ClientDashboardPage.css';

const ClientDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="client-dashboard-layout">
      {/* Top Header / Navbar substitution */}
      <header className="client-header">
        <div className="container header-container">
          <div className="header-brand" onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <span className="text-gradient" style={{ marginRight: '6px' }}>Ksual Spa</span>
            <span style={{ color: '#fff', fontWeight: 'bold' }}>Rostros que Inspiran</span>
          </div>
          <div className="header-nav">
            <span className="header-link">Todos los tratamientos</span>
            <span className="header-link">Ubicación actual</span>
            <span className="header-link">En cualquier momento</span>
          </div>
          <div className="header-user">
            <img src="https://ui-avatars.com/api/?name=Jonathan+Mendez&background=8b5cf6&color=fff" alt="Perfil" className="avatar-sm" />
          </div>
        </div>
      </header>

      <div className="container dashboard-body">
        {/* Sidebar */}
        <aside className="client-sidebar">
          <div className="sidebar-profile-info">
            <h3>Jonathan Mendez</h3>
          </div>

          <nav className="client-sidebar-nav">
            <ul className="nav-list">
              <li className="nav-item active">
                <span className="nav-icon"><User size={20} /></span>
                <span className="nav-label">Perfil</span>
              </li>
              <li className="nav-item">
                <span className="nav-icon"><History size={20} /></span>
                <span className="nav-label">Historial</span>
              </li>
              <li className="nav-item">
                <span className="nav-icon"><CreditCard size={20} /></span>
                <span className="nav-label">Billetera</span>
              </li>
              <li className="nav-item">
                <span className="nav-icon"><Heart size={20} /></span>
                <span className="nav-label">Favoritos</span>
              </li>
              <li className="nav-item">
                <span className="nav-icon"><FileText size={20} /></span>
                <span className="nav-label">Formularios</span>
              </li>
              <li className="nav-item">
                <span className="nav-icon"><ShoppingBag size={20} /></span>
                <span className="nav-label">Pedidos de productos</span>
              </li>
              <li className="nav-item">
                <span className="nav-icon"><Settings size={20} /></span>
                <span className="nav-label">Ajustes</span>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="client-main-content">
          <h1 className="page-title">Perfil</h1>

          <div className="profile-grid">
            {/* User Details Card */}
            <div className="client-card profile-details-card animate-fade-in">
              <div className="card-header-action">
                <button className="btn-link">Editar</button>
              </div>

              <div className="profile-avatar-container">
                <div className="profile-avatar-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Jonathan Mendez"
                    className="profile-avatar-large"
                  />
                  <button className="btn-edit-avatar">
                    <Pencil size={14} />
                  </button>
                </div>
                <h2>Jonathan Mendez</h2>
              </div>

              <div className="profile-info-list">
                <div className="info-group">
                  <label>Nombre</label>
                  <p>Jonathan</p>
                </div>
                <div className="info-group">
                  <label>Apellido</label>
                  <p>Mendez</p>
                </div>
                <div className="info-group">
                  <label>Número de teléfono</label>
                  <p>+57 312 5083644</p>
                </div>
              </div>
            </div>

            {/* Addresses Card */}
            <div className="client-card addresses-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="card-header">
                <h2>Mis direcciones</h2>
              </div>

              <div className="address-list">
                <div className="address-item">
                  <div className="address-icon">
                    <Home size={20} />
                  </div>
                  <div className="address-info">
                    <h4>Inicio</h4>
                    <p>Añadir la dirección de un domicilio</p>
                  </div>
                </div>

                <div className="address-item">
                  <div className="address-icon">
                    <Briefcase size={20} />
                  </div>
                  <div className="address-info">
                    <h4>Trabajo</h4>
                    <p>Añadir una dirección de trabajo</p>
                  </div>
                </div>
              </div>

              <button className="btn-add-address">
                <Plus size={16} />
                Añadir
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientDashboardPage;
