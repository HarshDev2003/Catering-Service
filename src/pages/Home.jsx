import { Link } from 'react-router-dom'

const featuredMenus = [
  {
    title: 'Garden Luxe',
    description: 'Seasonal canapes, edible florals, cold-smoked amuse bouche.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Midnight Feast',
    description: 'Late-night bao bar, ember-fired sliders, decadent desserts.',
    image:
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Coastal Tides',
    description: 'Raw bar, citrus-poached lobster, saffron-infused bisque.',
    image:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80',
  },
]

const testimonials = [
  {
    quote:
      'They choreographed every detail - from the first sip to the final bite - with poise and mastery.',
    author: 'Mira Patel - Destination Bride',
  },
  {
    quote: 'Menus that feel like art. Aurora elevated our launch and brand story.',
    author: 'Rahul Mehra - Creative Director, Nila Studio',
  },
]

const stats = [
  { label: 'Events each year', value: '120+' },
  { label: 'Cities served', value: '18' },
  { label: 'Culinary artists', value: '45' },
]

function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Signature experiences - Est. 2008</p>
          <h1>We craft immersive catering for weddings, galas, and bold brands.</h1>
          <p className="lead">
            From intimate rooftops to grand ballrooms, our culinary team designs layered
            menus, artful styling, and service that anticipates every detail.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" to="/contact">
              Book a tasting
            </Link>
            <Link className="btn ghost" to="/menu">
              View collections
            </Link>
          </div>
        </div>
        <div className="hero-gallery">
          {featuredMenus.map((menu) => (
            <article key={menu.title} className="hero-card">
              <img src={menu.image} alt={menu.title} loading="lazy" />
              <div>
                <p className="card-title">{menu.title}</p>
                <p>{menu.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section stats-section">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="section highlight-section">
        <div>
          <p className="eyebrow">Seasonal highlight</p>
          <h2>Monsoon Reverie Banquet</h2>
          <p>
            A sensorial, rain-kissed menu featuring smoke-infused amuse bouche, charcoal
            lotus crisps, tamarind lacquered salmon, and jasmine cloud dessert art.
          </p>
          <Link to="/services" className="text-link">
            Explore how we stage it
          </Link>
        </div>
        <div className="highlight-card">
          <p>What we handle</p>
          <ul>
            <li>Menu architecture & live stations</li>
            <li>Tablescapes & floral direction</li>
            <li>Sommelier & mixology pairings</li>
            <li>White-glove service choreography</li>
          </ul>
        </div>
      </section>

      <section className="section testimonials">
        {testimonials.map((feedback) => (
          <blockquote key={feedback.author}>
            <p>"{feedback.quote}"</p>
            <cite>{feedback.author}</cite>
          </blockquote>
        ))}
      </section>

      <section className="section cta-panel">
        <div>
          <p className="eyebrow">Ready to collaborate?</p>
          <h2>Tell us about your celebration</h2>
          <p>
            Share your date, guest count, and aesthetic. We’ll curate a moodboard, draft
            budgets, and schedule a tasting within 72 hours.
          </p>
        </div>
        <div className="cta-actions">
          <Link className="btn primary" to="/contact">
            Start planning
          </Link>
          <a className="btn outline" href="tel:+919876543210">
            Call +91 98765 43210
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home

