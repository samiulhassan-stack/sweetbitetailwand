import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Triple Chocolate Cake', price: 7000.00, quantity: 1, img: '/images/triple.jpg' },
    { id: 2, name: 'Salted Caramel Scoop', price: 4500.50, quantity: 2, img: '/images/salt.jpg' },
    { id: 3, name: 'Classic Tiramisu', price: 4000.00, quantity: 1, img: '/images/tir.jpg' },
  ])

  function updateQuantity(id: number, newQuantity: number) {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id))
    } else {
      setCartItems(prev => prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const btnLg = "px-8 py-3.5 text-[17px] font-semibold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300 dark:bg-[#2a1810] dark:hover:bg-[#D4AF37]"

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-70px)] px-8 py-7 max-w-[1280px] mx-auto w-full dark:bg-[#1a1a1a]">

        <section className="flex flex-col items-center text-center px-5 py-16 bg-gradient-to-br from-[#3E2723] to-[#5D4037] rounded-[10px] mb-8 dark:from-[#2a1810] dark:to-[#3d2b1f]">
          <h1 className="text-[42px] font-bold text-[#D4AF37] mb-3">Shopping Cart</h1>
          <p className="text-[#D4AF37] text-[15px]">Review your sweet selections before checkout.</p>
        </section>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-[30px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Your cart is empty</h2>
            <p className="text-[#5D4037] text-[15px] mb-5 dark:text-[#FAF3E0]">Add some delicious treats to get started!</p>
            <Link to="/menu">
              <button className={btnLg}>Browse Menu</button>
            </Link>
          </div>
        ) : (
          <>
            {/* CART ITEMS */}
            <div className="flex flex-col gap-4 mb-8">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 bg-white border border-[#D7B98E] rounded-[10px] p-4 shadow-[0_4px_12px_rgba(62,39,35,0.08)] dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                  <img src={item.img} alt={item.name} className="w-[80px] h-[80px] object-cover rounded-[6px]" />
                  <div className="flex-1">
                    <h3 className="text-[22px] font-bold text-[#5D4037] mb-1 dark:text-[#D4AF37]">{item.name}</h3>
                    <p className="text-[17px] font-semibold text-[#5D4037] dark:text-[#D4AF37]">Rs. {item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-[#D4AF37] text-[#3E2723] rounded font-bold hover:bg-[#B8941F] transition-colors duration-300"
                    >
                      -
                    </button>
                    <span className="text-[17px] font-semibold text-[#5D4037] min-w-[30px] text-center dark:text-[#D4AF37]">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-[#D4AF37] text-[#3E2723] rounded font-bold hover:bg-[#B8941F] transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => updateQuantity(item.id, 0)}
                    className="text-[#8B0000] hover:text-[#FF0000] font-bold text-[18px] ml-3 transition-colors duration-300"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* CART SUMMARY */}
            <div className="bg-white border border-[#D7B98E] rounded-[10px] p-6 shadow-[0_4px_12px_rgba(62,39,35,0.08)] dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              <h2 className="text-[30px] font-bold text-[#5D4037] mb-4 dark:text-[#D4AF37]">Order Summary</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[17px] text-[#5D4037] dark:text-[#FAF3E0]">Subtotal ({cartItems.length} items):</span>
                <span className="text-[22px] font-bold text-[#5D4037] dark:text-[#D4AF37]">Rs. {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[17px] text-[#5D4037] dark:text-[#FAF3E0]">Delivery Fee:</span>
                <span className="text-[17px] text-[#5D4037] dark:text-[#D4AF37]">Rs. 200.00</span>
              </div>
              <div className="border-t border-[#D7B98E] pt-4 mb-6 dark:border-[#4a4a4a]">
                <div className="flex justify-between items-center">
                  <span className="text-[22px] font-bold text-[#5D4037] dark:text-[#D4AF37]">Total:</span>
                  <span className="text-[30px] font-bold text-[#D4AF37]">Rs. {(total + 200).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link to="/menu">
                  <button className="px-8 py-3.5 text-[17px] font-semibold bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300 dark:hover:bg-[#D4AF37] dark:hover:text-[#2a1810]">
                    Continue Shopping
                  </button>
                </Link>
                <Link to="/order">
                  <button className={btnLg}>Proceed to Checkout</button>
                </Link>
              </div>
            </div>
          </>
        )}

      </div>
      <Footer />
    </>
  )
}