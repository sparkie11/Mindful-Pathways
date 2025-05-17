import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-teal-700">Power <span className="text-black">Hour</span></h1>
      <nav className="space-x-6 hidden md:flex">
        <a href="#" className="text-gray-700 hover:text-teal-700">Home</a>
        <a href="#about" className="text-gray-700 hover:text-teal-700">About</a>
        <a href="#services" className="text-gray-700 hover:text-teal-700">Services</a>
        <a href="#contact" className="text-gray-700 hover:text-teal-700">Contact</a>
      </nav>
      <button className="bg-black text-white px-4 py-2 rounded-md hidden md:block">Book Appointment</button>
    </header>
  )
}

export default Header