import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({
  title,
  subtitle,
  bgClass,
  alignment = 'center',
  height = 'large',
  showButtons = true,
}) => {
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
  };

  const alignmentClasses = {
    center: 'text-center items-center justify-center',
    left: 'text-left items-start justify-center',
  };

  return (
    <section 
      className={`relative ${heightClasses[height]} flex items-center`}
    >
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${bgClass}`}
        style={{ 
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container-custom relative z-10">
        <div className={`flex flex-col ${alignmentClasses[alignment]} max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
          <motion.h1 
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-white/90 text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          
          {showButtons && (
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/contact" className="btn-primary">
                Book Your Stay
              </Link>
              <Link to="/services" className="btn bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20">
                Explore Services
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
