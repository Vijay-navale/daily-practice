import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { fetchDailyData } from "../../api";

const Chart = () => {
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchDailyData();
      // console.log("gotcha ?", data);
      setDailyData(data);
    };
    fetchApi();
  }, []);
  return (
    <div>
      <h2>Charts</h2>
    </div>
  );
};

export default Chart;
