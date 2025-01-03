import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Routes from "./Routes";

const ReactRouterDom = () => {
  return (
    <>
      <BrowserRouter basename="/calendar">
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default ReactRouterDom;
