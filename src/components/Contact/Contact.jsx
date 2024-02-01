import React from "react";
import Map from "./ContactComponents/Map/Map";
import ContactForm from "./ContactComponents/ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className="bg-gray-100 h-[700px]">
      <div className="container  mx-auto">
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
