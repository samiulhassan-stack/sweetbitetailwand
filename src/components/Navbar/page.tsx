import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  function toggleMenu() {
    setMenuOpen(prev => !prev)
  }

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <nav>
      <Link to="/">SweetBite</Link>

      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      <ul id="navMenu" className={menuOpen ? 'open' : ''}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a href="#">More ▼</a>
          {dropdownOpen && (
            <ul className="dropdown-menu" style={{ display: 'flex' }}>
              <li><Link to="/gallery" onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}>Gallery</Link></li>
              <li><Link to="/reviews" onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}>Reviews</Link></li>
              <li><Link to="/dashboard" onClick={() => { setMenuOpen(false); setDropdownOpen(false) }}>Dashboard</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/order" onClick={() => setMenuOpen(false)}>Order</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

        <li>
          <Link className="nav-auth login-btn" to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        </li>
        <li>
          <Link className="nav-auth signup-btn" to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link>
        </li>

        <li>
          <button id="themeToggle" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </li>
      </ul>
    </nav>
  )
}