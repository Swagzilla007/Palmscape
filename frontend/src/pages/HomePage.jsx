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
        title="Your Beachfront Villa Getaway"
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
                  src="/images/lobby image.jpeg" 
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
            subtitle="Explore our cozy rooms and suites within the villa."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard 
              imageUrl="\images\prop image 1.jpeg"
              title="Master Suite"
              price="From LKR 25,000/night"
              description="Comfortable suite with beautiful ocean views and a private balcony."
              beds={1}
              baths={2}
              guests={2}
              breakfast={true}
              delay={0.1}
            />
            
            <PropertyCard 
              imageUrl="\images\prop image 2.jpeg"
              title="Deluxe Room"
              price="From LKR 14,000/night"
              description="Elegant room with garden views, king-size bed, and cozy bathroom."
              beds={1}
              baths={1}
              guests={2}
              breakfast={true}
              delay={0.2}
            />
            
            <PropertyCard 
              imageUrl="/images/prop image 3.webp"
              title="Family Suite"
              price="From LKR 35,000/night"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Utensils}
              title="Fine Dining"
              description="Experience exquisite culinary creations prepared by our award-winning chefs using the finest local ingredients."
              delay={0.1}
            />
            
            <FeatureCard 
              icon={Sparkles}
              title="Wellness & Spa"
              description="Rejuvenate your body and mind with our comprehensive range of spa treatments and wellness activities."
              delay={0.2}
            />
            
            <FeatureCard 
              icon={Phone}
              title="Concierge Services"
              description="Our dedicated concierge team is available 24/7 to fulfill any request and create personalized experiences."
              delay={0.3}
            />
            
            <FeatureCard 
              icon={Wifi}
              title="High-Speed Connectivity"
              description="Stay connected with complimentary high-speed Wi-Fi available throughout all our properties."
              delay={0.4}
            />
            
            <FeatureCard 
              icon={Clock}
              title="Private Transfers"
              description="Enjoy seamless journeys with our private transfer services from the airport to your accommodation."
              delay={0.5}
            />
            
            <FeatureCard 
              icon={Star}
              title="Tailor-Made Experiences"
              description="Let us create unique, memorable experiences customized to your preferences and interests."
              delay={0.6}
            />
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionTitle 
                title="Book Your Dream Getaway"
                subtitle="Check availability and secure your reservation for a luxurious escape."
                center={false}
              />
              <p className="text-gray-600 mb-6">
                Our booking process is designed to be simple and efficient, allowing you to secure your dream accommodation with ease. 
              </p>
              <p className="text-gray-600 mb-8">
                Have special requirements or questions? Contact our dedicated reservations team who are ready to assist you with personalized service.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-800 font-semibold">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Check Availability</p>
                    <p className="text-sm text-gray-600">Find your preferred dates</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-800 font-semibold">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Select Accommodation</p>
                    <p className="text-sm text-gray-600">Choose your perfect room type</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-800 font-semibold">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Confirm Details</p>
                    <p className="text-sm text-gray-600">Review your booking</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-800 font-semibold">4</span>
                  </div>
                  <div>
                    <p className="font-medium">Secure Reservation</p>
                    <p className="text-sm text-gray-600">Easy payment process</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} direction="left">
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
