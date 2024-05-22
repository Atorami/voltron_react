import React from 'react';
import { useLocation } from 'react-router-dom';

const ServiceDetailPage = () => {
  const location = useLocation();
  const { bg, title, description } = location.state || {};

  console.log(description)

  return (
      <section className="w-full h-[100vh] relative">
        <div className="hero" style={{ backgroundImage: `url("${bg}")`, height: '300px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <h1 className="text-white text-4xl font-bold">{title}</h1>
          </div>
        </div>
        <div className="container mx-auto px-24">
        <p className='my-20 text-2xl'>{description}</p>
        </div>
      </section>

  );
};

export default ServiceDetailPage;
