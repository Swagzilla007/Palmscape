import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import MapComponent from '../components/MapComponent';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState('idle');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with us for bookings, inquiries, or special requests."
        bgClass="bg-contact-pattern"
        alignment="left"
        height="medium"
        showButtons={false}
      />
      
      {/* Contact Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <SectionTitle 
                title="Get in Touch"
                subtitle="We're here to make your stay at PalmScape Villa exceptional."
                center={false}
              />
              
              <div className="space-y-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Phone size={24} className="text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Phone</h3>
                    <p className="text-gray-600">
                      Our team is available 24/7 to assist you
                    </p>
                    <a 
                      href="tel:+94123456789" 
                      className="text-primary-800 hover:text-primary-900 font-medium block mt-1"
                    >
                      +94 123 456 789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Mail size={24} className="text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <p className="text-gray-600">
                      We'll respond to your inquiry within 24 hours
                    </p>
                    <a 
                      href="mailto:info@palmscape.com" 
                      className="text-primary-800 hover:text-primary-900 font-medium block mt-1"
                    >
                      info@palmscape.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <MapPin size={24} className="text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Location</h3>
                    <p className="text-gray-600">
                      PalmScape Villa, Beach Road,<br />
                      Chilaw, Sri Lanka
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Clock size={24} className="text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Reception Hours</h3>
                    <div className="grid grid-cols-2 gap-x-4 text-gray-600">
                      <p>Check-in:</p>
                      <p>2:00 PM - 10:00 PM</p>
                      <p>Check-out:</p>
                      <p>Until 12:00 PM</p>
                      <p>Front Desk:</p>
                      <p>24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              
              // ...rest of the social media links...
            </AnimatedSection>
            
            // ...rest of the form section with class names updated to match our theme...
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Location"
            subtitle="Find us on the beautiful beaches of Chilaw"
            center={true}
          />
          
          <AnimatedSection>
            <MapComponent />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
