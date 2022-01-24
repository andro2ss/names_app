import { drawItem } from "../../../functions/DrawItem";
import Stack from "@mui/material/Stack";
import React from "react";

export function YourNameStack({ nameData, selectedArr, counters }) {
  const Item = drawItem();
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
    >
      <Item>
        <h3>{nameData[0]}</h3>
      </Item>
      <Item>W Polsce żyje {nameData[1]} osób o tym imieniu</Item>
      <Item>
        Ma je {nameData[2]} % wszystkich{" "}
        {selectedArr === 0 ? "mężczyzn" : "kobiet"} zarejestrowanych w Polsce
      </Item>
      <Item>
        W Polsce żyje około {counters[0]} mężczyzn i {counters[1]} kobiet,{" "}
        <br />
        dając wynik {counters[0] + counters[1]} wszystkich obywateli{" "}
      </Item>
      <Item>
        Informacje pochodzą ze strony{" "}
        <a href={"https://dane.gov.pl/"}>dane.gov.pl</a> <br />
        zostały wygenerowane w styczniu 2021 roku.
      </Item>
    </Stack>
  );
}
