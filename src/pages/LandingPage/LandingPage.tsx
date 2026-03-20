import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const LandingPage = () => {
  return (
    <div className="bg-background-dark min-h-screen text-slate-100 selection:bg-primary selection:text-white pb-20">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[870px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/60 to-background-dark z-10"></div>
            <img
              alt="Spa environment"
              className="w-full h-full object-cover opacity-60"
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1920"
            />
          </div>
          <div className="relative z-20 text-center max-w-4xl px-6">
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-slate-100 drop-shadow-2xl animate-fade-in-up">
              Rostros que <span className="text-primary italic text-gradient-primary">Inspiran</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-12">
              Experiencias de belleza y bienestar con un toque de elegancia magenta.
            </p>

            {/* Booking Filter Bar */}
            <div className="glass-premium rounded-2xl p-3 max-w-5xl mx-auto flex flex-col md:flex-row gap-3 animate-float">
              <div className="flex-1 flex items-center bg-background-dark/60 rounded-xl px-5 py-3 border border-primary/20 hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary mr-3 text-2xl drop-shadow-[0_0_8px_rgba(236,19,236,0.6)]">spa</span>
                <div className="text-left flex-1">
                  <p className="text-[10px] uppercase font-bold text-primary/80 tracking-wider">Servicio</p>
                  <select className="bg-transparent border-none text-slate-100 p-0 text-sm focus:ring-0 w-full font-medium outline-none cursor-pointer appearance-none">
                    <option className="bg-background-dark text-slate-100">Limpieza Facial</option>
                    <option className="bg-background-dark text-slate-100">Masaje Relajante</option>
                    <option className="bg-background-dark text-slate-100">Tratamiento VIP</option>
                  </select>
                </div>
              </div>
              <div className="flex-1 flex items-center bg-background-dark/60 rounded-xl px-5 py-3 border border-primary/20 hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary mr-3 text-2xl drop-shadow-[0_0_8px_rgba(236,19,236,0.6)]">person_2</span>
                <div className="text-left flex-1">
                  <p className="text-[10px] uppercase font-bold text-primary/80 tracking-wider">Profesional</p>
                  <select className="bg-transparent border-none text-slate-100 p-0 text-sm focus:ring-0 w-full font-medium outline-none cursor-pointer appearance-none">
                    <option className="bg-background-dark text-slate-100">Carol Herran</option>
                    <option className="bg-background-dark text-slate-100">Cualquier Profesional</option>
                  </select>
                </div>
              </div>
              <div className="flex-1 flex items-center bg-background-dark/60 rounded-xl px-5 py-3 border border-primary/20 hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary mr-3 text-2xl drop-shadow-[0_0_8px_rgba(236,19,236,0.6)]">calendar_month</span>
                <div className="text-left flex-1">
                  <p className="text-[10px] uppercase font-bold text-primary/80 tracking-wider">Fecha</p>
                  <input className="bg-transparent border-none text-slate-100 p-0 text-sm focus:ring-0 w-full font-medium outline-none [color-scheme:dark]" type="date" />
                </div>
              </div>
              <button className="bg-primary text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-background-dark focus:ring-4 focus:ring-primary/50 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(236,19,236,0.5)]">
                <span className="material-symbols-outlined">search</span>
                BUSCAR
              </button>
            </div>
          </div>
        </section>

        {/* Recommended Services */}
        <section className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>

          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary"></span>
                Nuestros favoritos para ti
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-100">Servicios Recomendados</h2>
            </div>
            <button className="hidden md:flex text-slate-400 hover:text-primary font-bold items-center gap-2 transition-colors uppercase tracking-widest text-sm border-b border-transparent hover:border-primary pb-1">
              VER TODOS <span className="material-symbols-outlined">trending_flat</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group cursor-pointer glass-card rounded-[2rem] p-4">
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] mb-6">
                <img alt="Facial Deep Cleaning" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-primary/90 backdrop-blur-md text-white border border-white/20 text-[10px] font-black px-3 py-1.5 rounded-full uppercase mb-3 inline-block shadow-lg shadow-primary/30">Popular</span>
                  <h3 className="text-2xl font-bold text-white mb-1">Limpieza Facial Deep</h3>
                </div>
              </div>
              <div className="flex justify-between items-center px-2 pb-2">
                <div>
                  <p className="text-slate-400 text-sm mb-1 font-light">Renovación total</p>
                  <p className="text-white font-black text-xl flex items-center gap-2">
                    <span className="text-primary">$</span>60.000
                  </p>
                </div>
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary hover:text-white transition-all hover:rotate-90 group">
                  <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">add</span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer glass-card rounded-[2rem] p-4">
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] mb-6">
                <img alt="Relaxing Massage" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-primary/90 backdrop-blur-md text-white border border-white/20 text-[10px] font-black px-3 py-1.5 rounded-full uppercase mb-3 inline-block shadow-lg shadow-primary/30">Paz Interior</span>
                  <h3 className="text-2xl font-bold text-white mb-1">Masaje Relajante</h3>
                </div>
              </div>
              <div className="flex justify-between items-center px-2 pb-2">
                <div>
                  <p className="text-slate-400 text-sm mb-1 font-light">Relajación profunda</p>
                  <p className="text-white font-black text-xl flex items-center gap-2">
                    <span className="text-primary">$</span>85.000
                  </p>
                </div>
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary hover:text-white transition-all hover:rotate-90 group">
                  <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">add</span>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer glass-card rounded-[2rem] p-4">
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] mb-6">
                <img alt="Hydrating Treatment" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-primary/90 backdrop-blur-md text-white border border-white/20 text-[10px] font-black px-3 py-1.5 rounded-full uppercase mb-3 inline-block shadow-lg shadow-primary/30">Brillo Natural</span>
                  <h3 className="text-2xl font-bold text-white mb-1">Hidratación VIP</h3>
                </div>
              </div>
              <div className="flex justify-between items-center px-2 pb-2">
                <div>
                  <p className="text-slate-400 text-sm mb-1 font-light">Nutrición extrema</p>
                  <p className="text-white font-black text-xl flex items-center gap-2">
                    <span className="text-primary">$</span>75.000
                  </p>
                </div>
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary hover:text-white transition-all hover:rotate-90 group">
                  <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">add</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section - Editorial Style */}
        <section className="relative py-32 overflow-hidden bg-background-dark border-y border-white/5">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-5/12 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-[2rem] p-2 glass-premium">
                <img
                  alt="Carol Herran Professional"
                  className="relative z-10 w-full h-[650px] object-cover rounded-[1.5rem] filter grayscale hover:grayscale-0 transition-all duration-1000"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-background-dark border border-white/10 p-6 rounded-2xl shadow-2xl z-20 hidden md:block glass-premium">
                <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
              </div>
            </div>

            <div className="w-full md:w-7/12">
              <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-primary"></span>
                La mente detrás del arte
              </p>
              <h2 className="text-6xl md:text-7xl font-black text-slate-100 mb-8 leading-[1.1] tracking-tight">
                Carol Herran<br />
                <span className="text-4xl text-slate-500 font-light italic font-serif tracking-normal block mt-2">Fundadora & CEO</span>
              </h2>
              <p className="text-slate-400 text-xl font-light leading-relaxed mb-12 max-w-2xl">
                Con más de 12 años de experiencia internacional, Carol ha transformado el concepto de estética en una forma de arte. <strong className="text-white font-semibold">Ksual Spa</strong> no es solo un centro de belleza, es un refugio de alto nivel donde la ciencia dermatológica y el bienestar profundo convergen.
              </p>

              <div className="grid grid-cols-2 gap-10 mb-12 p-8 glass-premium rounded-3xl border border-white/5 inline-flex w-full max-w-xl">
                <div>
                  <p className="text-5xl font-black text-white flex items-end gap-1 mb-2">
                    12<span className="text-primary text-3xl">k+</span>
                  </p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Clientas Exclusivas</p>
                </div>
                <div className="w-[1px] bg-white/10 h-full mx-auto self-center absolute left-1/2"></div>
                <div>
                  <p className="text-5xl font-black text-white flex items-end gap-1 mb-2">
                    15<span className="text-primary text-3xl">+</span>
                  </p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Certificaciones Int.</p>
                </div>
              </div>

              <div>
                <button className="group text-white font-bold uppercase tracking-widest text-sm flex items-center gap-4 hover:text-primary transition-colors">
                  CONOCE NUESTRA HISTORIA
                  <div className="w-10 h-10 rounded-full border border-white/30 group-hover:border-primary flex items-center justify-center group-hover:bg-primary/10 transition-all">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 max-w-7xl mx-auto px-6 text-center relative">
          <h2 className="text-5xl md:text-6xl font-black text-slate-100 mb-4">Testimonios <span className="font-serif italic text-primary font-light">Reales</span></h2>
          <p className="text-slate-500 mb-20 max-w-lg mx-auto uppercase tracking-[0.2em] text-xs font-bold">Lo que la élite dice sobre nosotros</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-3xl text-left border-t border-white/5 relative group hover:-translate-y-2 transition-transform duration-500">
              <span className="material-symbols-outlined text-primary text-6xl opacity-10 absolute top-6 right-6 font-serif">format_quote</span>
              <div className="flex gap-1 text-primary mb-8 drop-shadow-[0_0_5px_rgba(236,19,236,0.5)]">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-slate-300 text-lg font-light mb-10 leading-relaxed">"Increíble atención. La limpieza facial profunda dejó mi piel renovada, Carol tiene unas manos mágicas. Un oasis en la ciudad."</p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200" alt="Mariana Valenzuela" className="w-14 h-14 rounded-full object-cover border-2 border-primary/30" />
                <div>
                  <h4 className="text-slate-100 font-bold tracking-wide">Mariana Valenzuela</h4>
                  <p className="text-primary/80 text-[10px] uppercase font-bold tracking-widest mt-1">Cliente VIP</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 rounded-3xl text-left border-t border-white/5 relative group hover:-translate-y-2 transition-transform duration-500 md:-translate-y-6">
              <span className="material-symbols-outlined text-primary text-6xl opacity-10 absolute top-6 right-6 font-serif">format_quote</span>
              <div className="flex gap-1 text-primary mb-8 drop-shadow-[0_0_5px_rgba(236,19,236,0.5)]">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-slate-300 text-lg font-light mb-10 leading-relaxed">"El mejor spa de la ciudad sin ninguna duda. El ambiente es relajante, sofisticado y el servicio de masajes es de otro mundo."</p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200" alt="Ricardo Orozco" className="w-14 h-14 rounded-full object-cover border-2 border-primary/30" />
                <div>
                  <h4 className="text-slate-100 font-bold tracking-wide">Ricardo Orozco</h4>
                  <p className="text-primary/80 text-[10px] uppercase font-bold tracking-widest mt-1">Empresario</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 rounded-3xl text-left border-t border-white/5 relative group hover:-translate-y-2 transition-transform duration-500">
              <span className="material-symbols-outlined text-primary text-6xl opacity-10 absolute top-6 right-6 font-serif">format_quote</span>
              <div className="flex gap-1 text-primary mb-8 drop-shadow-[0_0_5px_rgba(236,19,236,0.5)]">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-slate-300 text-lg font-light mb-10 leading-relaxed">"Ksual Spa superó todas mis expectativas. La hidratación facial con productos premium cambió por completo la textura de mi rostro."</p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200" alt="Laura Gómez" className="w-14 h-14 rounded-full object-cover border-2 border-primary/30" />
                <div>
                  <h4 className="text-slate-100 font-bold tracking-wide">Laura Gómez</h4>
                  <p className="text-primary/80 text-[10px] uppercase font-bold tracking-widest mt-1">Modelo Profesional</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-dark border-t border-white/5 pt-24 pb-10 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary">
                  <svg className="w-8 h-8 drop-shadow-[0_0_8px_rgba(236,19,236,0.6)]" fill="currentColor" viewBox="0 0 48 48">
                    <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-slate-100">Ksual Spa</h2>
              </div>
              <p className="text-slate-400 font-light italic font-serif mb-8 text-lg">Rostros que Inspiran</p>
              <div className="flex gap-4">
                <Link to="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-white">camera</span>
                </Link>
                <Link to="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-white">thumb_up</span>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Menú Exclusivo</h4>
              <ul className="space-y-4">
                <li><Link to="#" className="text-slate-400 font-light hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all"></span> Reservas VIP</Link></li>
                <li><Link to="/login" className="text-slate-400 font-light hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all"></span> Acceso Clientes</Link></li>
                <li><Link to="#" className="text-slate-400 font-light hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all"></span> La Academia</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Servicios Especiales</h4>
              <ul className="space-y-4">
                <li><Link to="#" className="text-slate-400 font-light hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all"></span> Alta Estética Facial</Link></li>
                <li><Link to="#" className="text-slate-400 font-light hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all"></span> Masoterapia</Link></li>
                <li><Link to="#" className="text-slate-400 font-light hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all"></span> Rituales Corporales</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">El Círculo Ksual</h4>
              <p className="text-slate-400 text-sm font-light mb-6 leading-relaxed">Suscríbete a nuestro boletín para invitaciones privadas y artículos de bienestar.</p>
              <div className="flex border-b border-white/20 py-2 focus-within:border-primary transition-colors">
                <input className="bg-transparent border-none text-slate-100 focus:ring-0 text-sm flex-1 font-light outline-none" placeholder="Tu correo electrónico" type="email" />
                <button className="text-primary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">Unirse</button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] gap-6">
            <p>© {new Date().getFullYear()} KSUAL SPA. TODOS LOS DERECHOS RESERVADOS.</p>
            <div className="flex gap-8">
              <Link to="#" className="hover:text-primary transition-colors">Términos</Link>
              <Link to="#" className="hover:text-primary transition-colors">Privacidad</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
