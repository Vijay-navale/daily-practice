import React from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

class CoronaTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <div className={styles.container}>
          <Cards data={data} />
          <CountryPicker />
          <Chart />
        </div>
      </>
    );
  }
}
export default CoronaTracker;
