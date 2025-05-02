import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emma Thompson',
    role: 'Business Executive',
    content: 'PalmScape Villa exceeded all my expectations. The attention to detail and personalized service made our anniversary weekend truly unforgettable. We will definitely be returning!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Gayathra Chanith',
    role: 'Travel Blogger',
    content: 'As someone who stays in luxury accommodations around the world, I can confidently say that PalmScape Villa offers one of the most exquisite experiences in Sri Lanka. The perfect blend of luxury and comfort.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Kavindi dananjana',
    role: 'Wedding Planner',
    content: 'We hosted our intimate wedding at PalmScape Villa and it was magical. The staff went above and beyond to ensure everything was perfect. Our guests are still talking about it!',
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay, current]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <div 
      className="relative overflow-hidden py-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container-custom">
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8">
                "{testimonials[current].content}"
              </blockquote>
              <div>
                <p className="font-serif text-xl text-primary-950">{testimonials[current].name}</p>
                <p className="text-gray-600">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-primary-50"
          >
            <ChevronLeft className="w-6 h-6 text-primary-800" />
          </button>
          
          <button 
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-primary-50"
          >
            <ChevronRight className="w-6 h-6 text-primary-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
