import React from 'react';
import { motion } from 'framer-motion';

import physicalImg     from '../assets/img/Physical Therapy.jpeg';
import speechImg       from '../assets/img/Speech Therapy.jpeg';
import respiratoryImg  from '../assets/img/Respiratory Therapy.jpeg';
import vocationalImg   from '../assets/img/Vocational Rehab.jpeg';

const services = [
  { title: 'Physical Therapy', img: physicalImg },
  { title: 'Speech Therapy', img: speechImg },
  { title: 'Respiratory Therapy', img: respiratoryImg },
  { title: 'Vocational Rehab', img: vocationalImg },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Services = () => {
  return (
    <motion.section
      id="services"
      className="relative bg-gradient-to-br from-teal-800 to-cyan-900 py-24 px-6 text-white overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Glow effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          className="uppercase tracking-widest text-cyan-200 text-sm mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Our Services
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Specialized Care, Delivered{' '}
          <span className="text-cyan-300 italic">Professionally</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto mb-12 text-cyan-100 text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience compassionate, results-driven therapy programs tailored to
          your individual needs.
        </motion.p>

        {/* Service Cards */}
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 justify-center"
          variants={container}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-xs overflow-hidden rounded-lg shadow-lg hover:shadow-cyan-400/40 transition"
            >
              {/* Image Banner */}
              <div className="relative w-full h-44 bg-gray-800">
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Content Panel */}
              <div className="bg-gray-900/95 p-6 text-left">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Some quick example text to build on the card title and make up the bulk
                  of the card&apos;s content.
                </p>
                <a
                  href="#"
                  className="inline-block text-sm text-cyan-400 underline hover:text-cyan-200 transition"
                >
                  Learn&nbsp;More
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
