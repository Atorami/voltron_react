import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19018.27583330528!2d14.525169799999999!3d53.4276216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spl!4v1706601958869!5m2!1sen!2spl"
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
