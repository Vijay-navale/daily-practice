import React from "react";
import { Translator, Translate } from "react-auto-translate";

const ReactAutoTranslate = () => {
  return (
    <Translator
      //   cacheProvider={cacheProvider}
      from="en"
      to="es"
      googleApiKey="AIzaSyBzpFbS4GeuCC_57BZHURGc932yhhI_uz4"
    >
      <h1>
        <Translate>Welcome!</Translate>
      </h1>
      ...
    </Translator>
  );
};

export default ReactAutoTranslate;
