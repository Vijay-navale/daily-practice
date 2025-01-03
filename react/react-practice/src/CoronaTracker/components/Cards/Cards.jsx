import React from "react";
import { Typography, Grid } from "@material-ui/core";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  // if (!confirmed) {
  //   return "Loading...";
  // }
  return (
    <div>
      <h2>cards</h2>
    </div>
  );
};

export default Cards;
