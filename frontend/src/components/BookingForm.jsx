import { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'villa'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-sm shadow-md">
      <div className="space-y-4">
        <div>
        <label htmlFor="checkIn" className="block text-gray-700 mb-2">Check In</label>
          <input
            type="date"
            id="checkIn"
            value={formData.checkIn}
            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-primary-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="checkOut" className="block text-gray-700 mb-2">Check Out</label>
          <input
            type="date"
            id="checkOut"
        value={formData.checkOut}
            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-primary-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="guests" className="block text-gray-700 mb-2">Number of Guests</label>
          <select
            id="guests"
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-primary-500"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>{num} Guest{num !== 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="roomType" className="block text-gray-700 mb-2">Accommodation Type</label>
          <select
            id="roomType"
            value={formData.roomType}
            onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-primary-500"
          >
            <option value="villa">Luxury Villa</option>
            <option value="suite">Executive Suite</option>
            <option value="room">Deluxe Room</option>
          </select>
        </div>
        
        <button type="submit" className="w-full btn-primary mt-6">
          Check Availability
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
