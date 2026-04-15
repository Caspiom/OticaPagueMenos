import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandsStrip from './components/BrandsStrip'
import FeaturedProducts from './components/FeaturedProducts'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import ContactCTA from './components/ContactCTA'
import Location from './components/Location'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import PriceBar from './components/PriceBar'

export default function App() {
  return (
    <div className="bg-brand-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PriceBar />
        <BrandsStrip />
        <FeaturedProducts />
        <Services />
        <About />
        <Testimonials />
        <ContactCTA />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
