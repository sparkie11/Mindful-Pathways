import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => (
  <motion.section
    id="hero"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.6 }}
    variants={container}
    className="bg-white text-center py-24 md:py-32"
  >
    <motion.div
      variants={container}
      className="max-w-4xl mx-auto px-6"
    >
      <motion.p
        variants={item}
        className="uppercase tracking-wide text-gray-500 mb-3 text-sm"
      >
        Get the care you deserve
      </motion.p>

      <motion.h2
        variants={item}
        className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6"
      >
        Don’t Be <span className="text-teal-700 italic">Sidelined</span> By{' '}
        <span className="text-teal-700 italic">Injury</span>
      </motion.h2>

      <motion.button
        variants={item}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="bg-black text-white px-8 py-3 rounded-md text-lg hover:bg-gray-800 transition shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        Read More
      </motion.button>
    </motion.div>
  </motion.section>
);

export default Hero;
