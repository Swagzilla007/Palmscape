import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ImageSlider = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-[60]"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <button
          onClick={handlePrev}
          className="absolute left-4 text-white/70 hover:text-white transition-colors"
        >
          <ChevronLeft size={32} />
        </button>

        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />
        </AnimatePresence>

        <button
          onClick={handleNext}
          className="absolute right-4 text-white/70 hover:text-white transition-colors"
        >
          <ChevronRight size={32} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
