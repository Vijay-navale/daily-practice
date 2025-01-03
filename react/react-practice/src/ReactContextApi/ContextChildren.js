import React, { useContext } from "react";
import { CountContext } from "./ContextParent";

export const MemoizedChildA = React.memo(() => {
  console.log("Child A Render");
  return (
    <>
      <div>Child A</div>
      <ChildB />
    </>
  );
});

export const ChildB = () => {
  console.log("Child B Render");
  return (
    <>
      <div>Child B</div>
      <ChildC />
    </>
  );
};

export const ChildC = () => {
  const count = useContext(CountContext);
  console.log("Child C Render");
  return (
    <>
      <div>Child C - Count = {count}</div>
    </>
  );
};
