import { Home, Users, Award, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import TestimonialSlider from '../components/TestimonialSlider';

const AboutPage = () => {
  return (
    <>
      <Hero
        title="About PalmScape Villa"
        subtitle="Discover the story behind our commitment to exceptional Sri Lankan hospitality."
        bgClass="bg-about-pattern"
        alignment="left"
        height="medium"
        showButtons={false}
      />
      
      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionTitle 
                title="Our Story"
                subtitle="A journey of luxury and exceptional hospitality."
                center={false}
              />
              <p className="text-gray-600 mb-6">
                Established in 2023, PalmScape Villa emerged from a vision to create an extraordinary retreat that 
                combines comfort with authentic Sri Lankan hospitality. Our beachfront villa stands as a 
                testament to elegant design and exceptional service.
              </p>
              <p className="text-gray-600">
                Today, PalmScape Villa is recognized as a premier budget friendly accommodation in Chilaw, offering an 
                unforgettable experience that blends modern luxury with local charm. Our location was carefully 
                selected to provide our guests with stunning ocean views and easy access to local attractions.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-4">
                
                <img 
                  src="\images\bg for home.webp" 
                  alt="Villa exterior" 
                  className="rounded-sm shadow-custom"
                />
                <img 
                  src="\images\prop image 3.webp" 
                  alt="Villa pool" 
                  className="rounded-sm shadow-custom translate-y-8"
                />
                <img 
                  src="\assets\images\room.avif" 
                  alt="Villa interior" 
                  className="rounded-sm shadow-custom -translate-y-8"
                />
                <img 
                  src="\assets\images\swimpool.webp" 
                  alt="Villa bedroom" 
                  className="rounded-sm shadow-custom"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section-padding bg-primary-100">
        <div className="container-custom">
          <SectionTitle 
            title="Our Core Values"
            subtitle="The principles that guide us in creating exceptional experiences."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 rounded-sm shadow-custom">
                <h3 className="text-xl font-medium mb-4 flex items-center gap-3">
                  <span className="bg-primary-100 p-2 rounded-full">
                    <Award size={24} className="text-primary-800" />
                  </span>
                  Excellence in Every Detail
                </h3>
                <p className="text-gray-600">
                  We believe that true luxury lies in the details. From premium amenities to personalized service,
                  every aspect of your stay at PalmScape Villa is crafted to meet the highest standards of quality 
                  and comfort. Our villa is meticulously maintained to ensure a flawless experience.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-sm shadow-custom">
                <h3 className="text-xl font-medium mb-4 flex items-center gap-3">
                  <span className="bg-primary-100 p-2 rounded-full">
                    <Users size={24} className="text-primary-800" />
                  </span>
                  Personalized Service
                </h3>
                <p className="text-gray-600">
                  Each guest is unique, with individual preferences and expectations. Our dedicated team takes pride 
                  in understanding your needs and tailoring our services accordingly. From special dietary requirements 
                  to custom experiences, we ensure your stay is truly personal.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-8 rounded-sm shadow-custom">
                <h3 className="text-xl font-medium mb-4 flex items-center gap-3">
                  <span className="bg-primary-100 p-2 rounded-full">
                    <Home size={24} className="text-primary-800" />
                  </span>
                  Authentic Sri Lankan Charm
                </h3>
                <p className="text-gray-600">
                  PalmScape Villa beautifully reflects the rich culture and warmth of Sri Lankan hospitality. 
                  We incorporate local design elements and work with local artisans to create an authentic yet 
                  luxurious experience that connects you with the heart of Chilaw.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="bg-white p-8 rounded-sm shadow-custom">
                <h3 className="text-xl font-medium mb-4 flex items-center gap-3">
                  <span className="bg-primary-100 p-2 rounded-full">
                    <Clock size={24} className="text-primary-800" />
                  </span>
                  Timeless Luxury
                </h3>
                <p className="text-gray-600">
                  While offering modern amenities, we believe in creating timeless experiences. Our villa combines 
                  classic elegance with contemporary comfort, prioritizing quality and craftsmanship that stands 
                  the test of time.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Team"
            subtitle="Meet the dedicated professionals who make your stay exceptional."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="relative mb-5 mx-auto w-60 h-60 rounded-full overflow-hidden shadow-custom">
                  <img 
                    src="\images\Picsart_24-03-24_18-37-17-485.jpg"
                    alt="Gayathra Chanith" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Gayathra Chanith</h3>
                <p className="text-primary-800">Owner & Manager</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="relative mb-5 mx-auto w-60 h-60 rounded-full overflow-hidden shadow-custom">
                  <img 
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Shehan Fernando" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Shehan Fernando</h3>
                <p className="text-primary-800">Operations Director</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="relative mb-5 mx-auto w-60 h-60 rounded-full overflow-hidden shadow-custom">
                  <img 
                    src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Kumari Silva" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Kumari Silva</h3>
                <p className="text-primary-800">Guest Experience Manager</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="relative mb-5 mx-auto w-60 h-60 rounded-full overflow-hidden shadow-custom">
                  <img 
                    src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Pradeep Bandara" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Pradeep Bandara</h3>
                <p className="text-primary-800">Head of Customer Relations</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
