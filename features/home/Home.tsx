import Footer from '@/components/footer/Footer'
import Experts from '@/components/sections/home/Experts'
import FAQ from '@/components/sections/home/FAQ'
import Features from '@/components/sections/home/Features'
import Hero from '@/components/sections/home/Hero'
import Pricing from '@/components/sections/home/Pricing'
import Testimonials from '@/components/sections/home/Testimonials'

const Home = () => {
  return (
    <div className='space-y-10'>
      <section id="home" className="scroll-mt-25">
        <Hero />
      </section>
      <Experts />
      <section id='fonctionnalites' className="scroll-mt-25">
        <Features />
      </section>
      <section id='temoignages' className="scroll-mt-20">
        <Testimonials />
      </section>
      <section id='tarifs' className="scroll-mt-25">
        <Pricing />
      </section>
      <section id='faq' className="scroll-mt-25">
        <FAQ />
      </section>
      <Footer />
    </div>
  )
}

export default Home