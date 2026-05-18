import { useState } from 'react'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Premium Products',
    desc: "Only the finest salon-grade products from top global brands like L'Oréal, Wella & Kerastase."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Expert Stylists',
    desc: 'Trained at internationally acclaimed beauty academies with 10+ years of hands-on experience.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Hygiene First',
    desc: 'Strict sterilization and cleanliness protocols followed after every single client, always.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: 'Personal Touch',
    desc: 'Every service customized to your unique face shape, hair type and personal lifestyle.'
  }
]

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '5K+', label: 'Happy Clients' },
  { number: '12', label: 'Expert Stylists' },
  { number: '4.9★', label: 'Google Rating' },
]

export default function About() {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  return (
    <section className="about" id="about">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* LEFT — Image collage */}
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '12px' }}>
              {/* Big image spans full height on left */}
              <div style={{ gridRow: 'span 2', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=500&h=620&fit=crop&q=90"
                  alt="Stylist at work"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* Two smaller images stacked on right */}
              <div style={{ overflow: 'hidden', height: '200px' }}>
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop&q=90"
                  alt="Hair styling"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ overflow: 'hidden', height: '200px' }}>
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop&q=90"
                  alt="Beard grooming"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            {/* Experience badge */}
            <div style={{
              position: 'absolute', bottom: '32px', left: '-24px',
              background: '#c9a84c', padding: '24px 28px', textAlign: 'center',
              boxShadow: '0 8px 32px rgba(201,168,76,0.3)',
            }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '44px', fontWeight: 600, color: '#0a0a0a', lineHeight: 1 }}>15+</div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#0a0a0a', marginTop: '6px', fontWeight: 600 }}>Years of Excellence</div>
            </div>

            {/* Rating badge */}
            <div style={{
              position: 'absolute', top: '24px', right: '-20px',
              background: '#0a0a0a', padding: '16px 20px', textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 600, color: '#c9a84c', lineHeight: 1 }}>4.9★</div>
              <div style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Google Rating</div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Crafting Beauty<br />Since 2009</h2>
            <div className="gold-line"></div>

            <p style={{ fontSize: '16px', color: 'var(--gray-dark)', lineHeight: '1.85', marginBottom: '16px' }}>
              At Rangpuri, we believe that everyone deserves to feel extraordinary.
              Our team combines timeless techniques with modern innovation to deliver
              results that exceed expectations every single visit.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--gray-dark)', lineHeight: '1.85', marginBottom: '36px' }}>
              From our humble beginnings in 2009, we've grown into one of Delhi's most
              trusted salons — built on passion, skill, and genuine care for every
              client who walks through our doors.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              marginBottom: '36px',
              border: '1px solid var(--gray-light)',
            }}>
              {stats.map((stat, i) => (
                <div key={i} style={{
                  padding: '20px 12px', textAlign: 'center',
                  borderRight: i < stats.length - 1 ? '1px solid var(--gray-light)' : 'none',
                }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: '#c9a84c', fontWeight: 600, lineHeight: 1 }}>{stat.number}</div>
                  <div style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--gray-dark)', marginTop: '6px' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Feature cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '36px' }}>
              {features.map((f, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredFeature(i)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  style={{
                    padding: '20px',
                    border: hoveredFeature === i ? '1px solid #c9a84c' : '1px solid var(--gray-light)',
                    background: hoveredFeature === i ? 'rgba(201,168,76,0.04)' : '#fff',
                    transition: 'all 0.35s ease',
                    display: 'grid', gap: '10px',
                  }}
                >
                  <div style={{
                    width: '40px', height: '40px',
                    border: '1px solid var(--gray-light)',
                    display: 'grid', placeItems: 'center',
                    color: '#c9a84c',
                    background: hoveredFeature === i ? '#c9a84c' : 'transparent',
                    transition: 'all 0.35s ease',
                  }}>
                    <div style={{ color: hoveredFeature === i ? '#0a0a0a' : '#c9a84c', transition: 'color 0.35s ease' }}>
                      {f.icon}
                    </div>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 700 }}>{f.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--gray-dark)', lineHeight: '1.6' }}>{f.desc}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary">
              Book Your Visit
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}