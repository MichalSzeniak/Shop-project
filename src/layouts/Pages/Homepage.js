import React from "react";
import Slider from "./homepage/Slider";
import SpecialOffer from "./homepage/SpecialOffer";
import AboutUs from "./homepage/AboutUs";
import Counters from "./homepage/Counters";
import Newsletter from "./homepage/Newsletter";

const Homepage = ({ specialOffer }) => {
  return (
    <div>
      <Slider />
      <SpecialOffer specialOffer={specialOffer} />
      <AboutUs />
      <Counters />
      <Newsletter />
    </div>
  );
};

export default Homepage;
