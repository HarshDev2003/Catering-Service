const menuCategories = [
  {
    title: 'Pass-around canapes',
    description: 'Petite bites presented with bespoke trays and floral accents.',
    items: ['Smoked burrata pani puri', 'Chilli mango ceviche spoons', 'Truffle dahi puri'],
  },
  {
    title: 'Interactive live stations',
    description: 'Made-to-order experiences with chefs front and center.',
    items: ['Ramen atelier', 'Bao & dim sum cart', 'Stone-fired flatbreads'],
  },
  {
    title: 'Plated indulgence',
    description: 'Multi-course dining with wine pairings and choreographed service.',
    items: [
      'Compressed watermelon carpaccio',
      'Cocoa nib tenderloin with fig glaze',
      'Saffron kulfi pavlova',
    ],
  },
  {
    title: 'Dessert gallery',
    description: 'Tablescapes layered with edible art and sculpted sugar work.',
    items: ['Velvet entremets', 'Gold leaf pistachio baklava', 'Nitro kulfi station'],
  },
]

function Menu() {
  return (
    <div className="page menu-page">
      <section className="page-hero">
        <p className="eyebrow">Menus</p>
        <h1>Curated tastings, chef-led stations, and sensory finales.</h1>
        <p>
          Every collection is personalized - crafted around seasonality, sourcing
          partners, and the way you want guests to feel.
        </p>
      </section>

      <section className="menu-grid">
        {menuCategories.map((category) => (
          <article key={category.title} className="menu-card">
            <div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
            <ul>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Menu

