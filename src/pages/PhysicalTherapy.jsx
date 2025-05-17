import React from 'react'
import { Link } from 'react-router-dom'

const PhysicalTherapy = () => {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-teal-700">Physical Therapy</h1>
      <p className="mb-6 text-gray-700">
        Physical therapy focuses on restoring movement and function when someone is affected by injury, illness or disability.
      </p>
      <p className="mb-6 text-gray-600">
        Our expert therapists use exercises, manual therapy, education, and equipment to help you recover and improve quality of life.
      </p>
      <Link to="/" className="text-teal-700 underline hover:text-teal-900">
        ← Back to Home
      </Link>
    </section>
  )
}

export default PhysicalTherapy
