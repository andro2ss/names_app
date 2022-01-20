import './App.css';
import AppBarHeader from "./Components/Header/Navigation/AppBar";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Body/Home";
import TopNames from "./Components/Body/TopNames";
import YourName from "./Components/Body/YourName";
import GenerateKidName from "./Components/Body/GenerateKidName";
import Container from '@mui/material/Container';


function App() {
    return (
        <>
            <header>
                <AppBarHeader/>
            </header>
            <main>
                <Container fixed>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Twojeimie" element={<YourName/>}/>
                        <Route path="/Najpopularniejszeimiona" element={<TopNames/>}/>
                        <Route path="/Generatorimiondladzieci" element={<GenerateKidName/>}/>
                    </Routes>
                </Container>
            </main>
        </>
    );
}

export default App;
