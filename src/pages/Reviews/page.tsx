import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

export default function Reviews() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Thanks for your review!')
  }

  const inputCls  = "w-full px-3.5 py-2.5 text-[15px] bg-[#FAF3E0] text-[#3E2723] border border-[#8D6E63] rounded-[6px] outline-none focus:border-[#D4AF37] transition-all duration-300"
  const selectCls = "w-full px-3.5 py-2.5 text-[15px] bg-white text-[#3E2723] border border-[#8D6E63] rounded-[6px] cursor-pointer outline-none focus:border-[#D4AF37] transition-all duration-300"
  const labelCls  = "block mb-1.5 text-[14px] font-semibold text-[#5D4037]"
  const thCls     = "text-left px-4 py-3.5 text-[15px] font-semibold tracking-wide border-b-2 border-[#D4AF37]"
  const tdCls     = "px-4 py-3 text-[15px] border-b border-[#D7B98E] text-[#3E2723] whitespace-nowrap"

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-70px)] px-8 py-7 max-w-[1280px] mx-auto w-full">

        <section className="flex flex-col items-center text-center px-5 py-16 bg-gradient-to-br from-[#3E2723] to-[#5D4037] rounded-[10px] mb-8">
          <h1 className="text-[42px] font-bold text-[#D4AF37] mb-3">Customer Reviews</h1>
          <p className="text-[#D4AF37] text-[15px]">Real words from real sweet tooths.</p>
        </section>

        <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
          {[
            { title: 'Best Tiramisu in the city', body: "SweetBite's tiramisu is in another league entirely.", by: '★★★★★ — Ali.'     },
            { title: 'Wedding cake of dreams',    body: 'Guests still talk about it months later.',            by: '★★★★★ — Sami'     },
            { title: 'The macarons!',             body: 'Pistachio one is dangerously good.',                  by: '★★★★★ — Hassan.' },
          ].map(r => (
            <div key={r.title} className="flex flex-col w-[320px] bg-white border border-[#D7B98E] rounded-[10px] p-4 shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300">
              <h3 className="text-[22px] font-bold text-[#5D4037] mb-2">{r.title}</h3>
              <p className="text-[#5D4037] text-[15px] mb-2">{r.body}</p>
              <h4 className="text-[17px] font-semibold text-[#D4AF37]">{r.by}</h4>
            </div>
          ))}
        </div>

        <h2 className="text-[30px] font-bold text-[#5D4037] mt-8 mb-3">All Reviews</h2>
        <div className="w-full overflow-x-auto mt-5">
          <table className="w-full border-collapse rounded-[10px] overflow-hidden bg-white shadow-[0_4px_12px_rgba(62,39,35,0.08)]">
            <thead className="bg-[#3E2723] text-[#D4AF37]">
              <tr>{['Customer','Item','Rating','Comment','Date'].map(h => <th key={h} className={thCls}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {[['Ahmad.','Tiramisu','5/5','Best in city','2026-04-22'],['Zain','Wedding Cake','5/5','Perfect','2026-04-18'],['Ammar.','Macarons','5/5','Too good','2026-04-15']].map((row, i) => (
                <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#D7B98E]'} hover:bg-[#D4AF37] hover:cursor-pointer transition-colors duration-300`}>
                  {row.map((cell, j) => <td key={j} className={tdCls}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-[30px] font-bold text-center text-[#5D4037] mt-8 mb-3">Leave a Review</h2>
        <div className="flex flex-col w-[480px] max-w-full mx-auto my-8 p-7 bg-white border border-[#D7B98E] rounded-[10px] shadow-[0_6px_18px_rgba(62,39,35,0.1)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div><label className={labelCls}>Name</label><input type="text" required className={inputCls} /></div>
            <div><label className={labelCls}>Item</label>
              <select className={selectCls}><option>Tiramisu</option><option>Chocolate Cake</option><option>Macarons</option></select></div>
            <div><label className={labelCls}>Rating</label>
              <select className={selectCls}><option>5 - Excellent</option><option>4 - Good</option><option>3 - Average</option></select></div>
            <div><label className={labelCls}>Message</label>
              <textarea required className="w-full min-h-[110px] px-3.5 py-2.5 text-[15px] bg-[#FAF3E0] text-[#3E2723] border border-[#8D6E63] rounded-[6px] resize-y outline-none focus:border-[#D4AF37] transition-all duration-300" /></div>
            <div className="text-center mt-4">
              <button type="submit" className="px-8 py-3.5 text-[17px] font-semibold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all duration-300">Submit Review</button>
            </div>
          </form>
        </div>

      </div>
      <Footer />
    </>
  )
}
