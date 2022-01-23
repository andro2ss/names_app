import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup({
  setSelectedArr,
  selectedArr,
  inputLabel,
  inputValue,
  formLabel,
}) {
  const handleClickControlLabel = (e) => {
    if (e.target.value === "male") setSelectedArr(0);
    if (e.target.value === "female") setSelectedArr(1);
  };

  return (
    <FormControl>
      <FormLabel>{formLabel}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          checked={selectedArr === 0}
          value={inputValue[0]}
          control={<Radio />}
          label={inputLabel[0]}
          onClick={handleClickControlLabel}
        />
        <FormControlLabel
          checked={selectedArr === 1}
          value={inputValue[1]}
          control={<Radio />}
          label={inputLabel[1]}
          onClick={handleClickControlLabel}
        />
      </RadioGroup>
    </FormControl>
  );
}
