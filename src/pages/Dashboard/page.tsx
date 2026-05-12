import { useState } from 'react'
import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

export default function Dashboard() {
  const [searchInput, setSearchInput] = useState('')
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')

  function filterProducts() {
    alert(`Searching: "${searchInput}" | Category: ${category} | Price: ${price}`)
  }

  return (
    <>
      <Navbar />

      <div className="page">

        {/* HERO */}
        <section className="hero-section">
          <h1>Owner Dashboard</h1>
          <p>A quick look at today's bakery performance.</p>
        </section>

        {/* STATS */}
        <div className="card-container">
          <div className="card dashboard-card">
            <h4>Today's Orders</h4>
            <h2 className="price">42</h2>
            <p>+8 vs yesterday</p>
          </div>

          <div className="card dashboard-card">
            <h4>Revenue</h4>
            <h2 className="price">45000</h2>
            <p>+12% weekly</p>
          </div>

          <div className="card dashboard-card">
            <h4>Cakes Baked</h4>
            <h2 className="price">17</h2>
            <p>3 wedding tiers</p>
          </div>

          <div className="card dashboard-card">
            <h4>Reviews</h4>
            <h2 className="price">9</h2>
            <p>Avg 4.8 ⭐</p>
          </div>
        </div>

        {/* STOCK MANAGEMENT */}
        <h2 className="section-top">Stock Management</h2>

        <div className="card-container">
          <div className="card dashboard-card">
            <h3>View All Stock</h3>
            <p>See all bakery products and inventory.</p>
            <button className="lg-button">View Stock</button>
          </div>

          <div className="card dashboard-card">
            <h3>Insert New Stock</h3>
            <p>Add cakes, pastries and desserts.</p>
            <button className="lg-button">Add Stock</button>
          </div>

          <div className="card dashboard-card">
            <h3>Update Stock</h3>
            <p>Edit product quantity and prices.</p>
            <button className="lg-button">Update Stock</button>
          </div>

          <div className="card dashboard-card">
            <h3>Delete Stock</h3>
            <p>Remove unavailable bakery items.</p>
            <button className="lg-button delete-btn">Delete</button>
          </div>
        </div>

        {/* SEARCH SECTION */}
        <h2 className="section-top">Search Products</h2>

        <div className="search-box">
          <input
            type="text"
            id="searchInput"
            placeholder="Search bakery items..."
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />

          <select
            id="categoryFilter"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Cakes">Cakes</option>
            <option value="Ice Cream">Ice Cream</option>
            <option value="Pastries">Pastries</option>
            <option value="Cookies">Cookies</option>
          </select>

          <select
            id="priceFilter"
            value={price}
            onChange={e => setPrice(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="low">500 - 1000</option>
            <option value="mid">1000 - 3000</option>
            <option value="high">3000 - 5000+</option>
          </select>

          <button className="lg-button" onClick={filterProducts}>
            Search
          </button>
        </div>

        {/* GRAPHICAL VIEW */}
        <h2 className="section-top">Stock Analytics</h2>

        <div className="card-container">
          <div className="card graph-card">
            <h3>Cakes Sold</h3>
            <div className="graph-bar cake-bar"></div>
            <p>80% Sales</p>
          </div>

          <div className="card graph-card">
            <h3>Ice Cream</h3>
            <div className="graph-bar ice-bar"></div>
            <p>60% Sales</p>
          </div>

          <div className="card graph-card">
            <h3>Pastries</h3>
            <div className="graph-bar pastry-bar"></div>
            <p>90% Sales</p>
          </div>
        </div>

        {/* RECENT ORDERS */}
        <h2 className="section-top">Recent Orders</h2>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#A-1042</td><td>Ali</td><td>Tiramisu ×2</td><td>7000</td><td>Delivered</td><td>10:14</td>
              </tr>
              <tr>
                <td>#A-1043</td><td>Usman</td><td>Chocolate Cake</td><td>7000</td><td>Baking</td><td>10:32</td>
              </tr>
              <tr>
                <td>#A-1044</td><td>Noora</td><td>Ice Cream ×4</td><td>15000</td><td>Delivered</td><td>11:05</td>
              </tr>
              <tr>
                <td>#A-1045</td><td>Sami</td><td>Macarons ×3</td><td>25500</td><td>Delivery</td><td>11:42</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* INVENTORY */}
        <h2 className="section-top">Inventory</h2>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Stock</th>
                <th>Reorder</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Cocoa</td><td>14 kg</td><td>5 kg</td><td className="status-ok">OK</td></tr>
              <tr><td>Vanilla</td><td>22 pods</td><td>15 pods</td><td className="status-ok">OK</td></tr>
              <tr><td>Cream</td><td>3 L</td><td>5 L</td><td className="status-low">LOW</td></tr>
              <tr><td>Mascarpone</td><td>0.8 kg</td><td>2 kg</td><td className="status-critical">CRITICAL</td></tr>
            </tbody>
          </table>
        </div>

        {/* QUICK LINKS */}
        <h2 className="section-top">Quick Links</h2>

        <div className="card-container">
          <div className="card quick-links-card"><h3>Manage Orders</h3></div>
          <div className="card quick-links-card"><h3>Customer Reviews</h3></div>
          <div className="card quick-links-card"><h3>Sales Reports</h3></div>
          <div className="card quick-links-card"><h3>Settings</h3></div>
        </div>

        {/* BUTTONS */}
        <div className="center-box">
          <button className="lg-button">Add Order</button>
          <button className="lg-button border-button">Export Report</button>
        </div>

      </div>

      <Footer />
    </>
  )
}