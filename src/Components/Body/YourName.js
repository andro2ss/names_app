import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


function YourName(props) {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

     return (
        <>
            <h2> </h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Item>
                            <form>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Hello World"
                                />
                                <Button variant="outlined">Gotowe</Button>
                            </form>
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default YourName;