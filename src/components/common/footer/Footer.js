import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer({ pages }) {
  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="footer--right">
          <a
            href="https://www.linkedin.com/in/adrian-brzeski-4156aa175/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/andro2ss" target="_blank">
            <i className="fab fa-github fa-2x"></i>{" "}
          </a>
        </div>
        <div className="footer--left">
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
            Name Info
          </Link>
          <p>Made by Adrian Brzeski</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
