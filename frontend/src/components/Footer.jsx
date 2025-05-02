import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Home } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-5 w-5 text-primary-300" />
              <span className="text-xl font-serif text-white">PalmScape</span>
            </div>
            <p className="text-primary-100 mb-4">
              Experience comfort and tranquility in our beachfront villa, 
              nestled in the beautiful coastal town of Chilaw, Sri Lanka.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-primary-200">Premium Accommodations</li>
              <li className="text-primary-200">24/7 Concierge Service</li>
              <li className="text-primary-200">Private Chef & Dining</li>
              <li className="text-primary-200">Wellness & Spa</li>
              <li className="text-primary-200">Event Hosting</li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-300 shrink-0 mt-1" />
                <span className="text-primary-100">123 Chilaw, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-300 shrink-0" />
                <a href="tel:+94776390513" className="text-primary-100 hover:text-white transition-colors">
                  +94 776390513
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-300 shrink-0" />
                <a href="mailto:info@palmscape.com" className="text-primary-100 hover:text-white transition-colors">
                  info@palmscape.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-primary-300 text-sm">
          <p>&copy; {currentYear} PalmScape Villa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
