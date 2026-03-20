import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 drop-shadow-[0_0_8px_rgba(236,19,236,0.6)]" fill="currentColor" viewBox="0 0 48 48">
              <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-100">Ksual Spa</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link to="#" className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors uppercase tracking-widest">
            Reservas
          </Link>
          <Link to="/login" className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors uppercase tracking-widest">
            Iniciar sesión
          </Link>
          <Link to="#" className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors uppercase tracking-widest">
            Academia
          </Link>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(236,19,236,0.4)]">
            RESERVAR AHORA
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
