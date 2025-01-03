import React from "react";
const Aa = (
  <>
    <h1>heyy</h1>
    <h2>heyy 2</h2>
  </>
);
console.log("Aa", Aa);
const Button = () => <p>para</p>;
const listOfLibAndFrameworks = [
  "React.js",
  "Angular",
  "Vue.js",
  "Node.js",
  "underscore.js",
];

const mainReactElement = React.createElement(
  "section",
  { className: "js-section" },
  React.createElement("h1", null, "JavaScript Libraries and Frameworks"),
  React.createElement(
    "ul",
    { className: "list-lib-frameworks" },
    listOfLibAndFrameworks.map((element, index) =>
      React.createElement("li", { key: index }, element)
    )
  )
);
console.log(mainReactElement);
const ScrimbaReact = () => {
  return (
    <>
      <div>scrimba</div>
      {Aa}
      {/* {listElement} */}
      <Button></Button>
    </>
  );
};
console.log("ScrimbaReact:-", ScrimbaReact);
export default ScrimbaReact;
