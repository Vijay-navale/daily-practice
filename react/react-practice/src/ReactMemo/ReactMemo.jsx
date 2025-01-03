import { useState, memo } from "react";

const Swatch = ({ names }) => {
  console.log("swatch render");
  return (
    <>
      {names.map((name, i) => (
        <div key={i}>{name}</div>
      ))}
    </>
  );
};

const arePropsEqual = (prevProp, nextProp) => {
  console.log(prevProp.names === nextProp.names);
  return prevProp.names === nextProp.names;
};

// In react how primitive and non primitive types work is really important to know
const MemoedSwatch = memo(Swatch, arePropsEqual);
const ReactMemo = () => {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");
  const [names, setNames] = useState(["vijay", "ajay"]);

  console.log("appRenderIndex", appRenderIndex);

  return (
    <>
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
        Re-render me
      </button>
      {/* <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        changed color
      </button> */}
      {/* //we are passing new reference address each time we click on add name */}
      <button onClick={() => setNames([...names, "prakash"])}>add name</button>
      <MemoedSwatch names={names} />
    </>
  );
};

export default ReactMemo;
