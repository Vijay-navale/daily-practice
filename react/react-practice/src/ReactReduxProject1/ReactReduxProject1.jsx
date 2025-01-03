import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./redux/store";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
const ReactReduxProject1 = () => {
  console.log("Provider");
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          {/* <Route>404 Not Found!</Route> */}
        </Switch>
      </Router>
    </Provider>
  );
};

export default ReactReduxProject1;
