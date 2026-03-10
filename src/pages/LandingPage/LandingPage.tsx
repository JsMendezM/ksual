import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Star } from 'lucide-react';
import './LandingPage.css';

const RECOMENDADOS = [
  {
    id: 1,
    name: 'Ksual Spa',
    location: 'Bogotá, Colombia',
    rating: 4.7,
    reviews: 3,
    services: ['Corte de Cabello', 'Colorimetría'],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Ksual Spa',
    location: 'Bogotá, Colombia',
    rating: 4.8,
    reviews: 65,
    services: ['Henna', 'Diseño de cejas'],
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Ksual Spa',
    location: 'Bogotá, Colombia',
    rating: 4.8,
    reviews: 1939,
    services: ['Manicura OPI', 'Pedicura Spa'],
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Ksual Spa',
    location: 'Bogotá, Colombia',
    rating: 4.9,
    reviews: 120,
    services: ['Laminado de cejas', 'Lifting'],
    image: 'https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Ksual Spa',
    location: 'Bogotá, Colombia',
    rating: 5.0,
    reviews: 84,
    services: ['Pestañas pelo a pelo', 'Diseño de pestañas'],
    image: 'https://images.unsplash.com/photo-1528751512423-f38c353d2627?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'Ksual Spa',
    location: 'Bogotá, Colombia',
    rating: 4.7,
    reviews: 231,
    services: ['Acrílicas', 'Semipermanente'],
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-gradient"></div>
        <div className="container hero-content">
          <SearchBar />

          <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2><span className="text-gradient">791.371</span> citas reservadas hoy</h2>
            <button className="btn-app">
              Obtener la app
            </button>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="recommendations container">
        <h2 className="section-title">Recomendado</h2>

        <div className="cards-grid">
          {RECOMENDADOS.map(item => (
            <div key={item.id} className="venue-card">
              <div className="card-image">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{item.name}</h3>
                  <div className="card-rating">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <span className="rating-score">{item.rating}</span>
                    <span className="rating-count">({item.reviews})</span>
                  </div>
                </div>
                <p className="card-location">{item.location}</p>
                {item.services && (
                  <div className="card-services" style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {item.services.map((service, idx) => (
                      <span key={idx} style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#a78bfa', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 500 }}>
                        {service}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* App Download Section */}
      <section className="app-download-section container">
        <div className="app-download-content">
          <div className="app-download-text">
            <h2>Descarga la app<br />de Ksual Spa</h2>
            <p>Reserva experiencias de belleza y bienestar<br />inolvidables con la app móvil de Ksual Spa</p>
            <div className="qr-placeholder">
              <span>SCAN QR</span>
            </div>
          </div>
          <div className="app-download-images">
            <div className="mockup-bg-shape"></div>
            <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Ksual Spa App preview" className="single-mockup" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section container">
        <h2 className="section-title">Reseñas</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
            </div>
            <h3>El mejor sistema de reservas</h3>
            <p>Una experiencia increíble y fácil de reservar. Pagar los tratamientos es muy sencillo: no se necesita efectivo ni tarjetas.</p>
          </div>
          <div className="review-card">
            <div className="review-stars">
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
            </div>
            <h3>Es fácil de usar y de explorar</h3>
            <p>Los recordatorios de Ksual Spa te hacen la vida mucho más fácil. Además, he descubierto barberías estupendas que no sabía que existían.</p>
          </div>
          <div className="review-card">
            <div className="review-stars">
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
            </div>
            <h3>Es perfecta para encontrar barberos</h3>
            <p>Llevo dos años utilizando Ksual Spa, y es, con diferencia, la mejor plataforma de reservas que he utilizado hasta ahora. ¡Totalmente recomendable!</p>
          </div>
          <div className="review-card">
            <div className="review-stars">
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
            </div>
            <h3>Mi opción preferida para cuidarme</h3>
            <p>Ksual Spa es mi aplicación favorita para masajes y tratamientos faciales. Puedo encontrar establecimientos cerca de mí y hacer reservas fácilmente. ¡Me encanta!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
