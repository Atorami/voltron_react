import React from "react";
import OfferCard from "../Cards/OfferCard";
import industrialImg1 from "../../assets/img/industrial/1.png";
import industrialImg2 from "../../assets/img/industrial/2.png";
import industrialImg3 from "../../assets/img/industrial/3.png";
import industrialImg4 from "../../assets/img/industrial/4.png";

import marineImg1 from "../../assets/img/marine/1.png";
import marineImg2 from "../../assets/img/marine/2.png";
import marineImg3 from "../../assets/img/marine/3.png";
import marineImg4 from "../../assets/img/marine/4.png";
import marineImg5 from "../../assets/img/marine/5.png";
import marineImg6 from "../../assets/img/marine/6.png";
import marineImg7 from "../../assets/img/marine/7.png";
import marineImg8 from "../../assets/img/marine/8.png";
import ServiceCard from "../Cards/ServiceCard";

const Promo = () => {
  const imageArr = [
    industrialImg1,
    industrialImg2,
    industrialImg3,
    industrialImg4,
  ];

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
            <div className="grid gap-5 sm:grid-cols-2 sm:grid-rows-2 lg:flex lg:flex-row">
              {imageArr.map((bg, index) => (
                <ServiceCard key={index} bg={bg}></ServiceCard>
              ))}
            </div>
          </div>

          <div className="offer__marine">
            <h4 className="text-4xl text-center xl:text-left font-semibold pt-10 text-title_blue border-b border-gray-300 mb-10">
              Marine service
            </h4>
            <div className="grid gap-5 sm:grid-cols-2 lg:flex lg:flex-row">
              {[marineImg1, marineImg2, marineImg3, marineImg4].map(
                (bg, index) => (
                  <ServiceCard key={index} bg={bg}></ServiceCard>
                )
              )}
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:flex lg:flex-row mt-5">
              {[marineImg5, marineImg6, marineImg7, marineImg8].map(
                (bg, index) => (
                  <ServiceCard key={index} bg={bg}></ServiceCard>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
