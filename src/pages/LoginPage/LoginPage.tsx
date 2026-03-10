import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, UserCircle2, Store, Lock, User as UserIcon, Mail } from 'lucide-react';
import './LoginPage.css';

type LoginView = 'roles' | 'pro' | 'client-email' | 'client-password';

const LoginPage = () => {
  const [currentView, setCurrentView] = useState<LoginView>('roles');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleProLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === '123') {
      navigate('/dashboard');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  const handleClientEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setCurrentView('client-password');
      setError('');
    }
  };

  const handleClientPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '123') {
      navigate('/client-dashboard');
    } else {
      setError('Contraseña incorrecta. Usa "123".');
    }
  };

  const renderHeader = () => {
    switch (currentView) {
      case 'pro':
        return (
          <>
            <h2>Acceso Profesional</h2>
            <p className="login-subtitle">Ingresa tus credenciales para administrar tu negocio</p>
          </>
        );
      case 'client-email':
        return (
          <>
            <h2>Ksual Spa para clientes</h2>
            <p className="login-subtitle">Crea una cuenta o inicia sesión para reservar y gestionar tus citas.</p>
          </>
        );
      case 'client-password':
        return (
          <>
            <h2>Hola de nuevo</h2>
            <p className="login-subtitle">
              Introduce tu contraseña e inicia sesión como<br />
              <strong>{email}</strong>
            </p>
          </>
        );
      default:
        return (
          <>
            <h2>Regístrate/inicia sesión</h2>
            <p className="login-subtitle">Elige cómo quieres usar nuestra plataforma</p>
          </>
        );
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Left Side: Forms/Action */}
        <div className="login-content">
          <button
            className="back-link btn-back-transparent"
            onClick={() => {
              if (currentView === 'roles') navigate('/');
              else if (currentView === 'client-password') setCurrentView('client-email');
              else setCurrentView('roles');
              setError('');
            }}
          >
            <ArrowLeft size={18} />
            {currentView === 'roles' ? 'Inicio' : 'Atrás'}
          </button>

          <div className="login-header">
            <h1 className="brand-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <span className="text-gradient">Ksual Spa</span>
              <span style={{ color: '#fff' }}>Rostros que Inspiran</span>
            </h1>
            {renderHeader()}
          </div>

          <div className="role-cards animate-fade-in">
            {currentView === 'roles' && (
              <>
                {/* Client Role */}
                <button
                  className="role-card group"
                  onClick={() => setCurrentView('client-email')}
                >
                  <div className="role-icon">
                    <UserCircle2 size={32} />
                  </div>
                  <div className="role-text">
                    <h3>Clientes Ksual</h3>
                    <p>Reserva en centros de belleza y spas cerca de ti</p>
                  </div>
                  <div className="role-arrow">
                    <span className="arrow-icon">→</span>
                  </div>
                </button>

                {/* Professional Role */}
                <button
                  className="role-card group"
                  onClick={() => setCurrentView('pro')}
                >
                  <div className="role-icon">
                    <Store size={32} />
                  </div>
                  <div className="role-text">
                    <h3>Profesionales Ksual</h3>
                    <p>Gestiona tu negocio y hazlo crecer</p>
                  </div>
                  <div className="role-arrow">
                    <span className="arrow-icon">→</span>
                  </div>
                </button>
              </>
            )}

            {currentView === 'client-email' && (
              <div className="client-login-flow animate-fade-in">
                <div className="social-buttons">
                  <button className="btn-social">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Facebook" className="social-icon" />
                    Continuar con Facebook
                  </button>
                  <button className="btn-social">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="social-icon" />
                    Continuar con Google
                  </button>
                </div>

                <div className="divider">
                  <span>o</span>
                </div>

                <form className="pro-login-form" onSubmit={handleClientEmailSubmit}>
                  <div className="form-group">
                    <div className="input-wrapper">
                      <Mail size={18} className="input-icon" />
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn-primary-full">
                      Continuar
                    </button>
                  </div>
                </form>

                <div className="pro-signup-prompt">
                  <p>¿Tienes una cuenta de negocio?</p>
                  <button className="link-button" onClick={() => setCurrentView('pro')}>
                    Regístrate como profesional
                  </button>
                </div>
              </div>
            )}

            {currentView === 'client-password' && (
              <form className="pro-login-form animate-fade-in" onSubmit={handleClientPasswordSubmit}>
                <div className="form-group">
                  <label htmlFor="client-password">Contraseña *</label>
                  <div className="input-wrapper">
                    <Lock size={18} className="input-icon" />
                    <input
                      type="password"
                      id="client-password"
                      placeholder="••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {error && <p className="error-message">{error}</p>}

                <div className="form-actions">
                  <button type="submit" className="btn-primary-full">
                    Iniciar sesión
                  </button>
                </div>

                <a href="#" className="forgot-password-link">¿Has olvidado tu contraseña?</a>
              </form>
            )}

            {currentView === 'pro' && (
              <form className="pro-login-form animate-fade-in" onSubmit={handleProLogin}>
                <div className="form-group">
                  <label htmlFor="username">Usuario</label>
                  <div className="input-wrapper">
                    <UserIcon size={18} className="input-icon" />
                    <input
                      type="text"
                      id="username"
                      placeholder="admin"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <div className="input-wrapper">
                    <Lock size={18} className="input-icon" />
                    <input
                      type="password"
                      id="password"
                      placeholder="••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {error && <p className="error-message">{error}</p>}

                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={() => setCurrentView('roles')}>
                    Volver
                  </button>
                  <button type="submit" className="btn-primary-full">
                    Ingresar
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="login-footer">
            <p>Al continuar, aceptas nuestros <a href="#" className="link">Términos de servicio</a> y <a href="#" className="link">Política de privacidad</a>.</p>
          </div>
        </div>

        {/* Right Side: Image Cover */}
        <div className="login-cover">
          <div className="cover-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt="Ksual Spa Professional"
            className="cover-image"
          />
          <div className="cover-text">
            <h2>Descubre y reserva</h2>
            <p>Los mejores tratamientos de belleza al alcance de tu mano.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
