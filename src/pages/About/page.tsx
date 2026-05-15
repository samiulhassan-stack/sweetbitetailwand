import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-70px)] px-8 py-7 max-w-[1280px] mx-auto w-full dark:bg-[#1a1a1a]">

        <section className="flex flex-col items-center text-center px-5 py-16 bg-gradient-to-br from-[#3E2723] to-[#5D4037] rounded-[10px] mb-8 dark:from-[#2a1810] dark:to-[#3d2b1f]">
          <h1 className="text-[42px] font-bold text-[#D4AF37] mb-3">About SweetBite</h1>
          <p className="text-[#D4AF37] text-[15px] max-w-[620px]">
            Crafting sweet memories since 2011 with passion, quality, and a commitment to excellence.
          </p>
        </section>

        {/* OUR STORY */}
        <section className="mb-8">
          <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-6 dark:text-[#D4AF37]">Our Story</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex-1 min-w-[300px] max-w-[500px]">
              <p className="text-[#5D4037] text-[15px] mb-4 dark:text-[#FAF3E0]">
                SweetBite began as a small family dream in 2011. What started as a humble bakery with just three recipes 
                has grown into a beloved destination for dessert enthusiasts across the city.
              </p>
              <p className="text-[#5D4037] text-[15px] mb-4 dark:text-[#FAF3E0]">
                Our founder, inspired by grandmother's secret recipes and European pastry techniques, set out to create 
                a place where every bite tells a story of tradition, innovation, and pure joy.
              </p>
              <p className="text-[#5D4037] text-[15px] dark:text-[#FAF3E0]">
                Today, we continue that legacy with the same commitment to quality ingredients, handcrafted techniques, 
                and the belief that life's sweetest moments deserve the perfect dessert.
              </p>
            </div>
            <div className="flex-1 min-w-[300px] max-w-[400px]">
              <img src="/images/staaa.jpg" alt="SweetBite Story" className="w-full h-[300px] object-cover rounded-[10px] shadow-[0_4px_12px_rgba(62,39,35,0.15)]" />
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="mb-8">
          <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
            <div className="flex flex-col w-[380px] bg-white border border-[#D7B98E] rounded-[10px] p-6 text-center shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              <div className="text-[40px] mb-3">🎯</div>
              <h3 className="text-[22px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Our Mission</h3>
              <p className="text-[#5D4037] text-[15px] dark:text-[#FAF3E0]">
                To create exceptional desserts that bring joy, celebrate life's special moments, and build lasting memories 
                through the perfect blend of traditional craftsmanship and innovative flavors.
              </p>
            </div>
            <div className="flex flex-col w-[380px] bg-white border border-[#D7B98E] rounded-[10px] p-6 text-center shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              <div className="text-[40px] mb-3">🌟</div>
              <h3 className="text-[22px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Our Vision</h3>
              <p className="text-[#5D4037] text-[15px] dark:text-[#FAF3E0]">
                To be the most beloved dessert destination, known for our commitment to quality, creativity, and the ability 
                to turn every ordinary day into a sweet celebration.
              </p>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="mb-8">
          <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-6 dark:text-[#D4AF37]">Our Achievements</h2>
          <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
            {[
              { year: '2011', title: 'SweetBite Founded', desc: 'Started with 3 signature recipes' },
              { year: '2015', title: 'Best Bakery Award', desc: 'City\'s Choice Award for Excellence' },
              { year: '2018', title: '50,000+ Happy Customers', desc: 'Milestone celebration' },
              { year: '2020', title: 'Online Expansion', desc: 'Launched delivery service' },
              { year: '2023', title: 'Sustainability Initiative', desc: 'Eco-friendly packaging adopted' },
              { year: '2026', title: '100+ Unique Recipes', desc: 'Constantly innovating flavors' }
            ].map(achievement => (
              <div key={achievement.year} className="flex flex-col w-[280px] bg-white border border-[#D7B98E] rounded-[10px] p-4 text-center shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <h3 className="text-[30px] font-bold text-[#D4AF37] mb-2">{achievement.year}</h3>
                <h4 className="text-[17px] font-semibold text-[#5D4037] mb-2 dark:text-[#D4AF37]">{achievement.title}</h4>
                <p className="text-[#5D4037] text-[15px] dark:text-[#FAF3E0]">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUALITY COMMITMENT */}
        <section className="mb-8">
          <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-6 dark:text-[#D4AF37]">Our Quality Commitment</h2>
          <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
            {[
              { 
                icon: '🥛', 
                title: 'Premium Ingredients', 
                desc: 'We source the finest cocoa, vanilla, dairy, and seasonal fruits from trusted suppliers.' 
              },
              { 
                icon: '👨‍🍳', 
                title: 'Expert Craftsmanship', 
                desc: 'Our skilled pastry chefs bring years of experience and passion to every creation.' 
              },
              { 
                icon: '🕐', 
                title: 'Fresh Daily', 
                desc: 'Everything is baked fresh daily to ensure optimal taste and quality.' 
              },
              { 
                icon: '🌱', 
                title: 'Sustainable Practices', 
                desc: 'We\'re committed to environmentally responsible sourcing and packaging.' 
              }
            ].map(commitment => (
              <div key={commitment.title} className="flex flex-col w-[280px] bg-white border border-[#D7B98E] rounded-[10px] p-6 text-center shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <div className="text-[40px] mb-3">{commitment.icon}</div>
                <h3 className="text-[22px] font-bold text-[#5D4037] mb-2 dark:text-[#D4AF37]">{commitment.title}</h3>
                <p className="text-[#5D4037] text-[15px] dark:text-[#FAF3E0]">{commitment.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="text-center bg-white border border-[#D7B98E] rounded-[10px] p-8 shadow-[0_4px_12px_rgba(62,39,35,0.08)] dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          <h2 className="text-[30px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Experience SweetBite Today</h2>
          <p className="text-[#5D4037] text-[15px] mb-5 max-w-[600px] mx-auto dark:text-[#FAF3E0]">
            Join thousands of satisfied customers who have made SweetBite part of their sweetest memories. 
            Visit us today and taste the difference that passion and quality make.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/menu">
              <button className="px-8 py-3.5 text-[17px] font-semibold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300 dark:bg-[#2a1810] dark:hover:bg-[#D4AF37]">
                View Our Menu
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-3.5 text-[17px] font-semibold bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300 dark:hover:bg-[#D4AF37] dark:hover:text-[#2a1810]">
                Visit Our Store
              </button>
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}