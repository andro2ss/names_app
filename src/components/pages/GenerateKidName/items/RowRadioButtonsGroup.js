import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup({ setGender, gender }) {
  const handleClickControlLabel = (e) => {
    if (e.target.value === "male") setGender(0);
    if (e.target.value === "female") setGender(1);
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Jaka jest płeć dziecka?
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          checked={gender === 0}
          value="male"
          control={<Radio />}
          label="Chłopiec"
          onClick={handleClickControlLabel}
        />
        <FormControlLabel
          checked={gender === 1}
          value="female"
          control={<Radio />}
          label="Dziewczynka"
          onClick={handleClickControlLabel}
        />
      </RadioGroup>
    </FormControl>
  );
}
