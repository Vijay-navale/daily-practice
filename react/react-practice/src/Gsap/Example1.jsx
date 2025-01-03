import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Example1 = () => {
  const boxRef = useRef(null);
  useEffect(() => {
    const el = boxRef.current;
    gsap.fromTo(
      el,
      { rotation: 0 },
      {
        rotation: 180,
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  return (
    <>
      <div className="helper"></div>
      <div className="rotate_box" ref={boxRef}></div>
    </>
  );
};

export default Example1;
