import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import SubPage from "./SubPage";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/sub-page" component={SubPage} />

      {/* <Route component={Page404} /> */}
    </Switch>
  );
};

export default Routes;
