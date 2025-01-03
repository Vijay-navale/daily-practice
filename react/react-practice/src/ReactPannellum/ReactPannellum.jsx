import React from "react";
import { useEffect } from "react";
// import ReactPannellum, { getConfig } from "react-pannellum";
import { Pannellum } from "pannellum-react";
import panimg from "./panimg.jpg";
import engageimg1 from "./engageimg1.jpg";
// class ReactPannellumExample extends React.Component {
//   click() {
//     console.log(getConfig());
//   }

//   render() {
//     const config = {
//       autoRotate: -2,
//     };
//     return (
//       <div>
//         <ReactPannellum
//           id="1"
//           sceneId="firstScene"
//           imageSource="https://pannellum.org/images/alma.jpg"
//           config={config}
//         />
//         <div onClick={this.click}>Click me</div>
//       </div>
//     );
//   }
// }
const ReactPannellumExample = () => {
  return (
    <Pannellum
      width="100%"
      image={panimg}
      compass={true}
      pitch={0}
      yaw={0}
      hfov={100}
      autoLoad
      autoRotate={4}
      onLoad={() => {
        console.log("panorama loaded");
      }}
      //   draggable={false}
      showFullscreenCtrl={false}
      showControls={false}
    />
  );
};
export default ReactPannellumExample;
