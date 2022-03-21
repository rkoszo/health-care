import React from "react";

/* self imports */
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Services from "../components/Services";
import Specialists from "../components/Specialists";
import Testimonials from "../components/Testimonials";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Specialists />
      <Testimonials />
      <Appointment />
      <Footer />
    </>
  );
};

export default Home;
