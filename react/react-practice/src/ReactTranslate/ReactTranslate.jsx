import React from "react";
import { useEffect } from "react";

const ReactTranslate = () => {
  useEffect(() => {
    // function googleTranslateElementInit() {
    //   new google.translate.TranslateElement(
    //     {
    //       pageLanguage: "en",
    //       layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    //       autoDisplay: false,
    //     },
    //     "google_translate_element"
    //   );
    // }
  }, []);
  return <div id="google_translate_element"></div>;
};

export default ReactTranslate;
