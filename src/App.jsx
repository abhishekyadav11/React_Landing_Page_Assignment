import React from 'react'
import Hero from './components/hero';
import Features from './components/features';
import Gallery from './components/gallery';
import Testimonials from './components/testimonial';
import Pricing from './components/price';
import Contact from './components/contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
   <>
    <Hero/>
    <Features/>
    <Gallery/>
    <Testimonials/>
    <Pricing/>
    <Contact/>
   </>
  )
}

export default App
