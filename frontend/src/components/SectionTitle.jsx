import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  center = false,
  light = false
}) => {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className={`inline-block h-1 w-12 ${light ? 'bg-primary-200' : 'bg-accent-500'} mb-3`}></span>
        <h2 className={`text-3xl md:text-4xl font-serif font-bold ${light ? 'text-white' : 'text-primary-950'} mb-3`}>
          {title}
        </h2>
        <p className={`${light ? 'text-primary-100' : 'text-gray-600'} text-lg`}>
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
};

export default SectionTitle;
