import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  const numOfCakesFromReduxState = useSelector(
    (state) => state.cake.numOfCakes
  );
  const disaptchMethod = useDispatch();
  // console.log("HooksCakeContainer", numOfCakesFromReduxState);
  return (
    <div>
      <h2>number of cakes - {numOfCakesFromReduxState}</h2>
      <button onClick={() => disaptchMethod(buyCake())}>buy cakes</button>
    </div>
  );
};

export default HooksCakeContainer;
