import React from "react";
import Map from "./ContactComponents/Map/Map";
import ContactForm from "./ContactComponents/ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className="bg-gray-100 h-[700px]" id="contact">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold font-popponi text-left pt-14">
          <span className="text-6xl text-gray-400 border-2 p-1">C</span>ontact
        </h2>
        <div className="flex px-16 py-10">
          {/* Left Side - Contact Form */}
          <div className="w-1/2">
            <ContactForm />
          </div>

          {/* Right Side - Map */}
          <div className="w-1/2">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
