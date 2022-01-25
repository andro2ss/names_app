import React, { useState } from "react";
import "./YourName.scss";
import * as PropTypes from "prop-types";
import { YourNameForm } from "./items/YourNameForm";
import { YourNameStack } from "./items/YourNameStack";
import { Spinner } from "../../common/items/Spinner";

YourNameForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

function YourName({ status, arrays, counters }) {
  const [name, setName] = useState("");
  const [selectedArr, setSelectedArr] = useState(0);
  const [formReady, setFormReady] = useState(0);
  const [nameData, setNameData] = useState([
    "imie",
    "iloscWystapien",
    "procentPuplacji",
    "ciekawostka",
  ]);

  return (
    <>
      <div className="yourName">
        <h2 className="title">Twoje imię</h2>
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
            setFormReady={setFormReady}
          />
          {formReady === 1 ? (
            <YourNameStack
              nameData={nameData}
              selectedArr={selectedArr}
              counters={counters}
            />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
}

export default YourName;
