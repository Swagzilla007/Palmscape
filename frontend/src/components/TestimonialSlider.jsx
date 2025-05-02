import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Executive",
    content: "An absolutely magnificent experience! The villa exceeded all expectations, and the staff's attention to detail was impeccable.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Travel Enthusiast",
    content: "The perfect blend of luxury and comfort. The ocean views from our villa were breathtaking, and the service was world-class.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Interior Designer",
    content: "The attention to design details and the overall aesthetics of the property are remarkable. A truly inspiring space.",
    rating: 5
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <div>
                <p className="font-serif text-xl text-primary-950">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-primary-50"
          >
            <ChevronLeft className="w-6 h-6 text-primary-800" />
          </button>
          
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-primary-50"
          >
            <ChevronRight className="w-6 h-6 text-primary-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
