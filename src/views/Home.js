import React from "react";

/* self imports */
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Services from "../components/Services";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
    </>
  );
};

export default Home;
