import { motion } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0, direction = "right" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "right" ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
