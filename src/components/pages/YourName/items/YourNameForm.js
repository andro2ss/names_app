import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import RowRadioButtonsGroup from "../../../common/items/RowRadioButtonsGroup";
import { correctNameWrite } from "../../../functions/CorrectNameWrite";
import { textFieldValidation } from "../../../functions/TextFieldValidation";

export function YourNameForm({
  name,
  setName,
  setNameData,
  status,
  arrays,
  counters,
  selectedArr,
  setSelectedArr,
}) {
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
            (dataFromArray[0][1] * 100) / counters[selectedArr],
          ]);
        } else {
          alert("Nie znaleziono imienia");
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
        className="form__name"
      >
        <h4>Sprawdźmy To !</h4>
        <p>Jakie imię Ciebie interesuje?</p>
        <TextField
          margin="normal"
          id="outlined-required"
          label="Podaj imię"
          type="text"
          value={name}
          onChange={handleChange}
        />
        <RowRadioButtonsGroup
          selectedArr={selectedArr}
          setSelectedArr={setSelectedArr}
          inputLabel={["Męskie", "Żeńskie"]}
          inputValue={["male", "female"]}
          formLabel={"Jest to imię męskie czy żeńskie?"}
        />
        <Button variant="outlined" type="submit">
          Gotowe
        </Button>
      </Box>
    </div>
  );
}
