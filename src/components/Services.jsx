const services = [
  {
    title: "Hair Styling",
    desc: "Precision cuts, blowouts, and styling for every occasion. Our expert stylists craft looks tailored to your face shape and lifestyle.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M9.5 2a.5.5 0 0 1 .5.5V4h4V2.5a.5.5 0 0 1 1 0V4h1a2 2 0 0 1 2 2v1H6V6a2 2 0 0 1 2-2h1V2.5a.5.5 0 0 1 .5-.5z"/>
        <path d="M6 9h12l-1.5 9H7.5L6 9z"/>
        <path d="M10 13v3M14 13v3"/>
      </svg>
    )
  },
  {
    title: "Hair Coloring",
    desc: "Expert color services including highlights, balayage, ombre, and full color transformations using premium products.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M12 2C8 2 5 5 5 9c0 4 7 13 7 13s7-9 7-13c0-4-3-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    )
  },
  {
    title: "Beard Grooming",
    desc: "Professional beard shaping, trimming, hot towel treatments, and straight razor finishes for a sharp, polished look.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4"/>
        <path d="M8 14c-3 1-5 3-5 5h18c0-2-2-4-5-5"/>
        <path d="M10 17c0 2 4 2 4 0"/>
      </svg>
    )
  },
  {
    title: "Facial Treatments",
    desc: "Rejuvenating facials, deep cleansing, and skin-revitalizing treatments to restore your natural glow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M12 3C7 3 4 7 4 11c0 3 1.5 5.5 4 7v2h8v-2c2.5-1.5 4-4 4-7 0-4-3-8-8-8z"/>
        <path d="M9 11h.01M15 11h.01M9 15s1 1.5 3 1.5 3-1.5 3-1.5"/>
      </svg>
    )
  },
  {
    title: "Nail Artistry",
    desc: "Manicures, pedicures, gel nails, and creative nail art designed to complement your personal style.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M7 3h10l2 6H5L7 3z"/>
        <path d="M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9"/>
        <path d="M12 13v5M9 14v4M15 14v4"/>
      </svg>
    )
  },
  {
    title: "Bridal Packages",
    desc: "Complete bridal styling from head to toe — hair, makeup, and beauty treatments for your most special day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M12 2l2 5h5l-4 3 1.5 5L12 12l-4.5 3L9 10 5 7h5z"/>
        <path d="M12 15v7"/>
      </svg>
    )
  }
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <div className="gold-line center"></div>
          <p className="section-subtitle">
            From precision cuts to revitalizing treatments, we offer a complete range
            of services tailored to your unique style.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#contact" className="service-link">
                Book Now
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}