import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import dallas from "../images/dallas.webp";
import austin from "../images/austin.webp";
import newyork from "../images/newyork.webp";
import sanfrancisco from "../images/sanfrancisco.webp";
import beijing from "../images/beijing.webp";

const cities = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin },
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Beijing", image: beijing },
];

const Hamburger = ({ state }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.
      // menu.current.style.display = "none";
      gsap.to([revealMenu.current, revealMenuBackground.current], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu.current, {
        duration: 1,
        css: {
          display: "none",
        },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menu.current, {
        duration: 1,
        css: {
          display: "block",
        },
      });
      gsap.to([revealMenu.current, revealMenuBackground.current], {
        duration: 0,
        height: "100%",
        opacity: 1,
      });
      staggerReveal(revealMenu.current, revealMenuBackground.current);
      fadeInUp(info.current);
      staggerText(line1.current, line2.current, line3.current);
      // menu.current.style.display = "block";
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: "0",
      transformOrigin: "right top",
      ease: "power3.inOut",
      skewY: 2,
      stagger: {
        amount: 0.1,
      },
    });
  };
  // Fade up for the additonal info on our menu
  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  // STAGGER THE LINKS TO APPEAR
  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const handleCity = (city, target) => {
    gsap.to(target, {
      duration: 0,
      background: `url(${city}) center center`,
      // duration: 0.4,
      // opacity: 1,
      // ease: "power3.inOut",
    });
    gsap.to(target, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });
    gsap.from(target, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top",
    });
  };

  // Removes the city image once you hover off
  const handleCityReturn = (target) => {
    gsap.to(target, {
      duration: 0,
      skewY: 0,
    });
    gsap.to(target, {
      duration: 0.4,
      opacity: 0,
      skewY: 0,
    });
  };
  // Hover on the link
  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power1.inOut",
    });
  };

  // Hover off the link
  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power1.inOut",
    });
  };
  return (
    <div ref={menu} className="hamburger-menu">
      <div
        ref={revealMenuBackground}
        className="menu-secondary-background-color"
      ></div>
      <div ref={revealMenu} className="menu-layer">
        <div ref={cityBackground} className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      ref={line1}
                      to="/opportunities"
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                    >
                      Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link
                      ref={line2}
                      to="/solutions"
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      ref={line3}
                      to="/contact-us"
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="info" ref={info}>
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>
              <div className="locations">
                Locations:
                {cities.map((el) => (
                  <span
                    key={el.name}
                    onMouseEnter={() =>
                      handleCity(el.image, cityBackground.current)
                    }
                    onMouseOut={() => handleCityReturn(cityBackground.current)}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
