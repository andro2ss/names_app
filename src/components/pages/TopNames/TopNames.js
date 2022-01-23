import React, { useEffect, useState } from "react";
import BasicTable from "../../common/items/Table";
import getCsvData from "../../functions/GetCsvData";

function TopNames() {
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
      <div className="topNames">
        <h2>Najpopularniejsze imiona</h2>
        <div>
          <p>Panowie</p>
          <BasicTable
            status={status}
            arrays={arrays}
            counters={counters}
            selectedArr={0}
            rangeFilter={[0, 100]}
          />
          <p>Panie</p>
          <BasicTable
            status={status}
            arrays={arrays}
            counters={counters}
            selectedArr={1}
            rangeFilter={[0, 100]}
          />
        </div>
      </div>
    </>
  );
}

export default TopNames;
