import React, { useEffect, useState } from "react";
// Core modules imports are same as usual
import { Navigation, Pagination, Virtual } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide, useSwiper } from "swiper/react/swiper-react.js";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import "swiper/modules/virtual/virtual.scss"; // virtual module
import axios from "axios";

const SwiperExamples = () => {
  // const func = () => {}
  const swiper = useSwiper();
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const {
      data: { data },
    } = await axios({
      method: "GET",
      url: "http://52.14.146.68:3000/countries",
    });
    setCountries(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const slideList = countries.map((country, i) => (
    <SwiperSlide key={country.id} className="indiviual-slide">
      <div
        className="country_name"
        style={{
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {country.name}
      </div>
    </SwiperSlide>
  ));
  console.log("slideList:-", slideList);
  // Create array with 1000 slides
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Virtual]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          prevEl: ".btns .prev",
          nextEl: ".btns .next",
        }}
        pagination={{ el: ".outside-swiper-pagination", clickable: true }}
        onSwiper={(swiper) => console.log("swiper:-", swiper)}
        className="swiper-main"
        // centeredSlides={true}
        // onSlideChange={() => console.log("slide change")}
        // allowTouchMove={false}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        // }}
      >
        {slideList}
        {/* <SwiperSlide>slide 1</SwiperSlide> */}
        {/* <SwiperSlide>
          {(slideProps) => (
            <div>
              yes active
              {console.log(slideProps)}
            </div>
          )}
        </SwiperSlide> */}
        {/* <SwiperSlide>Slide 3</SwiperSlide> */}
        {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        {/* <span slot="container-start">Container Start</span>
        <span slot="wrapper-start">Wrapper Start</span> */}
        <div className="outside-swiper-pagination"></div>
        <div className="btns">
          <button className="prev">Prev</button>
          <button className="next">Next</button>
        </div>
      </Swiper>
      {/* <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper> */}
      {/* <button onClick={() => swiper.slideNext()}>
        Slide to the next slide
      </button> */}
    </>
  );
};

export default SwiperExamples;
// Core modules imports are same as usual
// import { Navigation, Pagination } from 'swiper';
// // Direct React component imports
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// // Styles must use direct files imports
// import 'swiper/swiper.scss'; // core Swiper
// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination/pagination.scss'; // Pagination module
