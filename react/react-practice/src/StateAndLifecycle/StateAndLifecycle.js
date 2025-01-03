import React from "react";
import ComponentDidMountMethod from "./Mounting/ComponentDidMountMethod";
import ConstructorMethod from "./Mounting/ConstructorMethod";
import GetDerivedStateFromProps from "./Mounting/GetDerivedStateFromProps";
import RenderMethod from "./Mounting/RenderMethod";
import ComponentDidUpdateMethod from "./Updating/ComponentDidUpdate";
import GetSnapshotBeforeUpdateMethod from "./Updating/GetSnapShotBeforeUpdate";
import ShouldComponentUpdateMethod from "./Updating/ShouldComponentUpdateMethod";
import ComponentWillUnmountMethod from "./Unmounting/ComponentWillUnmountMethod";
import GetDerivedStateFromPropsUpdating from "./Updating/GetDerivedStateFromPropsUpdating";
import UseEffectUnmount from "./Unmounting/UseEffectUnmount";
class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Mounting</h1>
        <h2>constructor Method</h2>
        {/* <ConstructorMethod lastName="navale" /> */}
        <p>=========================</p>
        <h2>getDerivedStateFromProps Method</h2>
        {/* <GetDerivedStateFromProps lastName="navale" /> */}
        <p>=========================</p>
        <h2>render Method</h2>
        {/* <RenderMethod /> */}
        <p>=========================</p>
        <h2>componentDidMount Method</h2>
        {/* <ComponentDidMountMethod /> */}
        <p>=========================</p>
        <p>=========================</p>
        <h1>Updating</h1>
        <h2>getDerivedStateFromProps Method</h2>
        {/* <GetDerivedStateFromPropsUpdating /> */}
        <h2>shouldComponentUpdate Method</h2>
        {/* <ShouldComponentUpdateMethod /> */}
        <p>=========================</p>
        <h2>getSnapshotBeforeUpdate Method</h2>
        {/* <GetSnapshotBeforeUpdateMethod /> */}
        <p>=========================</p>
        <h2>componentDidUpdate Method</h2>
        {/* <ComponentDidUpdateMethod /> */}
        <p>=========================</p>
        <p>=========================</p>
        <h1>Unmounting</h1>
        <h2>componentWillUnmount Method </h2>
        {/* <ComponentWillUnmountMethod /> */}
        <UseEffectUnmount />
      </>
    );
  }
}
export default Clock;
