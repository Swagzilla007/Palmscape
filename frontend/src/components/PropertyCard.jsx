import { motion } from 'framer-motion';
import { Bed, Bath, Users, Coffee } from 'lucide-react';

const PropertyCard = ({ 
  imageUrl, 
  title, 
  price, 
  description, 
  beds, 
  baths, 
  guests, 
  breakfast,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-64">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
          <span className="text-primary-800 font-medium">{price}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-primary-950 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Bed size={18} />
            <span>{beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={18} />
            <span>{baths}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={18} />
            <span>{guests}</span>
          </div>
          {breakfast && (
            <div className="flex items-center gap-1">
              <Coffee size={18} />
              <span>Breakfast</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
