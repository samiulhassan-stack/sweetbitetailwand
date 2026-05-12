import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h1>SweetBite</h1>
          <p>Tiny bites. Big happiness. Since 2011.</p>
        </div>

        <div>
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/reviews">Reviews</Link>
        </div>

        <div>
          <h2>Customer</h2>
          <Link to="/order">Order</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <div>
          <h2>Visit</h2>
          <p>24 Cocoa Lane</p>
          <p>9am – 10pm</p>
          <p>+923324916998</p>
        </div>
      </div>

      <p>© 2026 SweetBite Shop. All rights reserved.</p>
    </footer>
  )
}