import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  const renderNavLink = ({ path, label }) => (
    <NavLink
      key={path}
      to={path}
      onClick={closeMenu}
      className={({ isActive }) =>
        `nav-link ${isActive ? 'is-active' : ''}`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <Router>
      <div className="app-shell">
        <header className="site-header">
          <div className="logo-mark" onClick={closeMenu}>
            <span className="logo-icon">AC</span>
            <div className="logo-copy">
              <p>Aurora Catering</p>
              <span>Bespoke culinary moments</span>
            </div>
          </div>

          <nav
            id="primary-navigation"
            className={`site-nav ${menuOpen ? 'is-open' : ''}`}
          >
            {navLinks.slice(0, -1).map(renderNavLink)}
            <NavLink to="/contact" onClick={closeMenu} className="nav-link nav-cta">
              Plan an Event
            </NavLink>
          </nav>

          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        <div
          className={`nav-backdrop ${menuOpen ? 'is-visible' : ''}`}
          onClick={closeMenu}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="site-footer">
          <div>
            <p className="footer-heading">Aurora Catering</p>
            <p>Curating culinary stories since 2008.</p>
          </div>
          <div className="footer-grid">
            <div>
              <p className="footer-label">Studio</p>
              <p>Mumbai - Delhi - Goa</p>
            </div>
            <div>
              <p className="footer-label">Hours</p>
              <p>Mon-Sat | 9a - 7p</p>
            </div>
            <div>
              <p className="footer-label">Say hello</p>
              <a href="mailto:events@auroracatering.com">events@auroracatering.com</a>
            </div>
          </div>
          <p className="footer-note">(c) {new Date().getFullYear()} Aurora Catering Co.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
