export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&auto=format&fit=crop&q=80"
          alt="Luxury salon interior"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-label">Premium Unisex Salon — Est. 2009</p>
        <h1 className="hero-title">Where Beauty <em>Meets</em> Elegance</h1>
        <p className="hero-subtitle">
          Experience the art of grooming and styling in an atmosphere of refined luxury.
          Your transformation begins here.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Book Appointment
          </a>
          <a href="#services" className="btn btn-outline">Explore Services</a>
        </div>
      </div>

      {/* Stats bar at bottom of hero */}
      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-number">15+</span>
          <span className="hero-stat-label">Years Experience</span>
        </div>
        <div className="hero-stat-divider"></div>
        <div className="hero-stat">
          <span className="hero-stat-number">5,000+</span>
          <span className="hero-stat-label">Happy Clients</span>
        </div>
        <div className="hero-stat-divider"></div>
        <div className="hero-stat">
          <span className="hero-stat-number">12</span>
          <span className="hero-stat-label">Expert Stylists</span>
        </div>
        <div className="hero-stat-divider"></div>
        <div className="hero-stat">
          <span className="hero-stat-number">4.9★</span>
          <span className="hero-stat-label">Google Rating</span>
        </div>
      </div>
    </section>
  )
}