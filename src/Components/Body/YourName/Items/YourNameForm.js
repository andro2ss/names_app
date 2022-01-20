import {drawItem} from "../../../HelpFunction/DrawItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import React from "react";

export function YourNameForm({name, setName}) {
    const Item = drawItem();

    const handleChange = (event) => {
        setName(event.target.value);
        event.preventDefault();

    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return <Item className="yourName__form">
        <Box component="form"
             sx={{
                 display: "flex",
                 flexDirection: "column",
                 justifyContent: "center"
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
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Jest to imię męskie czy żeńskie?</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="male" control={<Radio/>} label="Męskie"/>
                    <FormControlLabel value="female" control={<Radio/>} label="Żeńskie"/>
                </RadioGroup>
            </FormControl>
            <Button variant="outlined" type="submit">Gotowe</Button>
        </Box>
    </Item>;
}