import './App.css';
import AppBarHeader from "./components/common/header/navigation/AppBar";
import {Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import TopNames from "./components/pages/TopNames/TopNames";
import YourName from "./components/pages/YourName/YourName";
import GenerateKidName from "./components/pages/GenerateKidName/GenerateKidName";
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
