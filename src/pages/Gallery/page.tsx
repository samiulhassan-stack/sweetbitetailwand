import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

export default function Gallery() {
  return (
    <>
      <Navbar />

      <div className="page">

        <section className="hero-section">
          <h1>Our Gallery</h1>
          <p>A delicious peek inside the SweetBite kitchen.</p>
        </section>

        {/* CAKES */}
        <h2 className="center-text">Cakes</h2>

        <div className="card-container">
          <div className="card gallery-card">
            <img src="/images/triple.jpg" alt="Triple Chocolate Cake" />
            <h4>Triple Chocolate</h4>
          </div>

          <div className="card gallery-card">
            <img src="/images/redd.jpg" alt="Red Velvet" />
            <h4>Red Velvet</h4>
          </div>

          <div className="card gallery-card">
            <img src="/images/van.jpg" alt="Vanilla Bean" />
            <h4>Vanilla Bean</h4>
          </div>

          <div className="card gallery-card">
            <img src="/images/wed.jpg" alt="Wedding Cake" />
            <h4>Wedding Tier</h4>
          </div>
        </div>

        {/* ICE CREAM */}
        <h2 className="center-text">Ice Creams</h2>

        <div className="card-container">
          <div className="card gallery-card">
            <img src="/images/salt.jpg" alt="Salted Caramel" />
            <h4>Salted Caramel</h4>
          </div>

          <div className="card gallery-card">
            <img src="/images/picto.jpg" alt="Pistachio" />
            <h4>Pistachio Royale</h4>
          </div>

          <div className="card gallery-card">
            <img src="/images/staaa.jpg" alt="Strawberry Cheesecake" />
            <h4>Strawberry Cheesecake</h4>
          </div>

          <div className="card gallery-card">
            <img src="/images/mint.webp" alt="Mint Chocolate Chip" />
            <h4>Mint Choc Chip</h4>
          </div>
        </div>

        {/* DESSERTS */}
        <h2 className="center-text">Desserts</h2>

        <div className="card-container">
          <div className="card gallery-card">
            <img src="/images/tir.jpg" alt="Tiramisu" />
            <h4>Tiramisu</h4>
          </div>

          <div className="card gallery-card">
            <img src="/images/french.jpg" alt="Macarons" />
            <h4>French Macarons</h4>
          </div>

          <div className="card gallery-card">
            <img src="/images/chee.jpg" alt="Cheesecake" />
            <h4>NY Cheesecake</h4>
          </div>

          <div className="card gallery-card">
            <img src="/images/fudge.webp" alt="Brownie" />
            <h4>Fudge Brownie</h4>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}