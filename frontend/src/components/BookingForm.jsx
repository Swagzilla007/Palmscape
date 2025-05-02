import { useState } from 'react';
import { motion } from 'framer-motion';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0',
    accommodation: 'villa',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your booking request! We will contact you shortly to confirm availability.');
  };

  return (
    <motion.div 
      className="bg-white p-8 rounded-sm shadow-custom"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl font-serif mb-6">Check Availability</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-group">
            <label htmlFor="checkIn" className="form-label">
              Check-in Date
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              required
              value={formData.checkIn}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkOut" className="form-label">
              Check-out Date
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              required
              value={formData.checkOut}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-group">
            <label htmlFor="adults" className="form-label">
              Adults
            </label>
            <select
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="form-select"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Adult' : 'Adults'}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="children" className="form-label">
              Children
            </label>
            <select
              id="children"
              name="children"
              value={formData.children}
              onChange={handleChange}
              className="form-select"
            >
              {[0, 1, 2, 3, 4].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Child' : 'Children'}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="accommodation" className="form-label">
            Accommodation Type
          </label>
          <select
            id="accommodation"
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className="form-select"
          >
            <option value="villa">Master Suite</option>
            <option value="suite">Deluxe Room</option>
            <option value="cottage">Family Suite</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          className="w-full btn-primary"
        >
          Check Availability
        </button>
      </form>
    </motion.div>
  );
};

export default BookingForm;
