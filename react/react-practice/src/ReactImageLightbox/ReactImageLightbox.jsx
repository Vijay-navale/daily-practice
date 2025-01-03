import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

const ImageLightBox = () => {};

const btnOneImages = [];
const btnTwoImages = ["https://dummyimage.com/227x95/bbbcsc"];
const btnThreeImages = [
  "https://dummyimage.com/227x95/bbbcsc",
  "https://dummyimage.com/227x95/ssscxc",
];
const ReactImageLightbox = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imageArr, setImageArr] = useState([]);
  useEffect(() => {
    window.addEventListener(
      "touchmove",
      function (event) {
        event.preventDefault();
      },
      { passive: false }
    );
    return () => {
      window.removeEventListener(
        "touchmove",
        function (event) {
          event.preventDefault();
        },
        { passive: false }
      );
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setImageArr(btnOneImages);
          setIsOpen(true);
        }}
      >
        Open Lightbox 1
      </button>
      <button
        type="button"
        onClick={() => {
          setImageArr(btnTwoImages);
          setIsOpen(true);
        }}
      >
        Open Lightbox 2
      </button>
      <button
        type="button"
        onClick={() => {
          setImageArr(btnThreeImages);
          setIsOpen(true);
        }}
      >
        Open Lightbox 3
      </button>
      {isOpen && (
        <Lightbox
          mainSrc={imageArr[photoIndex]}
          nextSrc={imageArr[(photoIndex + 1) % imageArr.length]}
          prevSrc={
            imageArr[(photoIndex + imageArr.length - 1) % imageArr.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + imageArr.length - 1) % imageArr.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageArr.length)
          }
        />
      )}
    </>
  );
};

export default ReactImageLightbox;
