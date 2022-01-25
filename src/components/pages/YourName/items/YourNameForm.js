import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import RowRadioButtonsGroup from "../../../common/items/RowRadioButtonsGroup";
import { correctNameWrite } from "../../../functions/CorrectNameWrite";
import { textFieldValidation } from "../../../functions/TextFieldValidation";
import Autocomplete from "@mui/material/Autocomplete";
import "./YourNameForm.scss";

export function YourNameForm({
  name,
  setName,
  setNameData,
  status,
  arrays,
  counters,
  selectedArr,
  setSelectedArr,
  setFormReady,
}) {
  const [needHelp, setNeedHelp] = useState("no");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textFieldValidation(name)) {
      if (status === 2) {
        let dataFromArray = arrays[selectedArr].filter(
          (item) => item[0].toLowerCase() === name.toLowerCase()
        );
        if (dataFromArray.length > 0) {
          setNameData([
            correctNameWrite(name),
            dataFromArray[0][1],
            ((dataFromArray[0][1] * 100) / counters[selectedArr]).toFixed(8),
          ]);
          setFormReady(1);
        } else {
          setNeedHelp("yes");
          alert("Nie znaleziono imienia... \nPomożemy Ci");
        }
      }
    }
  };
  return (
    <div className="yourName__form">
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="form__box"
      >
        <h3 className="box__title">Sprawdźmy To !</h3>
        <p className="box__text">Jakie imię Ciebie interesuje?</p>
        {needHelp === "yes" ? (
          <Autocomplete
            id="textFieldAutoComplete"
            freeSolo
            options={arrays[selectedArr].map((option) => option[0])}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Podaj imię"
                value={name}
                onSelect={handleChange}
                className="textField__input"
              />
            )}
          />
        ) : (
          <TextField
            margin="normal"
            id="nameTextField"
            label="Podaj imię"
            type="text"
            value={name}
            onChange={handleChange}
            className="textField__input"
          />
        )}
        <RowRadioButtonsGroup
          selectedArr={selectedArr}
          setSelectedArr={setSelectedArr}
          inputLabel={["Męskie", "Żeńskie"]}
          inputValue={["male", "female"]}
          formLabel={"Jest to imię męskie czy żeńskie?"}
        />
        <Button className="button--submit" variant="outlined" type="submit">
          Gotowe
        </Button>
      </Box>
    </div>
  );
}
