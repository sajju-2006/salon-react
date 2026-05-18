import { useState } from 'react'

const ScissorsIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/>
    <line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
)

const BrushIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 2l4 4-14 14H4v-4L18 2z"/>
    <path d="M4 20c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"/>
  </svg>
)

const UserIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const pricingData = {
  women: [
    {
      category: 'Hair Services',
      icon: <ScissorsIcon />,
      items: [
        { name: 'Haircut & Blowout', desc: 'Wash, precision cut & professional blowout', price: '₹599', popular: true },
        { name: 'Full Color', desc: 'Complete hair color transformation', price: '₹1,499' },
        { name: 'Highlights', desc: 'Partial or full highlights', price: '₹1,999' },
        { name: 'Balayage', desc: 'Hand-painted natural color effect', price: '₹2,499' },
        { name: 'Keratin Treatment', desc: 'Smooth & frizz-free for 3 months', price: '₹3,499' },
      ]
    },
    {
      category: 'Styling & Spa',
      icon: <BrushIcon />,
      items: [
        { name: 'Blowout Only', desc: 'Professional blow dry & style', price: '₹349' },
        { name: 'Hair Spa', desc: 'Deep conditioning & scalp massage', price: '₹799', popular: true },
        { name: 'Bridal Hair', desc: 'Complete bridal styling package', price: '₹4,999' },
      ]
    }
  ],
  men: [
    {
      category: 'Hair & Beard',
      icon: <ScissorsIcon />,
      items: [
        { name: 'Haircut', desc: 'Precision cut & styling', price: '₹249', popular: true },
        { name: 'Beard Trim', desc: 'Shape, line & clean beard', price: '₹149' },
        { name: 'Haircut + Beard', desc: 'Full grooming combo', price: '₹349', popular: true },
        { name: 'Hair Color', desc: 'Full color or highlights', price: '₹999' },
        { name: 'Hot Towel Shave', desc: 'Classic straight razor shave', price: '₹299' },
      ]
    },
    {
      category: 'Treatments',
      icon: <HeartIcon />,
      items: [
        { name: 'Hair Spa', desc: 'Deep conditioning treatment', price: '₹599' },
        { name: 'Scalp Treatment', desc: 'Anti-dandruff & scalp care', price: '₹499' },
      ]
    }
  ],
  treatments: [
    {
      category: 'Facial & Skin',
      icon: <StarIcon />,
      items: [
        { name: 'Basic Facial', desc: 'Cleansing & moisturizing', price: '₹799' },
        { name: 'Gold Facial', desc: 'Luxury brightening treatment', price: '₹1,499', popular: true },
        { name: 'Anti-Aging Facial', desc: 'Collagen boosting treatment', price: '₹1,999' },
        { name: 'Threading (Full Face)', desc: 'Eyebrows, upper lip & chin', price: '₹149' },
      ]
    },
    {
      category: 'Nails',
      icon: <UserIcon />,
      items: [
        { name: 'Manicure', desc: 'Basic nail care & polish', price: '₹349' },
        { name: 'Pedicure', desc: 'Foot care & nail polish', price: '₹449' },
        { name: 'Gel Nails', desc: 'Long-lasting gel polish', price: '₹799', popular: true },
        { name: 'Nail Art', desc: 'Custom nail art design', price: '₹999' },
      ]
    }
  ]
}

const tabs = [
  { key: 'women', label: 'Women' },
  { key: 'men', label: 'Men' },
  { key: 'treatments', label: 'Treatments' },
]

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('women')
  const [hoveredRow, setHoveredRow] = useState(null)
  const [hoveredTab, setHoveredTab] = useState(null)

  const currentData = pricingData[activeTab]

  return (
    <section className="pricing" id="pricing">
      <div className="container">

        {/* Header */}
        <div className="pricing-header">
          <span className="section-label">Transparent Pricing</span>
          <h2 className="section-title">Our Price List</h2>
          <div className="gold-line center"></div>
          <p className="section-subtitle">Quality craftsmanship at fair prices. No hidden charges, ever.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', maxWidth: '480px', margin: '0 auto 56px', border: '1px solid rgba(255,255,255,0.1)' }}>
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              onMouseEnter={() => setHoveredTab(tab.key)}
              onMouseLeave={() => setHoveredTab(null)}
              style={{
                flex: 1,
                fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
                letterSpacing: '2.5px', textTransform: 'uppercase', padding: '15px 10px',
                background: activeTab === tab.key ? '#c9a84c' : 'transparent',
                border: 'none',
                borderRight: tab.key !== 'treatments' ? '1px solid rgba(255,255,255,0.1)' : 'none',
                color: activeTab === tab.key ? '#0a0a0a' : hoveredTab === tab.key ? '#c9a84c' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer', transition: 'all 0.35s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Two column price grid */}
        <div className="pricing-grid">
          {currentData.map((section, si) => (
            <div key={si}>

              {/* Category header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                marginBottom: '28px', paddingBottom: '16px',
                borderBottom: '1px solid rgba(201,168,76,0.3)',
              }}>
                <div style={{
                  width: '44px', height: '44px', display: 'grid', placeItems: 'center',
                  border: '1px solid rgba(201,168,76,0.3)', color: '#c9a84c', flexShrink: 0,
                }}>
                  {section.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: '#c9a84c', fontWeight: 400 }}>
                  {section.category}
                </h3>
              </div>

              {/* Price rows */}
              {section.items.map((item, ii) => {
                const key = `${si}-${ii}`
                return (
                  <div
                    key={ii}
                    onMouseEnter={() => setHoveredRow(key)}
                    onMouseLeave={() => setHoveredRow(null)}
                    style={{
                      display: 'grid', gridTemplateColumns: '1fr auto',
                      alignItems: 'center',
                      padding: hoveredRow === key ? '14px 12px' : '14px 0',
                      marginBottom: '4px',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      background: hoveredRow === key ? 'rgba(201,168,76,0.06)' : 'transparent',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                        <p style={{
                          fontSize: '14px',
                          color: hoveredRow === key ? '#fff' : 'rgba(255,255,255,0.8)',
                          transition: 'color 0.3s ease',
                        }}>{item.name}</p>
                        {item.popular && (
                          <span style={{
                            fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px',
                            textTransform: 'uppercase', padding: '2px 8px',
                            background: 'rgba(201,168,76,0.2)',
                            border: '1px solid rgba(201,168,76,0.4)',
                            color: '#c9a84c',
                          }}>Popular</span>
                        )}
                      </div>
                      <p style={{ fontSize: '12px', color: '#6a6560' }}>{item.desc}</p>
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-heading)', fontSize: '20px',
                      color: '#c9a84c', fontWeight: 600, letterSpacing: '0.5px',
                      paddingLeft: '16px',
                    }}>{item.price}</p>
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Note + CTA */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '12px 24px', border: '1px solid rgba(201,168,76,0.2)',
            marginBottom: '32px',
          }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#c9a84c" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p style={{ fontSize: '13px', color: '#9a9590', margin: 0 }}>
              Prices may vary based on hair length and complexity.
            </p>
          </div>
          <br />
          <a href="#contact" className="btn btn-primary">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Book Your Service
          </a>
        </div>
      </div>
    </section>
  )
}