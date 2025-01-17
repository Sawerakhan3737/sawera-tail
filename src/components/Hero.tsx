
"use client"
import React, { useEffect } from 'react';
import Profile from '../../public/boy.jpg';
import Image from 'next/image';
import AOS from "aos";
import 'aos/dist/aos.css'; 

const Hero = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-out', 
      once: true, 
      offset: 200, 
    });
  }, []);

  return (
    <div className="bg-black text-white text-center py-16">
      {/* Profile Image */}
      <Image
        src={Profile}
        alt="Sawera"
        width={200}
        height={200}
        className="mx-auto mb-8 w-48 animate-pulse rounded-2xl object-cover transform transition-transform duration-300 hover:scale-105"
        data-aos="fade-up" 
      />
      
      {/* Name & Role */}
      <h1
        className="text-4xl font-bold"
        data-aos="fade-up" // Animation for the heading
        data-aos-delay="200" // Add delay to stagger the animation
      >
        {`I'm`} {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-red-500">
          Sawera  Khan
        </span>
        , Web Developer
      </h1>

      {/* Description */}
      <p
        className="mt-4 text-lg text-gray-300"
        data-aos="fade-up" // Animation for the paragraph
        data-aos-delay="400" // Delay the paragraph animation
      >
        I specialize in building modern and responsive web applications.
      </p>

      {/* Buttons */}
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-yellow-200 to-red-500 font-semibold text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Contact With Me
        </button>
        <button
          className="bg-gradient-to-r from-yellow-200 to-red-500 font-semibold text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
