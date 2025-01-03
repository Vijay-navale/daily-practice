import React, { useEffect, useState } from "react";

const Child = () => {
  useEffect(() => {
    return () => {
      alert("this will unmount");
    };
  }, []);
  return <div>I am child</div>;
};

const UseEffectUnmount = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show ? <Child /> : null}
      <div>
        <button onClick={() => setShow(!show)}>click me</button>
      </div>
    </div>
  );
};

export default UseEffectUnmount;
