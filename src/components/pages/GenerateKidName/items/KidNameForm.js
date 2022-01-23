import { drawItem } from "../../../functions/DrawItem";
import Box from "@mui/material/Box";
import RowRadioButtonsGroup from "./RowRadioButtonsGroup";
import RangeSlider from "./RangeSlider";
import Button from "@mui/material/Button";
import React, { useState } from "react";

export default function KidNameForm({
  gender,
  setGender,
  rangeFilter,
  setRangeFilter,
  setProgressStatus,
}) {
  const Item = drawItem();

  const handleSubmit = (e) => {
    console.log(rangeFilter);
    e.preventDefault();
  };

  return (
    <Item>
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
        <h4>Generator imion</h4>
        <RowRadioButtonsGroup gender={gender} setGender={setGender} />
        <p>Określ przedział popularności imienia</p>
        <RangeSlider
          rangeFilter={rangeFilter}
          setRangeFilter={setRangeFilter}
        />
        <Button variant="outlined" type="submit">
          Gotowe
        </Button>
      </Box>
    </Item>
  );
}
