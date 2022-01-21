import {drawItem} from "../../../functions/DrawItem";
import Stack from "@mui/material/Stack";
import React from "react";

export function YourNameStack() {
    const Item = drawItem();
    return <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
    >
        <Item>W Polsce żyje "x" osób o wyszukanym imieniu</Item>
        <Item>Ma je x % populacji polskiej</Item>
        <Item>Ciekawostki o imieniu</Item>
    </Stack>;
}