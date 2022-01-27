import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../../../img/logo.png";
import "./MainLogo.css";

function MainLogo() {
  return (
    <Link to="/">
      <img className="mainLogo" src={mainLogo} alt="Names Info Logo" />
    </Link>
  );
}

export default MainLogo;
