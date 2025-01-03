import React from "react";
import { Route } from "react-router";

export default (
  <Route>
    <Route path="/" />
    <Route path="/blog" />
    <Route path="/blog/abc" />
    {/* <Route path="/blog/:id" /> */}
  </Route>
);
