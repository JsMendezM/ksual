import { Search, MapPin, Calendar as CalendarIcon } from 'lucide-react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar animate-fade-in">
      <div className="search-input-group">
        <Search className="search-icon" size={20} />
        <input 
          type="text" 
          placeholder="Todos los tratamientos y establecimientos" 
          className="search-input"
        />
      </div>
      
      <div className="search-divider"></div>
      
      <div className="search-input-group">
        <MapPin className="search-icon" size={20} />
        <input 
          type="text" 
          placeholder="Ubicación actual" 
          className="search-input"
        />
      </div>
      
      <div className="search-divider d-none-mobile"></div>
      
      <div className="search-input-group d-none-mobile">
        <CalendarIcon className="search-icon" size={20} />
        <input 
          type="text" 
          placeholder="En cualquier momento" 
          readOnly
          className="search-input interactive"
        />
      </div>
      
      <button className="btn-search">Buscar</button>
    </div>
  );
};

export default SearchBar;
