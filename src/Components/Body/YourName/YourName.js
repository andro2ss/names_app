import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./YourName.css"
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function YourName(props) {

    const Item = styled(Paper)(({theme}) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [name, setName] = React.useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("dziabneli mnie")
    }

    return (
        <>
            <div className="yourName">
                <h2>Twoje imię</h2>
                <div className="yourName__container">
                    <Item className="yourName__form">
                        <Box component="form"
                             sx={{
                                 display: 'flex',
                                 flexDirection: 'column',
                                 justifyContent: 'center'
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
                                    <FormControlLabel value="male" control={<Radio />} label="Męskie" />
                                    <FormControlLabel value="female" control={<Radio />} label="Żeńskie" />
                                </RadioGroup>
                            </FormControl>
                            <Button variant="outlined" type="submit">Gotowe</Button>
                        </Box>
                    </Item>

                    <div>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="stretch"
                            spacing={2}
                        >
                            <Item>W Polsce żyje "x" osób o wyszukanym imieniu</Item>
                            <Item>Ma je x % populacji polskiej</Item>
                            <Item>Ciekawostki o imieniu</Item>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
}

export default YourName;