import { drawItem } from "../../../functions/DrawItem";
import Stack from "@mui/material/Stack";
import React from "react";
import "./YourNameStack.scss";
export function YourNameStack({ nameData, selectedArr, counters }) {
  const Item = drawItem();
  return (
    <Stack
      className="yourName__stack"
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      <Item className="stack__box">
        <h3 className="box__title">{nameData[0]}</h3>
      </Item>
      <Item className="stack__box">
        Żyje {nameData[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
        {selectedArr === 0 ? "mężczyzn" : "kobiet"} z tym imieniem
        zarejestrowanym w Polsce.
      </Item>
      <Item className="stack__box">
        Ma je {nameData[2]} % wszystkich{" "}
        {selectedArr === 0 ? "mężczyzn" : "kobiet"} zarejestrowanych w Polsce.
      </Item>
      <Item className="stack__box">
        W Polsce zarejestrowano{" "}
        {counters[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} mężczyzn
        i {counters[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} kobiet,{" "}
        <br />
        dając wynik{" "}
        {(counters[0] + counters[1])
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
        o których istnieniu wie rząd polski.{" "}
      </Item>
      <Item className="stack__box">
        Informacje pochodzą ze strony{" "}
        <a href={"https://dane.gov.pl/"}>dane.gov.pl</a> <br />
        zostały wygenerowane w styczniu 2021 roku.
      </Item>
    </Stack>
  );
}
