import React, { useEffect, useState } from "react";

const Question1 = () => {
  const [state, setState] = useState([]);

  let arr = [];
  for (let i = 0; i < 64; i++) {
    arr[i] = Math.floor(Math.random() * 8);
  }
  useEffect(() => {
    setState(arr);
  }, []);
  console.log(state);
  return (
    <div>
      <h1>State</h1>
      <p>{state}</p>
    </div>
  );
};

export default Question1;
