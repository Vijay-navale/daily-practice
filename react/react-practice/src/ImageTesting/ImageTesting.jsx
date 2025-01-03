import React from "react";
import a from "./a.png";
import b from "./b.png";

const ImageTesting = () => {
  return (
    <>
      <img src={window.innerWidth < 768 ? a : b} alt="" />
      {/* {window.innerWidth < 768 ? (
        <img src={a} alt="" />
      ) : (
        <img src={b} alt="" />
      )} */}
    </>
  );
};

export default ImageTesting;
