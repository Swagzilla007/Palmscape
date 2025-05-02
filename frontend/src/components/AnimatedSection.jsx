import { motion } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '' 
}) => {
  const getInitialAndAnimate = () => {
    switch (direction) {
      case 'up':
        return { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 } };
      case 'down':
        return { initial: { y: -40, opacity: 0 }, animate: { y: 0, opacity: 1 } };
      case 'left':
        return { initial: { x: 40, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      case 'right':
        return { initial: { x: -40, opacity: 0 }, animate: { x: 0, opacity: 1 } };
      case 'none':
        return { initial: { opacity: 0 }, animate: { opacity: 1 } };
      default:
        return { initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 } };
    }
  };

  const { initial, animate } = getInitialAndAnimate();

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
