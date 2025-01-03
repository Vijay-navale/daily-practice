import React, { useState } from "react";
// import { addDays, subDays } from "date-fns";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import "react-datepicker/dist/react-datepicker-cssmodules.css";

const ReactDatePicker = () => {
  const [startDate, setStartDate] = useState(null);

  console.log("startDate", startDate);
  // console.log("startDate.getFullYear()", startDate.getFullYear());
  // console.log("startDate.getMonth()", startDate.getMonth() + 1);
  // console.log("startDate.getDate()", startDate.getDate());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      includeDates={[new Date("2021-12-24"), new Date("2021-12-25")]}
    />
  );
};
export default ReactDatePicker;
