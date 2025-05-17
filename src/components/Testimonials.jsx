import React from 'react'

const Testimonials = () => {
  return (
    <section className="bg-teal-50 py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        What Our <span className="italic text-teal-700">Clients</span> Say.
      </h2>
      <div className="max-w-2xl mx-auto text-gray-800">
        <blockquote className="italic mb-4">
          “I was skeptical, but the therapy sessions transformed my recovery. Highly
          recommended!”
        </blockquote>
        <cite className="not-italic font-semibold">— Jack Aranda</cite>
      </div>
    </section>
  )
}

export default Testimonials
