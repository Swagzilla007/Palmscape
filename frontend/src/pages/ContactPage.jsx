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
              
              <div className="flex gap-4 mt-8">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-100 rounded-full text-primary-800 hover:bg-primary-200 transition-colors"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-100 rounded-full text-primary-800 hover:bg-primary-200 transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-100 rounded-full text-primary-800 hover:bg-primary-200 transition-colors"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-8 rounded-sm shadow-custom">
                <h3 className="text-2xl font-serif mb-6">Send Us a Message</h3>
                
                {formStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-sm p-4 mb-6">
                    <h4 className="font-medium mb-2">Thank You!</h4>
                    <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input"
                      rows="4"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full btn-primary"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </AnimatedSection>
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
