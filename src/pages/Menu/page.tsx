import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

export default function Menu() {
  return (
    <>
      <Navbar />

      <div className="page">

        <section className="hero-section">
          <h1>Our Menu</h1>
          <p>Cakes, ice creams &amp; desserts — freshly made every morning.</p>
        </section>

        {/* CAKES */}
        <h2>Signature Cakes</h2>

        <div className="card-container">
          <div className="card">
            <img src="/images/triplee.jpg" alt="Triple Chocolate Cake" />
            <h3>Triple Chocolate</h3>
            <p>Dark, milk &amp; white chocolate layered with ganache.</p>
            <h4 className="price">7000.00</h4>
          </div>

          <div className="card">
            <img src="/images/redd.jpg" alt="Red Velvet Cake" />
            <h3>Red Velvet</h3>
            <p>Velvety crumb with cream cheese frosting.</p>
            <h4 className="price">7500.00</h4>
          </div>

          <div className="card">
            <img src="/images/van.jpg" alt="Vanilla Cake" />
            <h3>Vanilla Bean</h3>
            <p>Light sponge with Madagascar vanilla cream.</p>
            <h4 className="price">6000.00</h4>
          </div>
        </div>

        {/* ICE CREAM */}
        <h2>Artisan Ice Creams</h2>

        <div className="card-container">
          <div className="card">
            <img src="/images/salt.jpg" alt="Salted Caramel" />
            <h3>Salted Caramel</h3>
            <p>Slow churned caramel with sea salt.</p>
            <h4 className="price">1500.50</h4>
          </div>

          <div className="card">
            <img src="/images/picto.jpg" alt="Pistachio" />
            <h3>Pistachio Royale</h3>
            <p>Roasted pistachio gelato.</p>
            <h4 className="price">1800.00</h4>
          </div>

          <div className="card">
            <img src="/images/staaa.jpg" alt="Strawberry Cheesecake" />
            <h3>Strawberry Cheesecake</h3>
            <p>Strawberry swirl with cream cheese.</p>
            <h4 className="price">1200.50</h4>
          </div>
        </div>

        {/* DESSERTS */}
        <h2>Heavenly Desserts</h2>

        <div className="card-container">
          <div className="card">
            <img src="/images/tira.jpg" alt="Tiramisu" />
            <h3>Tiramisu</h3>
            <p>Espresso soaked layers with mascarpone.</p>
            <h4 className="price">1200.00</h4>
          </div>

          <div className="card">
            <img src="/images/french.jpg" alt="Macarons" />
            <h3>French Macarons</h3>
            <p>Box of 12 assorted flavours.</p>
            <h4 className="price">3500.00</h4>
          </div>

          <div className="card">
            <img src="/images/chee.jpg" alt="Cheesecake" />
            <h3>NY Cheesecake</h3>
            <p>Baked cheesecake with berry topping.</p>
            <h4 className="price">2000.00</h4>
          </div>
        </div>

        {/* BUTTON */}
        <div className="center-box">
          <Link to="/order">
            <button className="lg-button">Place Your Order</button>
          </Link>
        </div>

      </div>

      <Footer />
    </>
  )
}