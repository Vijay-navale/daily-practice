import { useState, useEffect } from "react";

const CountdownTimer = ({ name, eyeColor }) => {
  const [countDown, setCountDown] = useState(2);

  useEffect(() => {
    console.log("inside useEffect");
    if (countDown > 0) {
      const clearCountDown = setTimeout(() => {
        setCountDown((prevState) => prevState - 1);
      }, 1000);
      return () => {
        console.log("inside return");
        clearTimeout(clearCountDown);
      };
    }
  }, [countDown]);

  return (
    <>
      <div>it will become zero - {countDown}</div>
      <div>
        {name} - {eyeColor}
      </div>
    </>
  );
};

CountdownTimer.defaultProps = {
  name: "Rahul",
  eyeColor: "deepblue",
};
export default CountdownTimer;
