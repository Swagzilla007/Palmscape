import { Utensils, Sparkles, Users, Car, Briefcase as BriefcaseBusiness, Flower } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import PropertyCard from '../components/PropertyCard';
import Accordion from '../components/Accordion';
import ImageSlider from '../components/ImageSlider';

const faqItems = [
  {
    title: "Do all rooms include breakfast?",
    content: (
      <p>Yes, all our rooms include a complimentary authentic Sri Lankan or Continental breakfast prepared by our skilled local chefs, served in our dining area with ocean views.</p>
    )
  },
  {
    title: "Can you accommodate special dietary requirements?",
    content: (
      <p>Absolutely. Our chefs can prepare meals according to your dietary needs, including vegetarian, vegan, and allergy-friendly options. We use fresh local ingredients and can customize meals to your preferences.</p>
    )
  },
  {
    title: "Is there a minimum stay requirement?",
    content: (
      <p>We typically require a minimum stay of 2 nights. During peak seasons and local festivals, this might be extended. Please contact us for specific dates.</p>
    )
  },
  {
    title: "Do you offer airport transfers?",
    content: (
      <p>Yes, we provide comfortable airport transfers from Bandaranaike International Airport. Our driver will meet you at the airport and ensure a smooth journey to PalmScape Villa.</p>
    )
  },
  {
    title: "What activities are available nearby?",
    content: (
      <p>We're located near several attractions including pristine beaches, local markets, and cultural sites. Our staff can arrange tours, water sports activities, and cultural experiences in and around Chilaw.</p>
    )
  }
];

const ServicesPage = () => {
  return (
    <>
      <Hero
        title="Our Services & Accommodations"
        subtitle="Experience comfortable beachfront living with our welcoming services and cozy suites."
        bgClass="bg-services-pattern"
        alignment="left"
        height="medium"
        showButtons={false}
      />
      
      {/* Accommodations Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Beachfront Accommodations"
            subtitle="Choose from our selection of comfortable rooms and suites."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard 
              imageUrl="\images\prop image 1.jpeg"
              images={[
                
                "/images/master room balcony.jpg",
                "/images/master room bathroom.jpg"
              ]}
              title="Mater Suite"
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
              images={[
                
                "/images/deluxe room balcony.jpg",
                "/images/deluxe room bathroom.jpg"
              ]}
              title="Deluxe Room"
              price="From LKR 14,000/night"
              description="Elegant room with garden views, king-size bed, and cozy bathroom"
              beds={1}
              baths={1}
              guests={2}
              breakfast={true}
              delay={0.2}
            />
            
            <PropertyCard 
              imageUrl="\images\prop image 3.webp"
              images={[
                
                "/images/family room bathroom.jpg",
                "/images/family room bed.jpg"
              ]}
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

      {/* Premium Services */}
      <section className="section-padding bg-primary-100">
        <div className="container-custom">
          <SectionTitle 
            title="Premium Services"
            subtitle="Enhance your stay with our curated luxury experiences."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-sm shadow-custom">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Utensils size={28} className="text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Sri Lankan Dining</h3>
                    <p className="text-gray-600 mb-4">
                      Experience authentic Sri Lankan cuisine prepared by our skilled local chefs.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500">•</span>
                        <span>Traditional Sri Lankan breakfast</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500">•</span>
                        <span>Fresh seafood from Chilaw market</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500">•</span>
                        <span>Private beach dining experience</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-sm shadow-custom">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Sparkles size={28} className="text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Wellness Services</h3>
                    <p className="text-gray-600 mb-4">
                      Rejuvenate with traditional Sri Lankan wellness treatments and modern spa services.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500">•</span>
                        <span>Ayurvedic massage treatments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500">•</span>
                        <span>Beachfront yoga sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500">•</span>
                        <span>Meditation and mindfulness</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white p-8 rounded-sm shadow-custom">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Car size={28} className="text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Transportation</h3>
                    <p className="text-gray-600 mb-4">
                      Comfortable and reliable transportation services for your convenience.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500">•</span>
                        <span>Airport pickup and drop-off</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500">•</span>
                        <span>Local sightseeing tours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500">•</span>
                        <span>Car rental arrangements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white p-8 rounded-sm shadow-custom">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Flower size={28} className="text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Experiences</h3>
                    <p className="text-gray-600 mb-4">
                      Discover local culture and nature through curated experiences.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500">•</span>
                        <span>Cultural temple visits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500">•</span>
                        <span>Lagoon boat rides</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-500">•</span>
                        <span>Cooking classes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Common Questions"
            subtitle="Find answers about your stay at PalmScape Villa"
            center={true}
          />
          
          <div className="max-w-3xl mx-auto">
            <Accordion items={[
              {
                title: "What's included in the room rate?",
                content: "All rooms include traditional Sri Lankan or continental breakfast, WiFi, beach access, and basic amenities. Premium services can be arranged for additional fees."
              },
              {
                title: "How far is the beach?",
                content: "PalmScape Villa is located directly on Chilaw Beach. You can walk from your room to the beach in less than a minute."
              },
              {
                title: "Do you arrange local tours?",
                content: "Yes, we can arrange tours to nearby attractions including Munneswaram Temple, Chilaw Fish Market, and boat rides in the Chilaw Lagoon."
              }
              
            ]} />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-white text-3xl md:text-4xl font-serif mb-6">Experience Comfort in Chilaw</h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
              Book your beachfront stay at PalmScape Villa and discover the perfect blend of Sri Lankan hospitality and modern comfort.
            </p>
            <Link to="/contact" className="btn-accent">
              Book Your Stay
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
