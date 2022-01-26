import { drawItem } from "../../../functions/DrawItem";
import Box from "@mui/material/Box";
import RowRadioButtonsGroup from "../../../common/items/RowRadioButtonsGroup";
import RangeSlider from "./RangeSlider";
import React from "react";
import "./KidNameForm.scss";

export default function KidNameForm({
  selectedArr,
  setSelectedArr,
  rangeFilter,
  setRangeFilter,
}) {
  const Item = drawItem();

  const handleSubmit = (e) => {
    console.log(rangeFilter);
    e.preventDefault();
  };

  return (
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
      className="generateKidName__form"
    >
      <h3 className="form__title">Generator imion</h3>
      <RowRadioButtonsGroup
        selectedArr={selectedArr}
        setSelectedArr={setSelectedArr}
        inputLabel={["Chłopca", "Dziewczynki"]}
        inputValue={["male", "female"]}
        formLabel={"Szukasz imienia dla:"}
        className="form__radioButtons"
      />
      <p className="form__text">Określ przedział popularności imienia</p>
      <RangeSlider rangeFilter={rangeFilter} setRangeFilter={setRangeFilter} />
      <div className="slider__desc">
        <span>Popularne</span>
        <span>Rzadkie</span>
      </div>
    </Box>
  );
}
