import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

export default function Order() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Thank you! Your order has been placed.')
  }

  const cartItems = [
    { item: 'Triple Chocolate Cake',       qty: 1, unit: '7000.00', sub: '7000.00' },
    { item: 'French Macarons (Box of 12)', qty: 2, unit: '3500.00', sub: '7000.00' },
    { item: 'Salted Caramel Scoop',        qty: 3, unit: '1500.50', sub: '4500.50' },
    { item: 'Tiramisu',                    qty: 1, unit: '1200.00', sub: '1200.00' },
  ]
  const inputCls  = "w-full px-3.5 py-2.5 text-[15px] bg-[#FAF3E0] text-[#3E2723] border border-[#8D6E63] rounded-[6px] outline-none focus:border-[#D4AF37] transition-all duration-300"
  const selectCls = "w-full px-3.5 py-2.5 text-[15px] bg-white text-[#3E2723] border border-[#8D6E63] rounded-[6px] cursor-pointer outline-none focus:border-[#D4AF37] transition-all duration-300"
  const labelCls  = "block mb-1.5 text-[14px] font-semibold text-[#5D4037]"
  const thCls     = "text-left px-4 py-3.5 text-[15px] font-semibold tracking-wide border-b-2 border-[#D4AF37]"
  const tdCls     = "px-4 py-3 text-[15px] border-b border-[#D7B98E] text-[#3E2723]"

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-70px)] px-8 py-7 max-w-[1280px] mx-auto w-full">

        <section className="flex flex-col items-center text-center px-5 py-16 bg-gradient-to-br from-[#3E2723] to-[#5D4037] rounded-[10px] mb-8">
          <h1 className="text-[42px] font-bold text-[#D4AF37] mb-3">Place Your Order</h1>
          <p className="text-[#D4AF37] text-[15px]">Pick your sweets, fill the form, and we'll bake the rest.</p>
        </section>

        <h2 className="text-[30px] font-bold text-[#5D4037] mb-3">Your Cart</h2>
        <div className="w-full overflow-x-auto mt-5">
          <table className="w-full border-collapse rounded-[10px] overflow-hidden bg-white shadow-[0_4px_12px_rgba(62,39,35,0.08)]">
            <thead className="bg-[#3E2723] text-[#D4AF37]">
              <tr>{['Item','Quantity','Unit Price','Subtotal'].map(h => <th key={h} className={thCls}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {cartItems.map((row, i) => (
                <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#D7B98E]'} hover:bg-[#D4AF37] hover:cursor-pointer transition-colors duration-300`}>
                  <td className={tdCls}>{row.item}</td><td className={tdCls}>{row.qty}</td>
                  <td className={tdCls}>{row.unit}</td><td className={tdCls}>{row.sub}</td>
                </tr>
              ))}
              <tr className="bg-white">
                <td className="px-4 py-3 text-[15px] font-bold text-[#3E2723]">Total</td>
                <td /><td />
                <td className="px-4 py-3 text-[15px] font-bold text-[#3E2723]">19700.50</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-[30px] font-bold text-[#5D4037] mt-8 mb-3">Delivery Details</h2>
        <div className="flex flex-col w-[480px] max-w-full mx-auto my-8 p-7 bg-white border border-[#D7B98E] rounded-[10px] shadow-[0_6px_18px_rgba(62,39,35,0.1)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div><label className={labelCls}>Full Name</label><input type="text" placeholder="Sami" required className={inputCls} /></div>
            <div><label className={labelCls}>Phone Number</label><input type="tel" placeholder="+0312-098765" required className={inputCls} /></div>
            <div><label className={labelCls}>Email Address</label><input type="email" placeholder="sami@email.com" required className={inputCls} /></div>
            <div><label className={labelCls}>Delivery Address</label>
              <textarea placeholder="House #, Street, City" required className="w-full min-h-[110px] px-3.5 py-2.5 text-[15px] bg-[#FAF3E0] text-[#3E2723] border border-[#8D6E63] rounded-[6px] resize-y outline-none focus:border-[#D4AF37] transition-all duration-300" /></div>
            <div><label className={labelCls}>Delivery Time</label>
              <select className={selectCls}><option>As soon as possible (1 hr)</option><option>Today Evening</option><option>Tomorrow Morning</option><option>Schedule for later</option></select></div>
            <div><label className={labelCls}>Payment Method</label>
              <select className={selectCls}><option>Cash on Delivery</option><option>Credit / Debit Card</option><option>Online Wallet</option></select></div>
            <div className="flex justify-center mt-4">
              <button type="submit" className="px-8 py-3.5 text-[17px] font-semibold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all duration-300">Confirm Order</button>
            </div>
          </form>
        </div>

      </div>
      <Footer />
    </>
  )
}
