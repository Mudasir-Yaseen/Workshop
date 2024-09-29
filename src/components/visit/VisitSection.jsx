import React from 'react';

const VisitSection = () => {
  return (
    <section id='visit'>
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">Visit Us</h2>
        <p className="text-center text-white mb-6">
          We would love to see you! Here’s our physical location. Feel free to visit us for inquiries or consultations.
        </p>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330377.07733536866!2d71.6280509!3d29.5351202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9fdc0f71cd8b%3A0x70df834f23ea9c5e!2sM.%20Yaseen%20Kitchen%20Engineering!5e0!3m2!1sen!2sus!4v1620799160954!5m2!1sen!2sus" // Your Google Maps embed link
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
    </section>
  );
};

export default VisitSection;
