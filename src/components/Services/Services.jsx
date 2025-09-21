import React from "react";                                             
import { HeroServices, Service, Work } from "../Services";    
import { Sub } from "../Home"                           

const Services = () => {
  return (
    <div>
      <HeroServices />
      <Service />
      <Work />
      <Sub />
    </div>
  );
};

export default Services;   