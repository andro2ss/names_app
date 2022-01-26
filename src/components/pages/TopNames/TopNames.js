import React from "react";
import BasicTable from "../../common/items/Table";
import "./TopNames.scss";

function TopNames({ status, arrays, counters }) {
  const handleClick = (e) => {
    if (e.target.innerText === "Męskie") {
      document.querySelector(".box--menu").firstChild.classList.add("active");
      document.querySelector(".box--menu").lastChild.classList.remove("active");
      document.querySelector(".tables__box").firstChild.classList.add("active");
      document
        .querySelector(".tables__box")
        .lastChild.classList.remove("active");
    } else {
      document
        .querySelector(".box--menu")
        .firstChild.classList.remove("active");
      document.querySelector(".box--menu").lastChild.classList.add("active");
      document
        .querySelector(".tables__box")
        .firstChild.classList.remove("active");
      document.querySelector(".tables__box").lastChild.classList.add("active");
    }
  };

  return (
    <>
      <div className="topNames">
        <h2 className="title">Najpopularniejsze imiona</h2>
        <div className="box--menu">
          <button className="button--gender active" onClick={handleClick}>
            Męskie
          </button>
          <button className="button--gender" onClick={handleClick}>
            Żeńskie
          </button>
        </div>
        <div className="tables__box">
          <div className="table active">
            <BasicTable
              status={status}
              arrays={arrays}
              counters={counters}
              selectedArr={0}
              rangeFilter={[0, 100]}
              valueToFixed={7}
            />
          </div>
          <div className="table">
            <BasicTable
              status={status}
              arrays={arrays}
              counters={counters}
              selectedArr={1}
              rangeFilter={[0, 100]}
              valueToFixed={7}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNames;
