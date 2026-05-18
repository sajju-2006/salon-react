import { useState } from 'react'

const galleryItems = [
  // Hair Styling - 4 unique photos
  { id: 1,  src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop&q=90', title: 'Precision Cut', category: 'Hair Styling' },
  { id: 2,  src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop&q=90', title: 'Luxury Blowout', category: 'Hair Styling' },
  { id: 3,  src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=600&fit=crop&q=90', title: 'Waves & Curls', category: 'Hair Styling' },
  { id: 4,  src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop&q=90', title: 'Sleek Straight', category: 'Hair Styling' },

  // Hair Coloring - 4 unique photos
  { id: 5,  src: 'https://images.unsplash.com/photo-1519699047748-de8e44abcae3?w=600&h=600&fit=crop&q=90', title: 'Balayage', category: 'Hair Coloring' },
  { id: 6,  src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&h=600&fit=crop&q=90', title: 'Ombre Style', category: 'Hair Coloring' },
  { id: 7,  src: 'https://images.unsplash.com/photo-1500840216050-6ffa99d75160?w=600&h=600&fit=crop&q=90', title: 'Full Color', category: 'Hair Coloring' },
  { id: 8,  src: 'https://images.unsplash.com/photo-1520872024865-3ff2d2f5c5c7?w=600&h=600&fit=crop&q=90', title: 'Highlights', category: 'Hair Coloring' },

  // Beard Grooming - 4 unique photos
  { id: 9,  src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop&q=90', title: 'Beard Sculpt', category: 'Beard Grooming' },
  { id: 10, src: 'https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=600&h=600&fit=crop&q=90', title: 'Hot Towel Shave', category: 'Beard Grooming' },
  { id: 11, src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=600&fit=crop&q=90', title: 'Beard Trim', category: 'Beard Grooming' },
  { id: 12, src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=600&fit=crop&q=90', title: 'Shape & Line', category: 'Beard Grooming' },

  // Facial Treatment - 4 unique photos
  { id: 13, src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop&q=90', title: 'Glow Facial', category: 'Facial Treatment' },
  { id: 14, src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=600&fit=crop&q=90', title: 'Gold Facial', category: 'Facial Treatment' },
  { id: 15, src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&h=600&fit=crop&q=90', title: 'Deep Cleanse', category: 'Facial Treatment' },
  { id: 16, src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=600&fit=crop&q=90', title: 'Anti-Aging', category: 'Facial Treatment' },

  // Bridal Package - 4 unique photos
  { id: 17, src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop&q=90', title: 'Bridal Glam', category: 'Bridal Package' },
  { id: 18, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop&q=90', title: 'Bridal Updo', category: 'Bridal Package' },
  { id: 19, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop&q=90', title: 'Bridal Makeup', category: 'Bridal Package' },
  { id: 20, src: 'https://images.unsplash.com/photo-1525258801113-c2f8f562c21f?w=600&h=600&fit=crop&q=90', title: 'Complete Bridal', category: 'Bridal Package' },

  // Nail Art - 4 unique photos
  { id: 21, src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop&q=90', title: 'Nail Artistry', category: 'Nail Art' },
  { id: 22, src: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=600&h=600&fit=crop&q=90', title: 'Gel Nails', category: 'Nail Art' },
  { id: 23, src: 'https://images.unsplash.com/photo-1632345031435-8727f592d8db?w=600&h=600&fit=crop&q=90', title: 'Nail Design', category: 'Nail Art' },
  { id: 24, src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=600&fit=crop&q=90', title: 'Manicure', category: 'Nail Art' },
]

const featuredIds = [1, 5, 9, 13, 17, 21]
const allPhotos = featuredIds.map(id => galleryItems.find(i => i.id === id))
const categories = ['All', 'Hair Styling', 'Hair Coloring', 'Beard Grooming', 'Facial Treatment', 'Bridal Package', 'Nail Art']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [hoveredBtn, setHoveredBtn] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(null)

  const filtered = activeCategory === 'All'
    ? allPhotos
    : galleryItems.filter(item => item.category === activeCategory)

  const currentIndex = filtered.findIndex(item => item.id === lightbox?.id)

  const cols = filtered.length <= 4 ? filtered.length : 4

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Style Gallery</h2>
          <div className="gold-line center"></div>
          <p className="section-subtitle">
            Every look tells a story. Browse our portfolio of transformations crafted with passion and precision.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '16px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onMouseEnter={() => setHoveredBtn(cat)}
              onMouseLeave={() => setHoveredBtn(null)}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: '600',
                letterSpacing: '2px', textTransform: 'uppercase', padding: '10px 20px',
                border: activeCategory === cat || hoveredBtn === cat ? '1px solid #c9a84c' : '1px solid #e8e4df',
                background: activeCategory === cat ? '#c9a84c' : hoveredBtn === cat ? 'rgba(201,168,76,0.08)' : 'transparent',
                color: activeCategory === cat ? '#0a0a0a' : hoveredBtn === cat ? '#c9a84c' : '#6a6560',
                cursor: 'pointer', transition: 'all 0.35s ease',
              }}
            >{cat}</button>
          ))}
        </div>

        {/* Count label */}
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#9a9590', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '32px' }}>
          {activeCategory === 'All' ? 'Featured Works' : activeCategory} — {filtered.length} photos
        </p>

        {/* Grid — always 4 columns, equal square images */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: '12px',
        }}>
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightbox(item)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                position: 'relative', overflow: 'hidden',
                cursor: 'pointer',
                aspectRatio: '1 / 1',   // perfect square
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop&q=90' }}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  display: 'block', transition: 'transform 0.7s ease',
                  transform: hoveredItem === item.id ? 'scale(1.08)' : 'scale(1)',
                }}
              />
              {/* Hover overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)',
                opacity: hoveredItem === item.id ? 1 : 0,
                transition: 'opacity 0.35s ease',
                display: 'flex', alignItems: 'flex-end', padding: '16px',
              }}>
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '3px' }}>
                    {item.category}
                  </p>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: '#fff', fontWeight: 400 }}>
                    {item.title}
                  </h4>
                </div>
                <div style={{
                  position: 'absolute', top: '12px', right: '12px',
                  width: '32px', height: '32px', background: '#c9a84c',
                  display: 'grid', placeItems: 'center', color: '#0a0a0a',
                  transform: hoveredItem === item.id ? 'scale(1)' : 'scale(0)',
                  transition: 'transform 0.35s ease',
                }}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(5,5,5,0.97)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(12px)' }}>
          <button onClick={() => setLightbox(null)} style={{ position: 'fixed', top: '24px', right: '24px', width: '48px', height: '48px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer', zIndex: 10000 }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <button onClick={e => { e.stopPropagation(); setLightbox(filtered[(currentIndex - 1 + filtered.length) % filtered.length]) }} style={{ position: 'fixed', top: '50%', left: '24px', transform: 'translateY(-50%)', width: '48px', height: '48px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer', zIndex: 10000 }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '800px', width: '90%' }}>
            <img src={lightbox.src} alt={lightbox.title} style={{ width: '100%', maxHeight: '78vh', objectFit: 'contain', display: 'block' }} />
            <div style={{ paddingTop: '14px', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#c9a84c' }}>{lightbox.category}</p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: '#fff', fontWeight: 400 }}>{lightbox.title}</h3>
            </div>
          </div>
          <button onClick={e => { e.stopPropagation(); setLightbox(filtered[(currentIndex + 1) % filtered.length]) }} style={{ position: 'fixed', top: '50%', right: '24px', transform: 'translateY(-50%)', width: '48px', height: '48px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer', zIndex: 10000 }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <p style={{ position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)' }}>{currentIndex + 1} / {filtered.length}</p>
        </div>
      )}
    </section>
  )
}