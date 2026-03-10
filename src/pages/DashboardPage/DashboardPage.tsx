import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Calendar, 
  Users, 
  Bell, 
  Settings, 
  Globe, 
  Banknote, 
  Package, 
  LayoutDashboard,
  LogOut,
  Search,
  Plus
} from 'lucide-react';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">
            <span className="text-gradient">MB</span>
          </Link>
        </div>
        
        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li className="nav-item active">
              <span className="nav-icon"><LayoutDashboard size={20} /></span>
              <span className="nav-label">Panel</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon"><Calendar size={20} /></span>
              <span className="nav-label">Agenda</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon"><Users size={20} /></span>
              <span className="nav-label">Clientes</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon"><Banknote size={20} /></span>
              <span className="nav-label">Caja & Ventas</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon"><Package size={20} /></span>
              <span className="nav-label">Inventario</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon"><BarChart3 size={20} /></span>
              <span className="nav-label">Informes</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon"><Globe size={20} /></span>
              <span className="nav-label">Reservas Online</span>
            </li>
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <ul className="nav-list">
            <li className="nav-item">
              <span className="nav-icon"><Bell size={20} /></span>
              <span className="nav-label">Notificaciones</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon"><Settings size={20} /></span>
              <span className="nav-label">Configuración</span>
            </li>
            <li className="nav-item">
              <Link to="/login" style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                <span className="nav-icon"><LogOut size={20} /></span>
                <span className="nav-label">Salir</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Header */}
        <header className="dashboard-header">
          <div className="search-bar-sm">
            <Search size={18} className="search-icon-sm" />
            <input type="text" placeholder="Buscar clientes, citas..." />
          </div>
          
          <div className="header-actions">
            <button className="btn-primary-sm">
              <Plus size={16} />
              <span>Nueva cita</span>
            </button>
            <div className="user-profile-btn">
              <img src="https://ui-avatars.com/api/?name=Admin&background=8b5cf6&color=fff" alt="Profile" className="avatar" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content animate-fade-in">
          <div className="welcome-section">
            <h1>Hola de nuevo, <span className="text-gradient">Admin</span> 👋</h1>
            <p>Aquí tienes un resumen de tu negocio para hoy.</p>
          </div>
          
          {/* Quick Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon bg-purple"><Calendar size={24} /></div>
              <div className="stat-info">
                <h3>Citas hoy</h3>
                <p className="stat-value">12</p>
                <span className="stat-change positive">+2 vs ayer</span>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon bg-green"><Banknote size={24} /></div>
              <div className="stat-info">
                <h3>Ingresos</h3>
                <p className="stat-value">$450.00</p>
                <span className="stat-change positive">+15% vs ayer</span>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon bg-blue"><Users size={24} /></div>
              <div className="stat-info">
                <h3>Nuevos clientes</h3>
                <p className="stat-value">5</p>
                <span className="stat-change neutral">Igual que ayer</span>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon bg-pink"><Package size={24} /></div>
              <div className="stat-info">
                <h3>Servicios / Paquetes</h3>
                <p className="stat-value">3</p>
                <span className="stat-change negative">-1 vs ayer</span>
              </div>
            </div>
          </div>

          <div className="dashboard-grid">
            {/* Calendar Widget */}
            <div className="dashboard-card calendar-widget">
              <div className="card-header">
                <h2>Agenda Interactiva</h2>
                <button className="btn-icon"><Calendar size={18} /></button>
              </div>
              <div className="calendar-placeholder">
                <div className="timeline">
                  <div className="time-slot"><span className="time">09:00</span> <div className="appointment act-purple">Corte de cabello - Ana García</div></div>
                  <div className="time-slot"><span className="time">10:30</span> <div className="appointment act-pink">Manicura Spa - María López</div></div>
                  <div className="time-slot"><span className="time">12:00</span> <div className="appointment border-dashed">Disponible</div></div>
                  <div className="time-slot"><span className="time">14:00</span> <div className="appointment act-blue">Masaje Relajante - Carlos Ruíz</div></div>
                </div>
              </div>
            </div>

            {/* Quick Actions / Reports */}
            <div className="dashboard-column">
              <div className="dashboard-card integration-widget">
                <div className="card-header">
                  <h2>Integraciones</h2>
                </div>
                <div className="integration-list">
                  <div className="integration-item">
                    <div className="int-info">
                      <div className="int-icon bg-google">G</div>
                      <div>
                        <h4>Google Calendar</h4>
                        <p>Sincronizado hace 5 min</p>
                      </div>
                    </div>
                    <span className="badge active">Activo</span>
                  </div>
                  <div className="integration-item">
                    <div className="int-info">
                      <div className="int-icon bg-google">G</div>
                      <div>
                        <h4>Reservas con Google</h4>
                        <p>Atrae clientes desde Maps</p>
                      </div>
                    </div>
                    <span className="badge active">Activo</span>
                  </div>
                </div>
              </div>

              <div className="dashboard-card reports-widget mt-4">
                <div className="card-header">
                  <h2>Rendimiento del equipo</h2>
                  <button className="btn-icon"><BarChart3 size={18} /></button>
                </div>
                <div className="team-list">
                  <div className="team-member">
                    <img src="https://ui-avatars.com/api/?name=Sofia+M" alt="Sofia" className="avatar-sm" />
                    <div className="member-info">
                      <h4>Sofia M.</h4>
                      <p>5 servicios</p>
                    </div>
                    <span className="member-score">98%</span>
                  </div>
                  <div className="team-member">
                    <img src="https://ui-avatars.com/api/?name=Juan+P" alt="Juan" className="avatar-sm" />
                    <div className="member-info">
                      <h4>Juan P.</h4>
                      <p>3 servicios</p>
                    </div>
                    <span className="member-score">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
