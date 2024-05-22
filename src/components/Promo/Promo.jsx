import React, { useState, useEffect } from "react";
import ServiceCard from "../Cards/ServiceCard";

const Promo = () => {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setServicesData(data));
  }, []);

  if (!servicesData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-white py-10 pt-10 lg:pt-28" id="services">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl lg:text-4xl font-extrabold font-popponi text-left lg:text-right">
          <span className="text-6xl text-gray-400 border-2 p-1">W</span>e offer
        </h2>
        <div className="offer-list">
          <div className="offer__industrial">
            <h4 className="text-4xl text-center xl:text-left font-semibold font-popponi pt-10 text-title_red border-b border-gray-300 mb-10">
              Industrial service
            </h4>
            <div className="grid gap-5 sm:grid-cols-2 sm:grid-rows-2 laptop:grid-cols-2 laptop:grid-rows-2 laptop:justify-items-between">
              {servicesData.Industrial.map((service, index) => (
                <ServiceCard
                  key={index}
                  bg={service.srcImage}
                  title={service.title}
                  short={service.short}
                  description={service.description}
                />
              ))}
            </div>
          </div>

          <div className="offer__marine">
            <h4 className="text-4xl text-center xl:text-left font-semibold pt-10 text-title_blue border-b border-gray-300 mb-10">
              Marine service
            </h4>
            <div className="grid gap-5 sm:grid-cols-2 laptop:grid-cols-2 laptop:grid-rows-4">
              {servicesData.Marine.map((service, index) => (
                <ServiceCard
                  key={index}
                  bg={service.srcImage}
                  title={service.title}
                  short={service.short}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
