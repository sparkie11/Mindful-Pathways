import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Team from './components/Team.jsx'
import Blog from './components/Blog.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Messages from './pages/Messages.jsx'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Blog />
        <Testimonials />
        <Contact />
        <Messages/>
      </main>
      <Footer />
    </>
  )
}

export default App