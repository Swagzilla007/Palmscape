import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary-800" />
      </div>
      <h3 className="text-xl font-serif font-semibold text-primary-950 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
