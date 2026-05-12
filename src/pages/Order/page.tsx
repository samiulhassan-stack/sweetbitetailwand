import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

export default function Order() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Thank you! Your order has been placed.')
  }

  return (
    <>
      <Navbar />

      <div className="page">

        <section className="hero-section">
          <h1>Place Your Order</h1>
          <p>Pick your sweets, fill the form, and we'll bake the rest.</p>
        </section>

        {/* CART TABLE */}
        <h2>Your Cart</h2>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Triple Chocolate Cake</td>
                <td>1</td>
                <td>7000.00</td>
                <td>7000.00</td>
              </tr>
              <tr>
                <td>French Macarons (Box of 12)</td>
                <td>2</td>
                <td>3500.00</td>
                <td>7000.00</td>
              </tr>
              <tr>
                <td>Salted Caramel Scoop</td>
                <td>3</td>
                <td>1500.50</td>
                <td>4500.50</td>
              </tr>
              <tr>
                <td>Tiramisu</td>
                <td>1</td>
                <td>1200.00</td>
                <td>1200.00</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td></td>
                <td></td>
                <td><strong>19700.50</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ORDER FORM */}
        <h2 className="section-top">Delivery Details</h2>

        <div className="form-container">
          <form onSubmit={handleSubmit}>

            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Sami" required />
            </div>

            <div>
              <label>Phone Number</label>
              <input type="tel" placeholder="+0312-098765" required />
            </div>

            <div>
              <label>Email Address</label>
              <input type="email" placeholder="sami@email.com" required />
            </div>

            <div>
              <label>Delivery Address</label>
              <textarea placeholder="House #, Street, City" required></textarea>
            </div>

            <div>
              <label>Delivery Time</label>
              <select>
                <option>As soon as possible (1 hr)</option>
                <option>Today Evening</option>
                <option>Tomorrow Morning</option>
                <option>Schedule for later</option>
              </select>
            </div>

            <div>
              <label>Payment Method</label>
              <select>
                <option>Cash on Delivery</option>
                <option>Credit / Debit Card</option>
                <option>Online Wallet</option>
              </select>
            </div>

            <div className="center-flex">
              <button className="lg-button" type="submit">Confirm Order</button>
            </div>

          </form>
        </div>

      </div>

      <Footer />
    </>
  )
}