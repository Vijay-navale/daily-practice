import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = () => {
  const history = useHistory();
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  const [disabled, setDisabled] = useState(false);
  // const [counter, setCounter] = useState(0);
  useEffect(() => {
    // setTimeout(() => {
    //   setCounter(counter + 1);
    // }, 1500);
    // setTimeout(() => {
    //   setCounter(counter + 1);
    // }, 1600);
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  const handleMenu = () => {
    disabledMenu();
    if (state.initial === false) {
      setState({ initial: null, clicked: true, menuName: "close" });
    } else if (state.clicked === true) {
      setState({ clicked: !state.clicked, menuName: "Menu" });
    } else if (state.clicked === false) {
      setState({ clicked: !state.clicked, menuName: "Close" });
    }
  };

  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HAMBRG.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default Header;
