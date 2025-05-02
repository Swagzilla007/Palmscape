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
        title="Your Luxury Villa Escape"
        subtitle="Experience the perfect blend of comfort and elegance in our exclusive beachfront villa."
        bgClass="bg-hero-pattern"
        height="full"
      />
      
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img 
                  src="/src/assets/images/lobby image.jpeg" 
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
                title="Welcome to PalmScape Villa"
                subtitle="Where tranquility meets luxury in a breathtaking beachfront location."
                center={false}
              />
              <p className="text-gray-600 mb-6">
                At PalmScape Villa, we offer more than just accommodation - we create an experience that lasts a lifetime. 
                Our exclusive villa is designed to provide the perfect blend of luxury, comfort, and authentic local charm,
                all while enjoying the pristine beach views.
              </p>
              <Link to="/about" className="btn-primary">
                Discover Our Story
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Room Types Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Villa Accommodations"
            subtitle="Explore our luxurious rooms and suites within the villa."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard 
              imageUrl="\src\assets\images\prop image 1.jpeg"
              title="Master Suite"
              price="From LKR 50,000/night"
              description="Luxurious master suite with ocean views, private balcony, and premium amenities."
              beds={1}
              baths={1.5}
              guests={2}
              breakfast={true}
              delay={0.1}
            />
            
            <PropertyCard 
              imageUrl="\src\assets\images\prop image 2.jpeg"
              title="Deluxe Room"
              price="From LKR 40,000/night"
              description="Elegant room with garden views, king-size bed, and luxury bathroom."
              beds={1}
              baths={1}
              guests={2}
              breakfast={true}
              delay={0.2}
            />
            
            <PropertyCard 
              imageUrl="/src/assets/images/prop image 3.webp"
              title="Family Suite"
              price="From LKR 30,000/night"
              description="Spacious suite with separate living area, perfect for families."
              beds={2}
              baths={2}
              guests={4}
              breakfast={true}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section className="section-padding bg-primary-100">
        <div className="container-custom">
          <SectionTitle 
            title="Exceptional Services"
            subtitle="Indulge in our premium services designed to elevate your stay."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <FeatureCard 
              icon={Utensils}
              title="Fine Dining"
              description="Experience exquisite culinary creations prepared by our award-winning chefs."
              delay={0.1}
            />
            
            <FeatureCard 
              icon={Sparkles}
              title="Wellness & Spa"
              description="Rejuvenate your body and mind with our comprehensive spa treatments."
              delay={0.2}
            />
            
            <FeatureCard 
              icon={Phone}
              title="24/7 Concierge"
              description="Our dedicated team is available around the clock for your needs."
              delay={0.3}
            />
          </div>
        
      </section>
      
      {/* Booking Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionTitle 
                title="Book Your Dream Getaway"
                subtitle="Check availability and secure your reservation."
                center={false}
              />
              <p className="text-gray-600 mb-8">
                Experience the perfect blend of luxury and comfort. Our booking process 
                is designed to be simple and efficient.
              </p>
              <BookingForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialSlider />
    </>
  );
};

export default HomePage;
