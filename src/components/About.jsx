import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import doctorImg from '../assets/img/img.jpg'; // update the path if needed

// Animation variants
const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } },
};

const About = () => (
  <section id="about" className="bg-white px-6 py-24 md:py-32">
    {/* Top Center Heading */}
    <motion.div
      className="text-center mb-14 md:mb-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeDown}
    >
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        Meet the Experts of <span className="italic text-teal-700">Power Hour.</span>
      </h2>
    </motion.div>

    {/* Content Section */}
    <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
      {/* Text Block */}
      <motion.div
        className="text-center md:text-left grow"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
      >
        <p className="text-gray-600 max-w-xl md:max-w-md mx-auto md:mx-0 mb-8 md:mb-10 text-lg">
          Jessica, physiotherapy manager at Power Hour Physiotherapy Clinic, brings over
          15 years of experience in Rehabilitation &amp; Kinesiology. Her evidence‑based
          approach ensures every patient receives the highest standard of care.
        </p>

        <div className="flex justify-center md:justify-start gap-6 text-teal-700 text-2xl">
          <a href="#" aria-label="Facebook" className="hover:text-teal-500 transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-teal-500 transition">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-teal-500 transition">
            <FaXTwitter />
          </a>
        </div>
      </motion.div>

    
      <motion.div
        className="shrink-0 w-full sm:w-3/4 md:w-1/2 lg:w-[38%]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeRight}
      >
        <img
          src={doctorImg}
          alt="Dr. Jessica – Physiotherapy Manager"
          className="w-full h-auto rounded-3xl shadow-xl object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
);

export default About;
