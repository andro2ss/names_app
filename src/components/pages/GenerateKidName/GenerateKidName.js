import React, { useEffect, useState } from "react";
import BasicTable from "../../common/items/Table";
import KidNameForm from "./items/KidNameForm";
import "./GenerateKidName.scss";
import { createTableData } from "../../functions/CreateTableData";

function GenerateKidName() {
  const [progressStatus, setProgressStatus] = useState(0);
  const [progressStatusAsync, setProgressStatusAsync] = useState(0);
  const [rawData, setRawData] = useState(0);
  const [loadedBoyData, setLoadedBoyData] = useState([]);
  const [loadedGirlData, setLoadedGirlData] = useState([]);
  const [counterBoy, setCounterBoy] = useState(0);
  const [counterGirl, setCounterGirl] = useState(0);

  useEffect(() => {
    loadData();
    saveData();
    // readData();
  }, [progressStatus, progressStatusAsync]);

  const loadData = (url) => {
    if (progressStatus === 0) {
      console.log("Pobieram suruwke");
      fetch(
        "https://api.dane.gov.pl/1.4/resources/33191,imiona-nadane-dzieciom-w-polsce-w-i-poowie-2021-r-imie-pierwsze/data"
      )
        .then((response) => response.json())
        .then((data) => {
          setRawData(data);
          setProgressStatusAsync(1);
        });
      setProgressStatus(1);
    }
    if (progressStatusAsync === 1 && progressStatus === 1) {
      console.log("Suruwka pobrana smacznego:");
      console.log(typeof rawData);
      console.log(rawData);
    }
  };
  const saveData = () => {
    if (progressStatusAsync === 1 && progressStatus === 1) {
      let helpMaxPages = rawData.links.last.split("=");
      let maxPages = parseInt(helpMaxPages[helpMaxPages.length - 1]);
      console.log("Surowe dane: ");
      console.log(rawData);
      console.log("Zaczynam petle stron");
      const tempBoyArr = [];
      let tempCounterBoy = 0;
      const tempGirlArr = [];
      let tempCounterGirl = 0;
      for (let i = 1; i <= maxPages; i++) {
        fetch(
          `https://api.dane.gov.pl/1.4/resources/33191,imiona-nadane-dzieciom-w-polsce-w-i-poowie-2021-r-imie-pierwsze/data?page=${i}`
        )
          .then((response) => response.json())
          .then((data) => {
            for (let j = 0; j < data.data.length; j++) {
              let value = [
                data.data[j].attributes.col1.val,
                data.data[j].attributes.col2.val,
              ];
              if (data.data[j].attributes.col3.val === "M") {
                tempBoyArr.push(value);
                tempCounterBoy =
                  tempCounterBoy + data.data[j].attributes.col2.val;
              }
              if (data.data[j].attributes.col3.val === "K") {
                tempGirlArr.push(value);
                tempCounterGirl =
                  tempCounterGirl + data.data[j].attributes.col2.val;
              }
            }
            if (i === maxPages) {
              setLoadedBoyData(tempBoyArr);
              setLoadedGirlData(tempGirlArr);
              setCounterBoy(tempCounterBoy);
              setCounterGirl(tempCounterGirl);
              setProgressStatusAsync(2);
            }
          });
      }
      setProgressStatus(2);
    }
  };

  const readData = () => {
    if (progressStatusAsync === 2) {
      console.log("Dane powinny byc przemielone");
      console.log("girl data: ");
      console.log(loadedGirlData);
      console.log("boy data: ");
      console.log(loadedBoyData);
      console.log(typeof loadedBoyData);
      console.log("ilosc chujow " + counterBoy);
      console.log("ilosc cip " + counterGirl);
      setProgressStatusAsync(3);
    }
    console.log("progres status async: " + progressStatusAsync);
    console.log("progres status: " + progressStatus);
  };

  return (
    <>
      <div className="generateKidName">
        <h2>Znajdź imię dla swojej pociechy</h2>{" "}
        {/*{progressStatusAsync === 2 ? (*/}
        {/*  loadedBoyData.map((boy) => (*/}
        {/*    <p>*/}
        {/*      Imie: {boy[0]} Ile: {boy[1]}*/}
        {/*    </p>*/}
        {/*  ))*/}
        {/*) : (*/}
        {/*  <p>Loading</p>*/}
        {/*)}*/}
        <div className="generateKidName__container">
          <KidNameForm />
          <div className="generateKidName__table">
            <BasicTable
              status={progressStatusAsync}
              arr1={loadedBoyData}
              arr2={loadedGirlData}
              counter1={counterBoy}
              counter2={counterGirl}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GenerateKidName;
