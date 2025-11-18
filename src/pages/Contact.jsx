function Contact() {
  return (
    <div className="page contact-page">
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Tell us about your celebration.</h1>
        <p>
          Share your event date, guest count, and inspiration. Our producers reply within
          72 hours with a curated proposal and tasting invite.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-card">
          <h3>Studios</h3>
          <p>Mumbai - Delhi - Goa</p>
          <h3>Phone</h3>
          <a href="tel:+919876543210">+91 98765 43210</a>
          <h3>Email</h3>
          <a href="mailto:events@auroracatering.com">events@auroracatering.com</a>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Priya Sharma" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@email.com" required />
          </label>
          <label>
            Event date
            <input type="date" required />
          </label>
          <label>
            Guest count
            <input type="number" placeholder="250" min="10" required />
          </label>
          <label>
            Tell us more
            <textarea rows="4" placeholder="Venue, vibe, cuisine wishes..." required />
          </label>
          <button className="btn primary" type="submit">
            Submit inquiry
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact

