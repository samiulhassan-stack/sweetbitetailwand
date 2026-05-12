import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar/page'
import Footer from './components/Footer/page'
import Menu from './pages/Menu/page'
import Gallery from './pages/Gallery/page'
import Reviews from './pages/Reviews/page'
import Order from './pages/Order/page'
import Contact from './pages/Contact/page'
import Login from './pages/Login/page'
import Signup from './pages/Signup/page'
import Dashboard from './pages/Dashboard/page'

function Home() {
  return (
    <>
      <Navbar />

      <div className="page">

        {/* HERO */}
        <section className="hero-section hero-padding">
          <h1 className="hero-title">Welcome to SweetBite</h1>
          <h3>Handcrafted Cakes · Artisan Ice Creams · Heavenly Desserts</h3>
          <p className="hero-text">
            Every bite is a little moment of joy. Made fresh daily with the finest cocoa,
            farm cream and pure vanilla — baked with love since 2011.
          </p>
          <div className="hero-buttons">
            <Link to="/menu">
              <button className="lg-button">Explore Menu</button>
            </Link>
            <Link to="/order">
              <button className="lg-button border-button">Order Now</button>
            </Link>
          </div>
        </section>

        {/* FEATURED */}
        <section>
          <h2 className="center-text">Today's Favourites</h2>
          <p className="center-text">
            A taste of what our pastry chefs are excited about today.
          </p>

          <div className="card-container">
            <div className="card">
              <img src="/images/triple.jpg" alt="Triple Chocolate Cake" />
              <h3>Triple Chocolate Cake</h3>
              <p>Three layers of dark, milk and white chocolate ganache.</p>
              <h4>7000.00</h4>
            </div>

            <div className="card">
              <img src="/images/salt.jpg" alt="Salted Caramel Ice Cream" />
              <h3>Salted Caramel Scoop</h3>
              <p>Slow churned caramel ice cream with sea salt flakes.</p>
              <h4>4500.50</h4>
            </div>

            <div className="card">
              <img src="/images/tir.jpg" alt="Tiramisu" />
              <h3>Classic Tiramisu</h3>
              <p>Espresso-soaked ladyfingers with mascarpone cream.</p>
              <h4>4000.00</h4>
            </div>

            <div className="card">
              <img src="/images/french.jpg" alt="Macarons" />
              <h3>French Macarons</h3>
              <p>A box of twelve with rotating flavours.</p>
              <h4>5500.00</h4>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="section-spacing">
          <h2 className="center-text">Why SweetBite?</h2>

          <div className="card-container">
            <div className="card text-center">
              <h3>Baked Fresh Daily</h3>
              <p>Nothing is older than today's baking.</p>
            </div>

            <div className="card text-center">
              <h3>Premium Ingredients</h3>
              <p>Only the finest cocoa, vanilla, and dairy.</p>
            </div>

            <div className="card text-center">
              <h3>Custom Orders</h3>
              <p>We design cakes for your special moments.</p>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}