import { useEffect, useState } from 'react';
import UpdatedComponent from './UpdatedComponent';
function ClickIncrease(props) {
  console.log('props:-', props);
  const { counter, incrementCounter } = props;
  const [fontSize, setFontSize] = useState(10);
  return (
    <div>
      <button onClick={() => setFontSize((size) => size + 1)}>
        Increase with click
      </button>
      <p style={{ fontSize }}>Size of font in onClick function: {fontSize}</p>
      <p>Value of 'name' in ClickIncrease: {props.name}</p>
      <button onClick={() => incrementCounter()}>Increment counter</button>
      <p> Value of 'counter' in ClickIncrease: {counter}</p>
    </div>
  );
}
export default UpdatedComponent(ClickIncrease, 3); // I am calling this function in here so that I immediately gets returned component which is NewComponent in this case
