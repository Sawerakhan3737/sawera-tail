"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = [
  { id: 1, title: "Web Design", description: "Creating visually impressive and user-friendly web design." },
  { id: 2, title: "Frontend Development", description: "Building responsive and interactive interfaces." },
  { id: 3, title: "Backend Development", description: "Developing server-side logic and databases." },
  { id: 4, title: "Full-stack Development", description: "Combining both frontend and backend development skills." },
  { id: 5, title: "Content Writing", description: "Writing content for your business and companies." },
  { id: 6, title: "Digital Marketing", description: "Promote your business with our digital marketing teams." },
];

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: 'ease-out-back',  
      once: true,  
    });
  }, []);

  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="font-extrabold text-4xl text-center mb-12" data-aos="fade-up">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-customPink"
              data-aos="fade-up" 
              data-aos-delay={`${service.id * 100}`}
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-yellow-200 to-red-500">
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-red-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block bg-clip-text bg-gradient-to-r from-yellow-200 to-red-500 text-white font-semibold py-2 px-4 rounded-full transform transition-transform duration-300 hover:scale-105">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
