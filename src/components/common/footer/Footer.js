import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="footer__right--container">
          <a
            href="https://www.linkedin.com/in/adrian-brzeski-4156aa175/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/andro2ss/names_app" target="_blank">
            <i className="fab fa-github fa-2x"></i>{" "}
          </a>
        </div>
        <div className="footer__left--container">
          <Link
            className="footer__logo"
            to="/"
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
            Names Info
          </Link>
          <p>Made by Adrian Brzeski</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
