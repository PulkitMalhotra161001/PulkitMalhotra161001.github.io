import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work,Platforms } from "./container";
import { Navbar, SocialMedia } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Platforms/>
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
