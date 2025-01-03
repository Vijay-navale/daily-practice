import React, { useState } from "react";

const NormalfunctionalComp = (prop) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount, prevProp) => {
      console.log(prevProp);
      return prevCount + 1;
    });
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default NormalfunctionalComp;
