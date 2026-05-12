import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

export default function Reviews() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Thanks for your review!')
  }

  return (
    <>
      <Navbar />

      <div className="page">

        <section className="hero-section">
          <h1>Customer Reviews</h1>
          <p>Real words from real sweet tooths.</p>
        </section>

        {/* FEATURED REVIEWS */}
        <div className="card-container">
          <div className="card review-card">
            <h3>Best Tiramisu in the city</h3>
            <p>SweetBite's tiramisu is in another league entirely.</p>
            <h4 className="price">★★★★★ — Ali.</h4>
          </div>

          <div className="card review-card">
            <h3>Wedding cake of dreams</h3>
            <p>Guests still talk about it months later.</p>
            <h4 className="price">★★★★★ — Sami</h4>
          </div>

          <div className="card review-card">
            <h3>The macarons!</h3>
            <p>Pistachio one is dangerously good.</p>
            <h4 className="price">★★★★★ — Hassan.</h4>
          </div>
        </div>

        {/* TABLE */}
        <h2 className="section-top">All Reviews</h2>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Item</th>
                <th>Rating</th>
                <th>Comment</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Ahmad.</td><td>Tiramisu</td><td>5/5</td><td>Best in city</td><td>2026-04-22</td></tr>
              <tr><td>Zain</td><td>Wedding Cake</td><td>5/5</td><td>Perfect</td><td>2026-04-18</td></tr>
              <tr><td>Ammar.</td><td>Macarons</td><td>5/5</td><td>Too good</td><td>2026-04-15</td></tr>
            </tbody>
          </table>
        </div>

        {/* FORM */}
        <h2 className="center-text section-top">Leave a Review</h2>

        <div className="form-container">
          <form onSubmit={handleSubmit}>

            <div>
              <label>Name</label>
              <input type="text" required />
            </div>

            <div>
              <label>Item</label>
              <select>
                <option>Tiramisu</option>
                <option>Chocolate Cake</option>
                <option>Macarons</option>
              </select>
            </div>

            <div>
              <label>Rating</label>
              <select>
                <option>5 - Excellent</option>
                <option>4 - Good</option>
                <option>3 - Average</option>
              </select>
            </div>

            <div>
              <label>Message</label>
              <textarea required></textarea>
            </div>

            <div className="center-box">
              <button className="lg-button" type="submit">Submit Review</button>
            </div>

          </form>
        </div>

      </div>

      <Footer />
    </>
  )
}