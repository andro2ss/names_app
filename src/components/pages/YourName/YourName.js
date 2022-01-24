import React, { useState } from "react";
import "./YourName.scss";
import * as PropTypes from "prop-types";
import { YourNameForm } from "./items/YourNameForm";
import { YourNameStack } from "./items/YourNameStack";

YourNameForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

function YourName({ status, arrays, counters }) {
  const [name, setName] = useState("");
  const [selectedArr, setSelectedArr] = useState(0);

  const [nameData, setNameData] = useState([
    "imie",
    "iloscWystapien",
    "procentPuplacji",
    "ciekawostka",
  ]);

  return (
    <>
      <div className="yourName">
        <h2>Twoje imię</h2>
        <div className="yourName__container">
          <YourNameForm
            name={name}
            setName={setName}
            setNameData={setNameData}
            status={status}
            arrays={arrays}
            counters={counters}
            selectedArr={selectedArr}
            setSelectedArr={setSelectedArr}
          />
          <YourNameStack
            nameData={nameData}
            selectedArr={selectedArr}
            counters={counters}
          />
        </div>
      </div>
    </>
  );
}

export default YourName;
