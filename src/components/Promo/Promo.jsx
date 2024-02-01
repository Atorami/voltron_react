import React from "react";
import OfferCard from "../Cards/OfferCard";
import industrialImg1 from "../../assets/img/industrial/1.png";
import industrialImg2 from "../../assets/img/industrial/2.png";
import industrialImg3 from "../../assets/img/industrial/3.png";
import industrialImg4 from "../../assets/img/industrial/4.png";
import industrialBg from "../../assets/img/industrial_bg.png";
import marineBg from "../../assets/img/marine_bg.png";

const Promo = () => {
  const imageArr = [
    industrialImg1,
    industrialImg2,
    industrialImg3,
    industrialImg4,
  ];

  return (
    <section className="bg-white h-[2000px] pt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">We offer</h2>
        <div className="offer-list">
          <div className="offer__industrial">
            <h4 className="text-4xl font-semibold py-20 text-title_blue">
              Industrial
            </h4>
            <div className="flex">
              <div className="offer__industrial__left w-1/2 rounded-r rounded-3xl overflow-hidden ">
                <img
                  src={industrialBg}
                  alt="Industrial img"
                  className="transition-all duration-1000 hover:scale-105 "
                />
              </div>
              <div className="offer__industrial__right w-1/2 flex flex-col">
                {imageArr.map((img, i) => (
                  <OfferCard key={i} src={img} theme="industrial" />
                ))}
              </div>
            </div>
          </div>

          <div className="offer__marine">
            <h4 className="text-4xl font-semibold py-20 text-title_blue">
              Marine
            </h4>
            <div className="flex">
              <div className="offer__marine__right w-1/2 flex flex-col self-auto">
                {imageArr.map((img, i) => (
                  <OfferCard key={i} src={img} />
                ))}
              </div>
              <div className="offer__marine__left w-1/2  rounded-l rounded-3xl overflow-hidden ">
                <img
                  src={marineBg}
                  alt="marine img"
                  className="transition-all duration-1000 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
