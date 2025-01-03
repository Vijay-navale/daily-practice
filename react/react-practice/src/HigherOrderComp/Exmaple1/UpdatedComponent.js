import React, { useState } from 'react';

const UpdatedComponent = (OriginalComponent, increaseCount = 5) => {
  // console.log('increaseCount:-', increaseCount);
  function NewComponent(props) {
    const [counter, setCounter] = useState(10);

    return (
      //OriginalComponent is nothing but a ClickIncrease in this case
      <OriginalComponent
        {...props}
        name='LogRocket'
        counter={counter}
        incrementCounter={() => setCounter((size) => size + increaseCount)}
      />
    );
  }
  return NewComponent;
};
export default UpdatedComponent;
