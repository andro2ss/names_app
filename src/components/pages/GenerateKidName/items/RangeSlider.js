import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider({ rangeFilter, setRangeFilter }) {
  const [tempRangeFilter, setTempRangeFilter] = useState(rangeFilter);
  const handleChange = (event, newValue) => {
    setTempRangeFilter(newValue);
  };
  const handleMouseUp = () => {
    setRangeFilter(tempRangeFilter);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Table scope"}
        value={tempRangeFilter}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        onMouseUp={() => handleMouseUp()}
      />
    </Box>
  );
}
