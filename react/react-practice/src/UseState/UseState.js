import React, { useEffect, useRef, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}
function DashboardMessages() {
  return (
    <div>
      <h1>DashboardMessages</h1>
    </div>
  );
}
function DashboardTasks() {
  return (
    <div>
      <h1>DashboardTasks</h1>
    </div>
  );
}
const UseState = () => {
  // const [count, setCount] = useState(0);
  // const [storedValue, setStoredValue] = useState(() => {
  //   console.log("immediate running");
  //   try {
  //     const value = window.localStorage.getItem("user");
  //     if (value) {
  //       return JSON.parse(value);
  //     } else {
  //       window.localStorage.setItem("user", JSON.stringify(null));
  //       return null;
  //     }
  //   } catch (err) {
  //     return null;
  //   }
  // });
  // console.log("storedValue", storedValue);

  return (
    <div>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="messages" element={<DashboardMessages />} />
          <Route path="tasks" element={<DashboardTasks />} />
        </Route>
      </Routes>
      {/* <button onClick={() => setCount((prevState) => prevState + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setCount(0)}>Count - 0</button>
      <button onClick={() => setCount(5)}>Count - 5</button> */}
    </div>
  );
};

export default UseState;

// at any given point if logout
// then he should able to log in to that only page
// if not logged in then?
