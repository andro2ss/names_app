import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import TopNames from "./components/pages/TopNames/TopNames";
import YourName from "./components/pages/YourName/YourName";
import GenerateKidName from "./components/pages/GenerateKidName/GenerateKidName";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import getCsvData from "./functions/GetCsvData";
import NavBar from "./components/common/header/navbar/Navbar";
import Footer from "./components/common/footer/Footer";

function App() {
  const [maleArray, setMaleArray] = useState(1);
  const [femaleArray, setFemaleArray] = useState(1);
  const [status, setStatus] = useState(0);
  const [arrays, setArrays] = useState([]);
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    if (status === 0) {
      getCsvData(setMaleArray, "male");
      setStatus(10);
    }
    if (typeof maleArray === "object" && status === 10) {
      getCsvData(setFemaleArray, "female");
      setStatus(20);
    }
    if (
      typeof femaleArray === "object" &&
      typeof maleArray === "object" &&
      status === 20
    ) {
      let tempArray = [];
      let tempCounter = [];
      let maleCounter = 0;
      let femaleCounter = 0;
      let tempMaleArray = maleArray.map((person) => [
        person.IMIĘ_PIERWSZE,
        parseInt(person.LICZBA_WYSTĄPIEŃ),
      ]);
      let tempFemaleArray = femaleArray.map((person) => [
        person.IMIĘ_PIERWSZE,
        parseInt(person.LICZBA_WYSTĄPIEŃ),
      ]);
      tempArray.push(tempMaleArray);
      tempArray.push(tempFemaleArray);
      setArrays(tempArray);
      for (let i = 0; i < tempMaleArray.length; i++) {
        maleCounter += tempMaleArray[i][1];
      }
      for (let i = 0; i < tempFemaleArray.length; i++) {
        femaleCounter += tempFemaleArray[i][1];
      }
      tempCounter.push(maleCounter);
      tempCounter.push(femaleCounter);
      setCounters(tempCounter);
      setStatus(2);
    }
  }, [maleArray, femaleArray, status]);

  return (
    <>
      <header>
        <NavBar
          pages={[
            "Strona główna",
            "Twoje imię",
            "Najpopularniejsze imiona",
            "Generator imion dla dzieci",
          ]}
        />
      </header>
      <main>
        <div className="page__container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Twojeimie"
              element={
                <YourName status={status} arrays={arrays} counters={counters} />
              }
            />
            <Route
              path="/Najpopularniejszeimiona"
              element={
                <TopNames status={status} arrays={arrays} counters={counters} />
              }
            />
            <Route
              path="/Generatorimiondladzieci"
              element={<GenerateKidName />}
            />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
