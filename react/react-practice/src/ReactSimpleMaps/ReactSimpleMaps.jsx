import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const ReactSimpleMaps = () => {
  return (
    <div>
      <ComposableMap width={10} height={10}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default ReactSimpleMaps;
