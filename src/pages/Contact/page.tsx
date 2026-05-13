import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

export default function Contact() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Thanks! We will reply within 24 hours.')
  }

  const inputCls = "w-full px-3.5 py-2.5 text-[15px] bg-[#FAF3E0] text-[#3E2723] border border-[#8D6E63] rounded-[6px] outline-none focus:border-[#D4AF37] transition-all duration-300"
  const labelCls = "block mb-1.5 text-[14px] font-semibold text-[#5D4037]"

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-70px)] px-8 py-7 max-w-[1280px] mx-auto w-full">

        <section className="flex flex-col items-center text-center px-5 py-16 bg-gradient-to-br from-[#3E2723] to-[#5D4037] rounded-[10px] mb-8">
          <h1 className="text-[42px] font-bold text-[#D4AF37] mb-3">Get In Touch</h1>
          <p className="text-[#D4AF37] text-[15px]">We'd love to hear from you — custom orders, feedback, anything sweet.</p>
        </section>

        <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
          {[{ title: 'Visit Us', body: '24 Cocoa Lane\nSugar District' }, { title: 'Call Us', body: '+92322-4916998\n9am - 10pm' }, { title: 'Email Us', body: 'hello@sweetbite.shop' }].map(c => (
            <div key={c.title} className="flex flex-col w-[280px] text-center bg-white border border-[#D7B98E] rounded-[10px] p-4 shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300">
              <h3 className="text-[22px] font-bold text-[#D4AF37] mb-2">{c.title}</h3>
              <p className="text-[#5D4037] text-[15px] whitespace-pre-line">{c.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-[30px] font-bold text-center text-[#5D4037] mt-8 mb-3">Send Message</h2>
        <div className="flex flex-col w-[480px] max-w-full mx-auto my-8 p-7 bg-white border border-[#D7B98E] rounded-[10px] shadow-[0_6px_18px_rgba(62,39,35,0.1)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div><label className={labelCls}>Name</label><input type="text" required className={inputCls} /></div>
            <div><label className={labelCls}>Email</label><input type="email" required className={inputCls} /></div>
            <div><label className={labelCls}>Subject</label>
              <select className="w-full px-3.5 py-2.5 text-[15px] bg-white text-[#3E2723] border border-[#8D6E63] rounded-[6px] cursor-pointer outline-none focus:border-[#D4AF37] transition-all duration-300">
                <option>General Question</option><option>Custom Cake</option><option>Feedback</option><option>Careers</option>
              </select></div>
            <div><label className={labelCls}>Message</label>
              <textarea required className="w-full min-h-[110px] px-3.5 py-2.5 text-[15px] bg-[#FAF3E0] text-[#3E2723] border border-[#8D6E63] rounded-[6px] resize-y outline-none focus:border-[#D4AF37] transition-all duration-300" /></div>
            <div className="text-center mt-4">
              <button type="submit" className="px-8 py-3.5 text-[17px] font-semibold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all duration-300">Send Message</button>
            </div>
          </form>
        </div>

      </div>
      <Footer />
    </>
  )
}
