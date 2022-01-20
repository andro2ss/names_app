import './App.css';
import AppBarHeader from "./Components/Header/Navigation/AppBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Body/Home";
import TopNames from "./Components/Body/TopNames";

function App() {
    return (
        <>
                <header>
                    <AppBarHeader/>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/TopNames" element={<TopNames/>}/>
                    </Routes>
                </main>
        </>
    );
}

export default App;
