import React from "react";
import BasicTable from "../../common/items/Table";
import KidNameForm from "./items/KidNameForm";
import "./GenerateKidName.scss";

function GenerateKidName(props) {
  return (
    <>
      <div className="generateKidName">
        <h2>Znajdź imię dla swojej pociechy</h2>
        <div className="generateKidName__container">
          <KidNameForm />
          <div className="generateKidName__table">
            <BasicTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default GenerateKidName;
