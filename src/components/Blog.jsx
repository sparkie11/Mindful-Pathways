import React from 'react'

const Blog = () => {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Stories That <span className="italic text-teal-700">Inspire</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((i) => (
          <article key={i} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Blog Title {i}</h3>
            <p className="text-gray-600 text-sm mb-4">
              Short description for blog post {i} that captures reader interest.
            </p>
            <a href="#" className="text-teal-700 underline text-sm">
              Read More
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog