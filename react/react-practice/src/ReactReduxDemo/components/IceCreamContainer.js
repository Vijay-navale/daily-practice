import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  const [val, setVal] = useState(0);
  console.log(val);
  return (
    <div>
      <h2>number of ice creams - {props.numOfIceCreams}</h2>
      <h3>
        How much ice cream do you want to buy:-{" "}
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />{" "}
      </h3>
      <button
        onClick={() => {
          console.log("inside click", val);
          props.buyIceCream(val);
        }}
      >
        buy cakes
      </button>
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  return {
    numOfIceCreams: reduxState.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: (numVal) => dispatch(buyIceCream(numVal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
