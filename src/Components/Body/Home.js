import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Home(props) {
    return (
        <Container fixed>
            <Box sx={{bgcolor: '#cfe8fc', height: '100%'}}>
                <h1>Names Info</h1>
                <hr/>
                <h3> Miło że jesteś z nami !!!</h3>
                <p>Dzięki nam dowiesz się</p>
                <ul>
                    <li>co nieco o swoim imieniu,</li>
                    <li>Jakie są najpopularniejsze imiona w Polsce,</li>
                    <li> a także wygenerujesz imię dla swojej pociechy.</li>
                </ul>
                <p>Zapraszam do Zabawy</p>
            </Box>
        </Container>
    );
}

export default Home;