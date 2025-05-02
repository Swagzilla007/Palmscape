import { Phone, Star, Utensils, Wifi, Sparkles, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import TestimonialSlider from '../components/TestimonialSlider';
import PropertyCard from '../components/PropertyCard';
import BookingForm from '../components/BookingForm';
import AnimatedSection from '../components/AnimatedSection';

const HomePage = () => {
  return (
    <>
      <Hero
        title="Experience Luxury Like Never Before"
        subtitle="Discover our exquisite collection of luxury villas and suites, nestled in the world's most breathtaking locations."
        bgClass="bg-hero-pattern"
        height="full"
      />
      
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Luxury hotel interior" 
                  className="rounded-sm shadow-custom"
                />
                <div className="absolute -bottom-8 -right-8 bg-accent-500 text-white p-6 rounded-sm hidden md:block">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-white" />
                    ))}
                  </div>
                  <p className="text-xl mt-2">Exceptional Experience</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} direction="left">
              <SectionTitle 
                title="Welcome to PalmScape"
                subtitle="Where luxury meets tranquility in the world's most breathtaking locations."
                center={false}
              />
              <p className="text-gray-600 mb-6">
                At PalmScape, we offer more than just accommodation - we create experiences that last a lifetime. 
                Our collection of exclusive villas and suites are designed to provide the perfect blend of luxury, 
                comfort, and authentic local experiences.
              </p>
              <Link to="/about" className="btn-primary">
                Discover Our Story
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Add other sections (Featured Properties, Services Preview, Booking Section, Testimonials) */}
      {/* You can copy the remaining sections from your existing code */}
    </>
  );
};

export default HomePage;
