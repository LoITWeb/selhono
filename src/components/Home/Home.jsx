import React from "react";                                               
import { Hero, Modern, About, Company, Projects, Counter, News, Sub } from "../Home";                                

const Home = () => {
  return (
    <div>
      <Hero />
      <Modern />
      <About />
      <Company />
			<Projects />
			<Counter />
			<News />
			<Sub />
    </div>
  );
};

export default Home;   