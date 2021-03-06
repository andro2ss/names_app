import "./NavBar.scss";
import * as React from "react";
import MainLogo from "../mainLogo/MainLogo";
import { Link } from "react-router-dom";
import uniId from "../../../../functions/UniqeID";
import { useState } from "react";

export default function NavBar({ pages }) {
  const [active, setActive] = useState(null);

  return (
    <div className="header__navigation">
      <nav className="navbar">
        <label
          className="navbar-toggle"
          id="js-navbar-toggle"
          htmlFor="chkToggle"
        >
          <i className="fa fa-bars"></i>
        </label>
        <div
          className="logo "
          onClick={() => {
            document
              .querySelector(".link--active")
              .classList.remove("link--active");
            document
              .querySelector("#js-menu")
              .firstElementChild.firstElementChild.classList.add(
                "link--active"
              );
          }}
        >
          <MainLogo />
        </div>
        <input type="checkbox" id="chkToggle"></input>
        <ul className="main-nav" id="js-menu">
          {pages.map((page) => (
            <li key={uniId()}>
              <Link
                onClick={() => setActive(page)}
                className={`nav-links ${active === page ? "link--active" : ""}`}
                to={
                  page.replace(/\s+/g, "") === "Stronagłówna"
                    ? "/"
                    : page.replace(/\s+/g, "") === "Twojeimię"
                    ? "Twojeimie"
                    : page.replace(/\s+/g, "")
                }
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
