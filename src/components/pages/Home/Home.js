import React from "react";
// import Box from "@mui/material/Box";
import "./Home.scss";
function Home(props) {
  return (
    <div className="home">
      <div className="box">
        <h1 className="title">Names Info</h1>
        <h3 className="description"> Miło że jesteś z nami !!!</h3>
        <ul className="list">
          <p className="description">Z nami możesz:</p>
          <li className="list__item">
            Sprawdzić ilu jest Twoich imienników, zarejestrowanych w Polsce. O
            globalnym zasięgu możemy pomażyć :)
          </li>
          <li className="list__item">
            Dowiedzieć się, jakie imiona są najczęściej spotykane, albo jak
            wolisz unikatowe... Uwaga spoiler w danych, którymi dysponujemy nie
            ma rodzynków.{" "}
          </li>
          <li className="list__item">
            Wygenerować imię dla swojej pociechy na bazie trendów jakie panowały
            w zeszłym roku
          </li>
        </ul>
        <h4 className="text--ending">Zapraszamy do Zabawy</h4>
      </div>
    </div>
  );
}

export default Home;
