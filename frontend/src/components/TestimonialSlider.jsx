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
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 
    
    return () => clearInterval(interval);
  }, [current, autoplay]);
  
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <div 
      className="relative overflow-hidden py-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-2xl md:text-3xl font-serif text-primary-950">What Our Guests Say</h3>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 border border-primary-200 rounded-full hover:bg-primary-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-primary-800" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 border border-primary-200 rounded-full hover:bg-primary-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-primary-800" />
            </button>
          </div>
        </div>
        
        <div className="relative h-[280px] md:h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <div className="bg-white p-8 rounded-sm shadow-custom">
                <div className="flex mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonials[current].content}"</p>
                <div>
                  <p className="font-medium text-primary-900">{testimonials[current].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                current === index ? 'bg-primary-700' : 'bg-primary-200'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
