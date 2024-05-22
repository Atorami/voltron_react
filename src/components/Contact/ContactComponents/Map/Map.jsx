import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d594.1886012701398!2d14.575553076395812!3d53.43709939271147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0975dd34356b%3A0xb4a70520ce0a8676!2sStanis%C5%82awa%20Dubois%2020%2C%2071-610%20Szczecin!5e0!3m2!1sen!2spl!4v1716405645314!5m2!1sen!2spl"
        width="100%"
        height="350"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Location"
        className="shadow-md"
      ></iframe>
    </div>
  );
};

export default Map;