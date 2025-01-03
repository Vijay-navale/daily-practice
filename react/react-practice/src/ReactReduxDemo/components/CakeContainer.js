import React, { useState } from "react";
import { connect } from "react-redux";
// import { buyCake } from "../redux/cake/cakeActions";
import { buyCake } from "../redux";
const CakeContainer = (props) => {
  const [count, setCount] = useState(0);
  console.log("In CakeContainer");

  const handleCakeClick = () => {
    //this are all get called synchronously
    props.buyCakeMethod();
    props.buyCakeMethod();
    props.buyCakeMethod();
    props.buyCakeMethod();
    props.buyCakeMethod();
  };

  const handleCountclick = () => {
    //this all setState will get batched
    setCount(1);
    setCount(2);
    setCount(3);
    setCount(4);
    setCount(5);
  };

  return (
    <div>
      <div onClick={handleCountclick}>Count - {count}</div>
      <h2>number of cakes - {props.numOfCakes}</h2>
      <button onClick={handleCakeClick}>buy cakes</button>
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  console.log("reduxState==>", reduxState);
  return {
    numOfCakes: reduxState.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("In mapDispatchToProps");
  return {
    buyCakeMethod: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
