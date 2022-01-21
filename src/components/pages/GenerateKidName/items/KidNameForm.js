import { drawItem } from "../../../functions/DrawItem";
import Box from "@mui/material/Box";
import RowRadioButtonsGroup from "./RowRadioButtonsGroup";
import RangeSlider from "./RangeSlider";
import Button from "@mui/material/Button";
import React from "react";

export default function KidNameForm() {
  const Item = drawItem();

  const handleSubmit = (e) => {
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
        <RowRadioButtonsGroup />
        <p>Określ przedział popularności imienia</p>
        <RangeSlider />
        <Button variant="outlined" type="submit">
          Gotowe
        </Button>
      </Box>
    </Item>
  );
}
