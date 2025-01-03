import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios({
      method: "GET",
      url: url,
    });

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (err) {
    console.log("errr", err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios({
      method: "GET",
      url: `${url}/daily`,
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log("err in fetchDailyData");
  }
};
