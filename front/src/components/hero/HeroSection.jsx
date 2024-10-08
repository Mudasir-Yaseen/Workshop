import React from 'react';
import video from '../../../public/video.mp4'


const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={video} // Replace with your actual video URL
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Precision. Quality. Innovation.</h1>
          <p className="text-lg md:text-xl mt-4">Engineering your dream kitchen solutions.</p>
          <a href="#products" className="mt-6 inline-block bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition">
            Get Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
