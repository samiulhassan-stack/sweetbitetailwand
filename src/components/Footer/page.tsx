import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#3E2723] text-[#FAF3E0] mt-10 pt-8 pb-3.5 px-6">
      <div className="flex flex-wrap justify-between gap-7 max-w-[1180px] mx-auto">

        <div className="flex flex-col flex-1 min-w-[200px]">
          <h1 className="text-[24px] font-bold text-[#D4AF37] mb-2">SweetBite</h1>
          <p className="text-[#D7B98E] text-[14px]">Tiny bites. Big happiness. Since 2011.</p>
        </div>

        <div className="flex flex-col flex-1 min-w-[200px]">
          <h2 className="text-[18px] font-bold text-[#D4AF37] mb-2.5">Explore</h2>
          <Link to="/"        className="text-[#D7B98E] no-underline py-1 text-[14px] hover:text-[#D4AF37] transition-colors duration-300">Home</Link>
          <Link to="/menu"    className="text-[#D7B98E] no-underline py-1 text-[14px] hover:text-[#D4AF37] transition-colors duration-300">Menu</Link>
          <Link to="/gallery" className="text-[#D7B98E] no-underline py-1 text-[14px] hover:text-[#D4AF37] transition-colors duration-300">Gallery</Link>
          <Link to="/reviews" className="text-[#D7B98E] no-underline py-1 text-[14px] hover:text-[#D4AF37] transition-colors duration-300">Reviews</Link>
        </div>

        <div className="flex flex-col flex-1 min-w-[200px]">
          <h2 className="text-[18px] font-bold text-[#D4AF37] mb-2.5">Customer</h2>
          <Link to="/order"     className="text-[#D7B98E] no-underline py-1 text-[14px] hover:text-[#D4AF37] transition-colors duration-300">Order</Link>
          <Link to="/contact"   className="text-[#D7B98E] no-underline py-1 text-[14px] hover:text-[#D4AF37] transition-colors duration-300">Contact</Link>
          <Link to="/dashboard" className="text-[#D7B98E] no-underline py-1 text-[14px] hover:text-[#D4AF37] transition-colors duration-300">Dashboard</Link>
        </div>

        <div className="flex flex-col flex-1 min-w-[200px]">
          <h2 className="text-[18px] font-bold text-[#D4AF37] mb-2.5">Visit</h2>
          <p className="text-[#D7B98E] text-[14px]">24 Cocoa Lane</p>
          <p className="text-[#D7B98E] text-[14px]">9am – 10pm</p>
          <p className="text-[#D7B98E] text-[14px]">+923324916998</p>
        </div>

      </div>
      <p className="text-center mt-5 pt-3.5 border-t border-[#5D4037] text-[#D7B98E] text-[13px]">
        © 2026 SweetBite Shop. All rights reserved.
      </p>
    </footer>
  )
}
