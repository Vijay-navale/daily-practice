import React from "react";
import Navbar from "./components/Navbar";

import "./common.scss";
import Header from "./components/Header";
import CustomCursor from "./CustomCursor";
import Featured from "./components/Featured";
import About from "./components/About";
import Footer from "./components/Footer";

const SmoothScroll = () => {
  return (
    <>
      {/* <CustomCursor /> */}
      <div className="main-container" id="main-container" data-scroll-container>
        <Navbar />
        <Header />
        <Featured />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default SmoothScroll;
