const services = [
  {
    title: 'Signature weddings',
    summary: 'Full culinary direction for rituals, sangeet, and reception.',
    details: ['Tasting and menu choreography', 'Luxury table styling', 'Hospitality squad'],
  },
  {
    title: 'Corporate showcases',
    summary: 'Brand launches, immersive press dinners, and summits.',
    details: ['Concept-driven menus', 'Mocktail & mixology labs', 'On-site production'],
  },
  {
    title: 'Destination fetes',
    summary: 'Beachfront soirees, vineyard takeovers, and heritage palaces.',
    details: ['Traveling chef brigade', 'Local sourcing partners', 'Logistics & rentals'],
  },
]

function Services() {
  return (
    <div className="page services-page">
      <section className="page-hero">
        <p className="eyebrow">Services</p>
        <h1>Hospitality choreography for any scale.</h1>
        <p>
          Our producers, culinary directors, and sommeliers craft experiences that flow
          with your timeline - always guest-first, always memorable.
        </p>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <header>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </header>
            <ul>
              {service.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Services

