import React from "react";
rimpot { Carousel} from "flowbite-react";
import ServiceCard from "../Cards/ServiceCard";
import ind1 from "../../assets/img/industrial/1.png";
import ind2 from "../../assets/img/industrial/2.png";

const Promo = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
          Our Services
        </h2>
        <p className="text-lg mb-8">
          Limited-time promotions you don't want to miss!
        </p>
        <div className="cardlist">
          <h3 className="text-red-700 text-6xl font-bold pb-10">
            Industrial electrical
          </h3>
          <Carousel>
            <ServiceCard src={ind1} />
            <ServiceCard src={ind2} />
            <ServiceCard src={ind1} />
            <ServiceCard src={ind2} />
          </Carousel>

          <h3 className="text-blue-700 text-6xl font-bold pb-10 pt-10">
            Marine electrical
          </h3>
          <Carousel>
            <ServiceCard src={ind1} />
            <ServiceCard src={ind2} />
            <ServiceCard src={ind1} />
            <ServiceCard src={ind2} />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Promo;
