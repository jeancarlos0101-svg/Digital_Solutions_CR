import React, { useState } from 'react';
import { 
  CheckCircle, 
  Smartphone, 
  Zap, 
  MessageSquare, 
  Calculator, 
  Globe, 
  ChevronRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Laptop,
  Check,
  Award,
  Code2,
  Cpu,
  Mail,
  Clock,
  MapPin
} from 'lucide-react';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  const [siteType, setSiteType] = useState('landing'); 
  const [hasDomain, setHasDomain] = useState(true);
  const [hasSeo, setHasSeo] = useState(false);
  const [hasCorporateEmail, setHasCorporateEmail] = useState(false);
  const [urgency, setUrgency] = useState('standard'); 

  const calculateTotal = () => {
    let base = 0;
    if (siteType === 'landing') base = 100000; 
    if (siteType === 'multi') base = 210000;   
    if (siteType === 'catalog') base = 320000; 

    if (!hasDomain) base += 25000; 
    if (hasSeo) base += 35000;    
    if (hasCorporateEmail) base += 20000;
    if (urgency === 'express') base += 45000; 

    return base;
  };

  const totalPrice = calculateTotal();

  const generateWhatsAppMessage = () => {
    const siteNames = {
      landing: 'Landing Page Esencial (1 página)',
      multi: 'Sitio Web Multisección (3-5 páginas)',
      catalog: 'Catálogo Digital / Tienda Autoadministrable'
    };

    const text = `¡Hola Digital Solutions CR! 🇨🇷%0A%0AQuiero cotizar mi proyecto web con las siguientes opciones:%0A` +
      `• *Tipo de proyecto:* ${siteNames[siteType]}%0A` +
      `• *Incluir Dominio y Hosting (.com/.cr):* ${!hasDomain ? 'Sí (+₡25,000)' : 'Ya cuento con uno'}%0A` +
      `• *Configuración Google Maps & SEO CR:* ${hasSeo ? 'Sí (+₡35,000)' : 'No por ahora'}%0A` +
      `• *Correo Electrónico Corporativo:* ${hasCorporateEmail ? 'Sí (+₡20,000)' : 'No por ahora'}%0A` +
      `• *Tiempo de Entrega:* ${urgency === 'express' ? 'Express (< 5 días)' : 'Estándar (7-10 días)'}%0A%0A` +
      `*Inversión estimada:* ₡${totalPrice.toLocaleString('es-CR')}%0A%0A` +
      `¿Podemos conversar para agendar el inicio?`;

    return `https://wa.me/50686958492?text=${text}`;
  };

  return (
    <div 
      className="min-vh-100 w-100 m-0 p-0 text-dark" 
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif', overflowX: 'hidden', backgroundColor: '#f8fafc' }}
    >

      {/* TOP NAVIGATION BAR */}
      <header className="navbar navbar-expand-lg sticky-top px-4 px-xl-5 shadow-sm w-100 m-0 navbar-dark" style={{ backgroundColor: '#0b192c' }}>
        <div className="w-100 px-0 d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#home" aria-label="Digital Solutions CR - Inicio">
            <div className="bg-white rounded-circle p-1 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '50px', height: '50px' }}>
              <img src="/logo.jfif" alt="Digital Solutions CR Logo" style={{ width: '42px', height: '42px', objectFit: 'contain' }} />
            </div>
            <div>
              <span className="fs-5 text-white fw-bold">Digital Solutions <span style={{ color: '#10b981' }}>CR</span></span>
              <span className="d-block text-light opacity-75" style={{ fontSize: '0.75rem', marginTop: '-4px' }}>Su aliado tecnológico</span>
            </div>
          </a>

          <button 
            className="navbar-toggler border-0" 
            type="button" 
            onClick={() => setNavOpen(!navOpen)}
            aria-expanded={navOpen}
            aria-controls="navbarNavDropdown"
            aria-label="Abrir o cerrar el menú de navegación principal"
          >
            {navOpen ? <X className="text-white" aria-hidden="true" /> : <Menu className="text-white" aria-hidden="true" />}
          </button>

          <nav id="navbarNavDropdown" className={`collapse navbar-collapse w-100 bg-dark p-3 rounded-bottom shadow-lg ${navOpen ? 'show' : ''}`} style={{ backgroundColor: '#0b192c', position: 'absolute', top: '100%', left: 0 }} aria-label="Navegación Principal">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold align-items-lg-center gap-2 text-center text-lg-start">
              <li className="nav-item">
                <a className="nav-link text-white px-3 py-2" href="#servicios" onClick={() => setNavOpen(false)}>Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-3 py-2" href="#beneficios" onClick={() => setNavOpen(false)}>Ventajas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-3 py-2" href="#cotizador" onClick={() => setNavOpen(false)}>Cotizador ₡</a>
              </li>
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <a 
                  href="https://wa.me/50686958492?text=Hola,%20me%20gustaría%20información%20sobre%20sus%20servicios%20web" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn fw-bold text-white d-inline-flex align-items-center justify-content-center gap-2 px-4 py-2 rounded-pill shadow-sm w-100"
                  style={{ backgroundColor: '#10b981', borderColor: '#10b981' }}
                  aria-label="Hablar con un asesor comercial a través de WhatsApp"
                >
                  <MessageSquare size={18} aria-hidden="true" />
                  <span>Hablar con un Asesor</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT WRAPPER */}
      <main id="main-content" className="w-100 m-0 p-0">
        
        {/* HERO SECTION */}
        <section id="home" className="py-5 text-white position-relative overflow-hidden w-100 m-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #0b192c 0%, #1e293b 60%, #0f172a 100%)' }}>
          <div className="w-100 py-5 px-4 px-md-5 position-relative m-0" style={{ zIndex: 2 }}>
            <div className="row align-items-center gy-4 mx-0 w-100">
              <div className="col-lg-7 ps-0">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white bg-opacity-10 text-emerald fw-bold small mb-3 border border-white border-opacity-25 shadow-sm" style={{ color: '#34d399' }}>
                  <Award size={16} aria-hidden="true" /> 100% Optimizado para PYMES
                </div>
                <h1 className="display-4 fw-extrabold mb-3 lh-sm text-white">
                  Lleve su negocio al siguiente nivel digital en <span style={{ color: '#10b981', borderBottom: '3px solid #10b981' }}>Costa Rica</span>
                </h1>
                <p className="lead text-light opacity-90 mb-4 fs-5" style={{ maxWidth: '650px' }}>
                  Diseñamos sitios web profesionales, rápidos y enfocados en ventas. Hacemos que su PYME destaque y atraiga más clientes en Google.
                </p>

                <div className="d-flex flex-wrap gap-3 mb-4 text-white" aria-label="Características principales de rendimiento">
                  <div className="d-flex align-items-center gap-2 bg-white bg-opacity-10 px-3 py-2 rounded-3 border border-white border-opacity-15 shadow-sm">
                    <Smartphone size={20} style={{ color: '#38bdf8' }} aria-hidden="true" />
                    <span className="small fw-semibold">100% Móvil (Responsive)</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 bg-white bg-opacity-10 px-3 py-2 rounded-3 border border-white border-opacity-15 shadow-sm">
                    <ShieldCheck size={20} style={{ color: '#34d399' }} aria-hidden="true" />
                    <span className="small fw-semibold">Soporte Técnico Especializado</span>
                  </div>
                </div>

                <div className="d-flex flex-column flex-sm-row gap-3">
                  <a href="#cotizador" className="btn btn-lg fw-bold text-white px-4 py-3 rounded-3 shadow-lg d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#10b981', borderColor: '#10b981' }}>
                    <span>Calcular Inversión</span>
                    <ChevronRight size={20} aria-hidden="true" />
                  </a>
                  <a href="#servicios" className="btn btn-outline-light btn-lg fw-bold px-4 py-3 rounded-3 d-flex align-items-center justify-content-center gap-2 shadow-sm">
                    <Laptop size={20} aria-hidden="true" />
                    <span>Ver Servicios Web</span>
                  </a>
                </div>
              </div>

              <div className="col-lg-5 pe-0">
                <article className="card border-0 shadow-lg bg-white text-dark rounded-4 overflow-hidden text-center p-4 p-md-5">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="p-3 mb-3 shadow-sm rounded-4 bg-light d-flex align-items-center justify-content-center border" style={{ width: '200px', height: '200px' }}>
                      <img src="/logo.jfif" alt="Digital Solutions CR Logo Principal" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>

                    <h2 className="h3 fw-bold text-dark mb-1" style={{ letterSpacing: '-0.5px' }}>
                      Digital Solutions <span style={{ color: '#10b981' }}>CR</span>
                    </h2>
                    
                    <span className="badge bg-light text-dark fw-bold px-3 py-1.5 rounded-pill mb-3 border">
                      Su aliado tecnológico 🇨🇷
                    </span>

                    <p className="text-secondary small mb-4 px-2">
                      Desarrollo web moderno, catálogos digitales interactivos y automatización de clientes para empresas.
                    </p>

                    <div className="d-flex justify-content-center gap-3 w-100 pt-3 border-top">
                      <div className="d-flex align-items-center gap-1 text-secondary small">
                        <Code2 size={16} className="text-primary" />
                        <span>React & Bootstrap</span>
                      </div>
                      <div className="d-flex align-items-center gap-1 text-secondary small">
                        <Cpu size={16} style={{ color: '#10b981' }} />
                        <span>Alta Conversión</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN RESUMIDA DE SERVICIOS Y MANTENIMIENTO */}
        <section id="servicios" className="py-5 bg-white w-100 m-0 border-bottom" aria-labelledby="servicios-heading">
          <div className="w-100 py-4 px-4 px-md-5 m-0">
            
            <header className="text-center max-w-2xl mx-auto mb-5">
              <span className="badge bg-light text-dark fw-bold px-3 py-2 rounded-pill mb-2 border shadow-sm">
                Propuesta de Valor
              </span>
              <h2 id="servicios-heading" className="fw-bold text-dark display-6 mb-2">Soluciones Web & Mantenimiento</h2>
              <p className="text-secondary lead fs-6">
                Desarrollamos su plataforma web y nos encargamos de su continuidad técnica.
              </p>
            </header>

            {/* 1. PLANES DE DESARROLLO WEB */}
            <h3 className="fw-bold fs-5 mb-3 text-dark border-start border-4 border-emerald ps-3" style={{ borderColor: '#10b981' }}>
              1. Planes de Desarrollo Web Base
            </h3>
            
            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-light">
                  <div className="card-body p-2">
                    <span className="badge bg-success bg-opacity-10 text-success mb-2 fw-bold">Alta Conversión</span>
                    <h4 className="fw-bold h5">Landing Page Esencial</h4>
                    <p className="text-secondary small mb-3">Ideal para promociones o lanzamientos de servicios específicos.</p>
                    <ul className="list-unstyled small text-secondary mb-0">
                      <li className="mb-2 d-flex align-items-center gap-1"><Check size={16} className="text-success" /> Página única de alto impacto</li>
                      <li className="mb-2 d-flex align-items-center gap-1"><Check size={16} className="text-success" /> Botón directo a WhatsApp</li>
                      <li className="mb-2 d-flex align-items-center gap-1"><Check size={16} className="text-success" /> Formulario de contacto directo</li>
                      <li className="mb-2 d-flex align-items-center gap-1"><Check size={16} className="text-success" /> Optimizado 100% para celulares</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-light">
                  <div className="card-body p-2">
                    <span className="badge bg-primary bg-opacity-10 text-primary mb-2 fw-bold">Más Popular</span>
                    <h4 className="fw-bold h5">Sitio Multisección</h4>
                    <p className="text-secondary small mb-3">Estructura corporativa completa para mostrar todos sus servicios.</p>
                    <ul className="list-unstyled small text-secondary mb-0">
                      <li className="mb-2 d-flex align-items-center gap-1"><Check size={16} className="text-primary" /> 3 a 5 páginas (Inicio, Servicios, etc.)</li>
                      <li className="mb-2 d-flex align-items-center gap-1"><Check size={16} className="text-primary" /> Menú de navegación intuitivo</li>
                      <li className="mb-2 d-flex align-items-center gap-1"><Check size={16} className="text-primary" /> Integración con redes sociales</li>
                      <li className="mb-2 d-flex align-items-center gap-1"><Check size={16} className="text-primary" /> Carga rápida y diseño personalizado</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-light">
                  <div className="card-body p-2">
                    <span className="badge bg-dark bg-opacity-10 text-dark mb-2 fw-bold">Autoadministrable</span>
                    <h4 className="fw-bold h5">Catálogo Digital</h4>
                    <p className="text-secondary small mb-3">Para negocios que exhiben inventarios y reciben pedidos directos.</p>
                    <ul className="list-unstyled small text-secondary mb-0">
                      <li className="mb-2 d-flex align-items-center gap-1"><Check size={16} className="text-dark" /> Panel de administración sencillo</li>
                      <li className="mb-2 d-flex align-items-center gap-1"><Check size={16} className="text-dark" /> Buscador y filtros por categoría</li>
                      <li className="mb-2 d-flex align-items-center gap-1"><Check size={16} className="text-dark" /> Envío de pedidos a WhatsApp</li>
                      <li className="mb-2 d-flex align-items-center gap-1"><Check size={16} className="text-dark" /> Capacitación de uso incluida</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. MÓDULOS ADICIONALES */}
            <h3 className="fw-bold fs-5 mb-3 text-dark border-start border-4 border-emerald ps-3" style={{ borderColor: '#10b981' }}>
              2. Módulos Adicionales
            </h3>

            <div className="row g-3 mb-5">
              <div className="col-6 col-md-3">
                <div className="p-3 bg-light rounded-3 text-center h-100 border shadow-sm">
                  <Globe size={24} className="text-primary mb-2" />
                  <h4 className="fw-bold small mb-1">Dominio + Hosting</h4>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.75rem' }}>Registro (.com / .cr) y servidor por 1 año.</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-light rounded-3 text-center h-100 border shadow-sm">
                  <MapPin size={24} className="text-danger mb-2" />
                  <h4 className="fw-bold small mb-1">SEO Local & Maps</h4>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.75rem' }}>Posicionamiento en Google Business CR.</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-light rounded-3 text-center h-100 border shadow-sm">
                  <Mail size={24} className="text-success mb-2" />
                  <h4 className="fw-bold small mb-1">Correo Corporativo</h4>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.75rem' }}>Dirección oficial (@suempresa.cr).</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-light rounded-3 text-center h-100 border shadow-sm">
                  <Clock size={24} className="text-warning mb-2" />
                  <h4 className="fw-bold small mb-1">Entrega Express</h4>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.75rem' }}>Sitio listo en menos de 5 días hábiles.</p>
                </div>
              </div>
            </div>

            {/* 3. ACOMPAÑAMIENTO Y MANTENIMIENTO POST-ENTREGA */}
            <h3 className="fw-bold fs-5 mb-3 text-dark border-start border-4 border-emerald ps-3" style={{ borderColor: '#10b981' }}>
              3. Acompañamiento y Mantenimiento Post-Entrega
            </h3>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="bg-light p-3 rounded-3 shadow-sm border-start border-4 border-primary h-100 border">
                  <div className="d-flex align-items-center mb-2">
                    <ShieldCheck size={20} className="text-primary me-2" />
                    <h4 className="fw-bold h6 mb-0">Renovación Técnica (Anual)</h4>
                  </div>
                  <p className="text-secondary small mb-0">
                    Garantiza su sitio en línea y seguro año a año. Incluye renovación de dominio, servidor hosting, certificado SSL y respaldos periódicos.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="bg-light p-3 rounded-3 shadow-sm border-start border-4 border-success h-100 border">
                  <div className="d-flex align-items-center mb-2">
                    <Zap size={20} className="text-success me-2" />
                    <h4 className="fw-bold h6 mb-0">Soporte & Mantenimiento Activo (Mensual / Anual)</h4>
                  </div>
                  <p className="text-secondary small mb-0">
                    Asistencia técnica continua y actualización asistida de textos, imágenes, promociones o productos para negocios en constante cambio.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* VALUE PROPOSITION / BENEFICIOS */}
        <section id="beneficios" className="py-5 w-100 m-0" style={{ backgroundColor: '#f1f5f9' }} aria-labelledby="beneficios-heading">
          <div className="w-100 py-4 px-4 px-md-5 m-0">
            <header className="text-center max-w-2xl mx-auto mb-5">
              <span className="badge bg-white text-dark fw-bold px-3 py-2 rounded-pill mb-2 border shadow-sm">
                Ventajas Competitivas
              </span>
              <h2 id="beneficios-heading" className="fw-bold text-dark display-6 mb-2">¿Por qué elegir Digital Solutions CR?</h2>
              <p className="text-secondary lead fs-6">Diseñamos sitios rápidos, accesibles y optimizados para el mercado.</p>
            </header>

            <div className="row g-4 justify-content-center mx-0 w-100">
              <div className="col-md-6">
                <article className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white">
                  <div className="card-body p-0">
                    <div className="rounded-3 p-3 d-inline-block mb-3" style={{ backgroundColor: '#e6f4ea', color: '#10b981' }} aria-hidden="true">
                      <Zap size={28} />
                    </div>
                    <h3 className="h5 fw-bold mb-2">Rendimiento Extremo</h3>
                    <p className="text-secondary small mb-0 lh-base">
                      Construido con React para cargar al instante en dispositivos móviles sin esperas molestas para el cliente.
                    </p>
                  </div>
                </article>
              </div>

              <div className="col-md-6">
                <article className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white">
                  <div className="card-body p-0">
                    <div className="rounded-3 p-3 d-inline-block mb-3" style={{ backgroundColor: '#fef3c7', color: '#d97706' }} aria-hidden="true">
                      <Award size={28} />
                    </div>
                    <h3 className="h5 fw-bold mb-2">Diseño Profesional</h3>
                    <p className="text-secondary small mb-0 lh-base">
                      Interfaz limpia, profesional y adaptada a la identidad corporativa de su empresa o emprendimiento.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* COTIZADOR INTERACTIVO */}
        <section id="cotizador" className="py-5 w-100 m-0" style={{ backgroundColor: '#f1f5f9' }} aria-labelledby="cotizador-heading">
          <div className="w-100 py-4 px-4 px-md-5 m-0">
            <header className="text-center max-w-2xl mx-auto mb-5">
              <span className="badge bg-white text-dark fw-bold px-3 py-2 rounded-pill mb-2 border shadow-sm">
                Transparencia Total
              </span>
              <h2 id="cotizador-heading" className="display-6 fw-bold text-dark mb-2">Cotizador Interactivo en Colones (₡)</h2>
              <p className="text-secondary lead fs-6">
                Seleccione las opciones para su sitio web y obtenga un presupuesto estimado en tiempo real.
              </p>
            </header>

            <div className="row g-4 justify-content-center mx-0 w-100">
              <div className="col-lg-10 col-xl-8 px-0">
                <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white">
                  
                  {/* Step 1: Tipo de Sitio */}
                  <div className="mb-4">
                    <label className="form-label fw-bold text-dark d-flex align-items-center gap-2 mb-3">
                      <Globe size={18} style={{ color: '#10b981' }} aria-hidden="true" /> 
                      1. ¿Qué tipo de sitio web requiere su negocio?
                    </label>
                    <div className="row g-3 mx-0 w-100" role="radiogroup" aria-label="Tipo de Sitio Web">
                      <div className="col-md-4 ps-0">
                        <div 
                          role="radio"
                          aria-checked={siteType === 'landing'}
                          tabIndex={0}
                          onClick={() => setSiteType('landing')}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSiteType('landing'); }}
                          className={`card h-100 p-3 cursor-pointer text-center rounded-3 shadow-sm ${siteType === 'landing' ? 'border-2 border-emerald bg-light shadow' : 'border bg-white'}`}
                          style={{ cursor: 'pointer', borderColor: siteType === 'landing' ? '#10b981' : '#e2e8f0' }}
                        >
                          <span className="fw-bold text-dark d-block mb-1">Landing Page</span>
                          <span className="small text-secondary d-block mb-2">1 Página Directa</span>
                          <span className="fw-bold fs-6" style={{ color: '#10b981' }}>₡100,000</span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div 
                          role="radio"
                          aria-checked={siteType === 'multi'}
                          tabIndex={0}
                          onClick={() => setSiteType('multi')}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSiteType('multi'); }}
                          className={`card h-100 p-3 cursor-pointer text-center rounded-3 shadow-sm ${siteType === 'multi' ? 'border-2 border-emerald bg-light shadow' : 'border bg-white'}`}
                          style={{ cursor: 'pointer', borderColor: siteType === 'multi' ? '#10b981' : '#e2e8f0' }}
                        >
                          <span className="fw-bold text-dark d-block mb-1">Sitio Multisección</span>
                          <span className="small text-secondary d-block mb-2">3 a 5 Páginas</span>
                          <span className="fw-bold fs-6" style={{ color: '#10b981' }}>₡210,000</span>
                        </div>
                      </div>

                      <div className="col-md-4 pe-0">
                        <div 
                          role="radio"
                          aria-checked={siteType === 'catalog'}
                          tabIndex={0}
                          onClick={() => setSiteType('catalog')}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSiteType('catalog'); }}
                          className={`card h-100 p-3 cursor-pointer text-center rounded-3 shadow-sm ${siteType === 'catalog' ? 'border-2 border-emerald bg-light shadow' : 'border bg-white'}`}
                          style={{ cursor: 'pointer', borderColor: siteType === 'catalog' ? '#10b981' : '#e2e8f0' }}
                        >
                          <span className="fw-bold text-dark d-block mb-1">Catálogo Digital</span>
                          <span className="small text-secondary d-block mb-2">Autoadministrable</span>
                          <span className="fw-bold fs-6" style={{ color: '#10b981' }}>₡320,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Extras adicionales */}
                  <div className="mb-4">
                    <label className="form-label fw-bold text-dark d-flex align-items-center gap-2 mb-3">
                      <Calculator size={18} style={{ color: '#10b981' }} aria-hidden="true" />
                      2. Personalización y Módulos Adicionales
                    </label>
                    
                    <div className="d-grid gap-2">
                      <div className="form-check p-3 bg-light rounded-3 border d-flex align-items-center justify-content-between shadow-sm">
                        <div>
                          <input 
                            className="form-check-input me-2" 
                            type="checkbox" 
                            id="checkDomain"
                            checked={!hasDomain}
                            onChange={() => setHasDomain(!hasDomain)}
                          />
                          <label className="form-check-label fw-semibold text-dark cursor-pointer" htmlFor="checkDomain">
                            ¿Necesita registro de Dominio (.com / .cr) y Hosting por 1 año?
                          </label>
                        </div>
                        <span className="badge bg-white text-dark border fw-bold px-2 py-1">+₡25,000</span>
                      </div>

                      <div className="form-check p-3 bg-light rounded-3 border d-flex align-items-center justify-content-between shadow-sm">
                        <div>
                          <input 
                            className="form-check-input me-2" 
                            type="checkbox" 
                            id="checkSeo"
                            checked={hasSeo}
                            onChange={() => setHasSeo(!hasSeo)}
                          />
                          <label className="form-check-label fw-semibold text-dark cursor-pointer" htmlFor="checkSeo">
                            Optimización Google Maps & SEO Local en Costa Rica
                          </label>
                        </div>
                        <span className="badge bg-white text-dark border fw-bold px-2 py-1">+₡35,000</span>
                      </div>

                      <div className="form-check p-3 bg-light rounded-3 border d-flex align-items-center justify-content-between shadow-sm">
                        <div>
                          <input 
                            className="form-check-input me-2" 
                            type="checkbox" 
                            id="checkCorporateEmail"
                            checked={hasCorporateEmail}
                            onChange={() => setHasCorporateEmail(!hasCorporateEmail)}
                          />
                          <label className="form-check-label fw-semibold text-dark cursor-pointer" htmlFor="checkCorporateEmail">
                            Creación y Configuración de Correo Electrónico Corporativo (@suempresa.cr)
                          </label>
                        </div>
                        <span className="badge bg-white text-dark border fw-bold px-2 py-1">+₡20,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Urgencia / Tiempo de entrega */}
                  <div className="mb-4">
                    <label className="form-label fw-bold text-dark d-flex align-items-center gap-2 mb-3">
                      <ShieldCheck size={18} style={{ color: '#10b981' }} aria-hidden="true" />
                      3. Tiempo de Entrega Deseado
                    </label>
                    <div className="row g-3 mx-0 w-100">
                      <div className="col-md-6 ps-0">
                        <div 
                          role="button"
                          tabIndex={0}
                          onClick={() => setUrgency('standard')}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setUrgency('standard'); }}
                          className={`p-3 rounded-3 border cursor-pointer text-center shadow-sm ${urgency === 'standard' ? 'bg-light border-dark fw-bold' : 'bg-white text-secondary'}`}
                        >
                          <span>Estándar (7 - 10 días)</span>
                          <span className="d-block small text-secondary">Sin recargo</span>
                        </div>
                      </div>
                      <div className="col-md-6 pe-0">
                        <div 
                          role="button"
                          tabIndex={0}
                          onClick={() => setUrgency('express')}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setUrgency('express'); }}
                          className={`p-3 rounded-3 border cursor-pointer text-center shadow-sm ${urgency === 'express' ? 'bg-light border-dark fw-bold' : 'bg-white text-secondary'}`}
                        >
                          <span>Express (&lt; 5 días)</span>
                          <span className="d-block small fw-bold" style={{ color: '#10b981' }}>+₡45,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Total Calculation & WhatsApp CTA */}
                  <div className="text-white p-4 p-md-5 rounded-4 text-center mt-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #0b192c 0%, #1e293b 100%)' }}>
                    <span className="text-uppercase tracking-wider small text-light opacity-75 d-block mb-1">Inversión Estimada Total</span>
                    <div className="display-5 fw-bold mb-3 font-monospace" style={{ color: '#34d399' }}>
                      ₡{totalPrice.toLocaleString('es-CR')}
                    </div>
                    <p className="small text-light opacity-85 mb-4">
                      Incluye diseño adaptativo (móvil y PC), optimización de velocidad y estructura modular.
                    </p>
                    <a 
                      href={generateWhatsAppMessage()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-lg fw-bold w-100 text-white d-flex align-items-center justify-content-center gap-2 shadow-lg py-3 rounded-pill"
                      style={{ backgroundColor: '#10b981', borderColor: '#10b981' }}
                      aria-label="Enviar cotización calculada directamente a nuestro WhatsApp"
                    >
                      <MessageSquare size={22} aria-hidden="true" />
                      <span>Enviar Cotización por WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="text-white py-4 border-top border-secondary w-100 m-0" style={{ backgroundColor: '#0b192c' }}>
        <div className="w-100 py-3 px-4 px-md-5 text-center text-md-start m-0">
          <div className="row align-items-center gy-3 mx-0 w-100">
            <div className="col-md-6 ps-0">
              <span className="fw-bold fs-5 text-white">Digital Solutions <span style={{ color: '#10b981' }}>CR</span></span>
              <p className="small text-secondary mb-0">Su aliado tecnológico para el éxito digital de las PYMES.</p>
            </div>
            <div className="col-md-6 pe-0 text-md-end small text-secondary">
              <p className="mb-0">© {new Date().getFullYear()} Digital Solutions CR. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}