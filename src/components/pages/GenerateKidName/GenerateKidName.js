import React, { useEffect, useState } from "react";
import BasicTable from "../../common/items/Table";
import KidNameForm from "./items/KidNameForm";
import "./GenerateKidName.scss";
import { createTableData } from "../../functions/CreateTableData";

function GenerateKidName() {
  const [dataLoaded, setDataLoaded] = useState("noData");
  const [dataSaved, setDataSaved] = useState("noSaved");
  const [rawData, setRawData] = useState(0);
  const [loadedBoyData, setLoadedBoyData] = useState([]);
  const [loadedGirlData, setLoadedGirlData] = useState([]);
  const [counterBoy, setCounterBoy] = useState(0);

  useEffect(() => {
    loadData();
    saveData();
  }, [rawData, loadedBoyData]);

  const loadData = (url) => {
    if (dataLoaded === "noData") {
      fetch(
        "https://api.dane.gov.pl/1.4/resources/33191,imiona-nadane-dzieciom-w-polsce-w-i-poowie-2021-r-imie-pierwsze/data"
      )
        .then((response) => response.json())
        .then((data) => setRawData(data));
      setDataLoaded("dataLoaded");
    }
  };
  const saveData = () => {
    if (typeof rawData === "object" && dataSaved === "noSaved") {
      let helpMaxPages = rawData.links.last.split("=");
      let maxPages = parseInt(helpMaxPages[helpMaxPages.length - 1]);
      console.log(rawData);
      for (let i = 1; i <= maxPages; i++) {
        fetch(
          `https://api.dane.gov.pl/1.4/resources/33191,imiona-nadane-dzieciom-w-polsce-w-i-poowie-2021-r-imie-pierwsze/data?page=${i}`
        )
          .then((response) => response.json())
          .then((data) => {
            let tempCounterBoy = 0;
            for (let j = 0; j < data.data.length; j++) {
              if (data.data[j].attributes.col3.val === "M") {
                tempCounterBoy =
                  tempCounterBoy + data.data[j].attributes.col2.val;

                let value = [
                  data.data[j].attributes.col1.val,
                  data.data[j].attributes.col2.val,
                ];
                let tempArr = [];
                tempArr = loadedBoyData.push(value);
                console.log(value);
                console.log(tempArr);
                setLoadedBoyData(tempArr);
              }
            }
            setCounterBoy(tempCounterBoy);
            console.log("temp fin" + tempCounterBoy);

            // data.data.map((item) => {
            //   if (item.attributes.col3.val === "M") {
            //     let value = [
            //       item.attributes.col1.val,
            //       item.attributes.col2.val,
            //     ];
            //     let tempArr = loadedBoyData.push(value);
            //     setLoadedBoyData(tempArr);
            //   } else {
            //     setLoadedGirlData([
            //       item.attributes.col1.val,
            //       item.attributes.col2.val,
            //     ]);
            //   }
            // });
          });
      }
      setDataSaved("saved");
    }
    console.log(loadedGirlData);
    console.log(loadedBoyData);
    console.log("ilosc chlopcow " + counterBoy);
  };

  // async function dbLoad(url, arr, setArr) {
  //   if (start === 0) {
  //     setStart(2);
  //     const obj = await getDB(url);
  //     let helpMaxPages = obj.links.last.split("=");
  //     let maxPages = parseInt(helpMaxPages[helpMaxPages.length - 1]);
  //     console.log("Loading data");
  //     for (let i = 1; i <= maxPages; i++) {
  //       console.log(i + " from " + maxPages);
  //       let db = await getDB(url + `?page=${i}`);
  //       const tempArr = arr.push(...db.data);
  //       setArr(tempArr);
  //     }
  //     console.log("Loading complete! Your data:");
  //     console.log(arr);
  //     console.log(kidsArr);
  //     console.log("Preparing data for software");
  //     for (let i = 0; i < kidsArr.length; i++) {
  //       const tempArr = rows.push(
  //         createTableData(
  //           kidsArr[i].attributes.col1.val,
  //           kidsArr[i].attributes.col2.val,
  //           1
  //         )
  //       );
  //       setRows(tempArr);
  //       console.log(rows);
  //       setStart(1);
  //     }
  //   }
  // }

  return (
    <>
      <div className="generateKidName">
        <h2>Znajdź imię dla swojej pociechy</h2>{" "}
        {/*{start === 1 ? rows.map((row) => <p>{row.name}</p>) : <p>Loading</p>}*/}
        <div className="generateKidName__container">
          <KidNameForm />
          <div className="generateKidName__table">
            <BasicTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default GenerateKidName;
