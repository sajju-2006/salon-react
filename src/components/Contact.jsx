import { useState } from 'react'

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Rangpuri, Mahipalpur',
    sub: 'New Delhi — 110037',
    link: 'https://maps.google.com/?q=Rangpuri+Mahipalpur+New+Delhi'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.41 2 2 0 0 1 3.55 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 98765 43210',
    sub: 'Mon–Sat, 10am–8pm',
    link: 'tel:+919876543210'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'hello@rangpuri.in',
    sub: 'We reply within 2 hours',
    link: 'mailto:hello@rangpuri.in'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Working Hours',
    value: 'Mon – Sat: 10am – 8pm',
    sub: 'Sunday: 11am – 6pm',
    link: null
  },
]

const services = [
  'Hair Styling', 'Hair Coloring', 'Beard Grooming',
  'Facial Treatment', 'Nail Art', 'Bridal Package', 'Hair Spa', 'Other'
]

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', date: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [hoveredInfo, setHoveredInfo] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.service) e.service = 'Please select a service'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setSubmitted(true)
  }

  const inputStyle = (field) => ({
    width: '100%', padding: '14px 16px',
    fontFamily: 'var(--font-body)', fontSize: '14px',
    border: errors[field] ? '1px solid #e74c3c' : '1px solid #e8e4df',
    background: '#fff', color: '#0a0a0a', outline: 'none',
    transition: 'border-color 0.35s ease',
  })

  return (
    <section className="contact" id="contact">
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Visit Us or Book Online</h2>
          <div className="gold-line center"></div>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We'd love to welcome you. Walk in anytime or book your appointment online.
          </p>
        </div>

        {/* ✅ Fixed: was inline style gridTemplateColumns */}
        <div className="contact-main-grid">

          {/* LEFT — Info */}
          <div>
            {/* Contact cards */}
            <div style={{ display: 'grid', gap: '16px', marginBottom: '40px' }}>
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredInfo(i)}
                  onMouseLeave={() => setHoveredInfo(null)}
                  onClick={() => info.link && window.open(info.link, '_blank')}
                  style={{
                    display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '16px',
                    alignItems: 'center', padding: '20px',
                    border: hoveredInfo === i ? '1px solid #c9a84c' : '1px solid #e8e4df',
                    background: hoveredInfo === i ? 'rgba(201,168,76,0.04)' : '#fff',
                    transition: 'all 0.35s ease',
                    cursor: info.link ? 'pointer' : 'default',
                  }}
                >
                  <div style={{
                    width: '48px', height: '48px', display: 'grid', placeItems: 'center',
                    background: hoveredInfo === i ? '#c9a84c' : 'transparent',
                    border: hoveredInfo === i ? '1px solid #c9a84c' : '1px solid #e8e4df',
                    transition: 'all 0.35s ease',
                    color: hoveredInfo === i ? '#0a0a0a' : '#c9a84c',
                    flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#9a9590', marginBottom: '4px' }}>{info.label}</p>
                    <p style={{ fontSize: '15px', color: '#0a0a0a', fontWeight: 500 }}>{info.value}</p>
                    <p style={{ fontSize: '13px', color: '#6a6560' }}>{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919876543210?text=Hi%20Rangpuri%20Salon!%20I'd%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                padding: '16px 32px', background: '#25D366', color: '#fff',
                fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600,
                letterSpacing: '2px', textTransform: 'uppercase',
                textDecoration: 'none', marginBottom: '16px',
                transition: 'all 0.35s ease',
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.847L.057 23.887l6.2-1.627A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.877 9.877 0 0 1-5.031-1.374l-.361-.214-3.741.981.998-3.648-.235-.374A9.856 9.856 0 0 1 2.106 12C2.106 6.58 6.58 2.106 12 2.106c5.42 0 9.894 4.474 9.894 9.894 0 5.421-4.474 9.894-9.894 9.894z"/>
              </svg>
              Book via WhatsApp
            </a>

            {/* Google Maps embed */}
            <div style={{ border: '1px solid #e8e4df', overflow: 'hidden', height: '180px' }}>
              <iframe
                title="Salon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5!2d77.1!3d28.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMxJzEyLjAiTiA3N8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="180" style={{ border: 0, display: 'block' }}
                allowFullScreen="" loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT — Form */}
          {/* ✅ Fixed: was inline style padding */}
          <div className="contact-form-box">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', marginBottom: '6px' }}>Book an Appointment</h3>
            <p style={{ fontSize: '14px', color: '#6a6560', marginBottom: '32px' }}>Fill out the form and we'll confirm within 1 hour.</p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: '64px', height: '64px', background: '#c9a84c', borderRadius: '50%', display: 'grid', placeItems: 'center', margin: '0 auto 20px' }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0a0a0a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', marginBottom: '8px' }}>Booking Received!</h3>
                <p style={{ fontSize: '15px', color: '#6a6560', marginBottom: '24px' }}>We'll call you within 1 hour to confirm your appointment.</p>
                <button onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', date: '', message: '' }) }}
                  style={{ padding: '12px 32px', background: '#c9a84c', border: 'none', fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer' }}>
                  Book Another
                </button>
              </div>
            ) : (
              <div>
                {/* ✅ Fixed: Name row */}
                <div className="form-row-grid">
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>First Name *</label>
                    <input value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} style={inputStyle('firstName')} placeholder="Arjun" />
                    {errors.firstName && <p style={{ fontSize: '11px', color: '#e74c3c', marginTop: '4px' }}>{errors.firstName}</p>}
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Last Name</label>
                    <input value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} style={inputStyle('lastName')} placeholder="Sharma" />
                  </div>
                </div>

                {/* ✅ Fixed: Email & Phone row */}
                <div className="form-row-grid">
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Email *</label>
                    <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle('email')} placeholder="arjun@email.com" />
                    {errors.email && <p style={{ fontSize: '11px', color: '#e74c3c', marginTop: '4px' }}>{errors.email}</p>}
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Phone</label>
                    <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={inputStyle('phone')} placeholder="+91 98765 43210" />
                  </div>
                </div>

                {/* ✅ Fixed: Service & Date row */}
                <div className="form-row-grid">
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Service *</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={{ ...inputStyle('service'), appearance: 'none' }}>
                      <option value="">Select service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p style={{ fontSize: '11px', color: '#e74c3c', marginTop: '4px' }}>{errors.service}</p>}
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Preferred Date</label>
                    <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} style={inputStyle('date')} />
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Message</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} style={{ ...inputStyle('message'), resize: 'vertical', height: '100px' }} placeholder="Any special requests or notes..." />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  style={{
                    width: '100%', padding: '16px', background: '#c9a84c', border: 'none',
                    fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
                    letterSpacing: '2.5px', textTransform: 'uppercase', cursor: 'pointer',
                    color: '#0a0a0a', transition: 'all 0.35s ease',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Confirm Booking
                </button>

                <p style={{ fontSize: '12px', color: '#9a9590', textAlign: 'center', marginTop: '12px' }}>
                  🔒 Your info is safe with us. No spam ever.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}