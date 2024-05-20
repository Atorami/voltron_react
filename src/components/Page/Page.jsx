import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Page = (props) => {
  const { bg, title, description, theme, size } = props

  return (
    <>
      <Header />
      <section className="single_page">
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
      <Footer />
    </>
  );
};

export default Page;
