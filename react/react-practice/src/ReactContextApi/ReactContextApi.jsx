import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import "./style.css";
import ThemeToggle from "./ThemeToggle";
const ReactContextApi = () => {
  return (
    <div className="context_wrapper">
      {/* {console.log("ReactContextApi return")} */}
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

export default ReactContextApi;
