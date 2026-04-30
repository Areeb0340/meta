import { useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Projects } from './components/sections/Projects'
import { Portfolio } from './components/sections/Portfolio'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'
import { FAQ } from './components/sections/FAQ'
import { Footer } from './components/Footer'
import { GetAQuoteTab } from './components/GetAQuoteTab'

function App() {


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <Portfolio />
        <Testimonials />
        <Contact />
        <FAQ/>
      </main>
      <Footer />
      <GetAQuoteTab />
    </div>
  )
}

export default App
