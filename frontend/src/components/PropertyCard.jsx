import { motion } from 'framer-motion';
import { Bed, Bath, Users, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      className="group bg-white rounded-sm overflow-hidden shadow-custom h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-primary-900 text-white px-3 py-1 text-sm font-medium">
          {price}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-4 mb-5 text-sm text-gray-700">
          <div className="flex items-center gap-1">
            <Bed size={16} className="text-primary-700" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} className="text-primary-700" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} className="text-primary-700" />
            <span>For {guests}</span>
          </div>
          {breakfast && (
            <div className="flex items-center gap-1">
              <Coffee size={16} className="text-primary-700" />
              <span>Breakfast</span>
            </div>
          )}
        </div>
        <div className="mt-auto">
          <Link to="/contact" className="btn-outline w-full text-center">
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
