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

import industrialBg from "../../assets/img/industrial_bg.png";
import marineBg from "../../assets/img/marine_bg.png";
import ServiceCard from "../Cards/ServiceCard";

const Promo = () => {
  const imageArr = [
    industrialImg1,
    industrialImg2,
    industrialImg3,
    industrialImg4,
  ];

  return (
    <section className="bg-white h-[1900px] pt-28" id="services">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold font-popponi text-right">
          <span className="text-6xl text-gray-400 border-2 p-1">W</span>e offer
        </h2>
        <div className="offer-list">
          <div className="offer__industrial">
            <h4 className="text-4xl font-semibold font-popponi pt-10 text-title_red border-b border-gray-300 mb-5">
              Industrial service
            </h4>
            <div className="flex flex-row pt-5">
              <ServiceCard bg={industrialImg1}></ServiceCard>
              <ServiceCard bg={industrialImg2}></ServiceCard>
              <ServiceCard bg={industrialImg3}></ServiceCard>
              <ServiceCard bg={industrialImg4}></ServiceCard>
            </div>
          </div>

          <div className="offer__marine">
            <h4 className="text-4xl font-semibold pt-10 text-title_blue border-b border-gray-300 mb-5">
              Marine service
            </h4>
            <div className="flex overflow-hidden pt-5">
              <ServiceCard bg={marineImg1}></ServiceCard>
              <ServiceCard bg={marineImg2}></ServiceCard>
              <ServiceCard bg={marineImg3}></ServiceCard>
              <ServiceCard bg={marineImg4}></ServiceCard>
            </div>
            <div className="flex flex-row mt-24">
              <ServiceCard bg={marineImg5}></ServiceCard>
              <ServiceCard bg={marineImg6}></ServiceCard>
              <ServiceCard bg={marineImg7}></ServiceCard>
              <ServiceCard bg={marineImg8}></ServiceCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
