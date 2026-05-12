import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

export default function Contact() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Thanks! We will reply within 24 hours.')
  }

  return (
    <>
      <Navbar />

      <div className="page">

        <section className="hero-section">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you — custom orders, feedback, anything sweet.</p>
        </section>

        {/* INFO CARDS */}
        <div className="card-container">
          <div className="card info-card">
            <h3 className="price">Visit Us</h3>
            <p>24 Cocoa Lane<br />Sugar District</p>
          </div>

          <div className="card info-card">
            <h3 className="price">Call Us</h3>
            <p>+92322-4916998<br />9am - 10pm</p>
          </div>

          <div className="card info-card">
            <h3 className="price">Email Us</h3>
            <p>hello@sweetbite.shop</p>
          </div>
        </div>

        {/* FORM */}
        <h2 className="center-text section-top">Send Message</h2>

        <div className="form-container">
          <form onSubmit={handleSubmit}>

            <div>
              <label>Name</label>
              <input type="text" required />
            </div>

            <div>
              <label>Email</label>
              <input type="email" required />
            </div>

            <div>
              <label>Subject</label>
              <select>
                <option>General Question</option>
                <option>Custom Cake</option>
                <option>Feedback</option>
                <option>Careers</option>
              </select>
            </div>

            <div>
              <label>Message</label>
              <textarea required></textarea>
            </div>

            <div className="center-box">
              <button className="lg-button" type="submit">Send Message</button>
            </div>

          </form>
        </div>

      </div>

      <Footer />
    </>
  )
}