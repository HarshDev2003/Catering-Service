const milestones = [
  { year: '2008', detail: 'Aurora founded as an atelier kitchen in Mumbai.' },
  { year: '2014', detail: 'Expanded to destination weddings across India.' },
  { year: '2019', detail: 'Launched culinary lab for immersive brand events.' },
  { year: '2024', detail: 'Introduced carbon-neutral sourcing initiative.' },
]

function About() {
  return (
    <div className="page about-page">
      <section className="page-hero">
        <p className="eyebrow">Our story</p>
        <h1>Chefs, designers, and dreamers creating modern hospitality.</h1>
        <p>
          Led by Chef Aarav Kapoor, Aurora blends global technique with Indian warmth.
          We partner with ethical farms, floral artists, mixologists, and stylists to
          design events that feel deeply personal.
        </p>
      </section>

      <section className="about-grid">
        <article>
          <h3>Philosophy</h3>
          <p>
            Ingredients dictate the story. We cook with seasonal produce, slow-fermented
            doughs, and zero-waste methods. Every service script is rehearsed so guests
            feel exquisitely cared for.
          </p>
        </article>
        <article>
          <h3>Studios</h3>
          <p>
            Mumbai test kitchen - Delhi tasting lounge - Goa retreat. Schedule a visit
            and experience our plating lab, aroma bar, and floral atelier.
          </p>
        </article>
      </section>

      <section className="timeline">
        {milestones.map((event) => (
          <div key={event.year} className="timeline-item">
            <p className="timeline-year">{event.year}</p>
            <p>{event.detail}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default About

