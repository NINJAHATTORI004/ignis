// import React, { useEffect } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HorizontalScroll from "../components/HorizontalScroll";
import FoundingTeam from "../components/FoundingTeam";
// import Social from '../components/Social'
// import AboutFooter from '../components/AboutFooter'
import Banner from "../assets/images/Banner.png";
const About = () => {
  return (
    <div>
      <Navbar />

      {/* Banner section with background image */}
      <div
        className="h-[550px] text-white font-dela-gothic flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <h1 className="text-6xl bg-black bg-opacity-50">We Grow, When You Grow</h1>
      </div>

      <HorizontalScroll />
      {/* <Social /> */}
      {/* <AboutFooter /> */}
      <FoundingTeam />
      <Footer next="OurWork" />
    </div>
  );
};

export default About;
