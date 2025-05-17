import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <p>&copy; {new Date().getFullYear()} Power Hour. All rights reserved.</p>
    </footer>
  )
}

export default Footer