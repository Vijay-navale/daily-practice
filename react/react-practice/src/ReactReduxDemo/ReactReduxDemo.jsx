import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
// import ItemContainer from "./components/ItemContainer";
// import UserContainer from "./components/UserContainer";

const ReactReduxDemo = () => {
  console.log("In ReactReduxDemo compo");
  return (
    <>
      <Provider store={store}>
        {console.log("after Provider")}
        <CakeContainer />
        {/* <HooksCakeContainer />
        <IceCreamContainer />
        <ItemContainer cake />
        <ItemContainer />
        <UserContainer /> */}
      </Provider>
    </>
  );
};

export default ReactReduxDemo;
