import React, { useEffect, useState } from "react";
import BasicTable from "../../common/items/Table";
import KidNameForm from "./items/KidNameForm";
import "./GenerateKidName.scss";
import { createTableData } from "../../functions/CreateTableData";

function GenerateKidName() {
  const [kidsArr, setKidsArr] = useState([]);
  const [rows, setRows] = useState([]);
  const [start, setStart] = useState(0);

  async function getDB(url) {
    const res = await fetch(url);
    return await res.json();
  }

  useEffect(() => {
    dbLoad(
      "https://api.dane.gov.pl/1.4/resources/33191,imiona-nadane-dzieciom-w-polsce-w-i-poowie-2021-r-imie-pierwsze/data",
      kidsArr,
      setKidsArr
    ).catch((e) => {});
  }, [start]);

  async function dbLoad(url, arr, setArr) {
    if (start === 0) {
      setStart(2);
      const obj = await getDB(url);
      let helpMaxPages = obj.links.last.split("=");
      let maxPages = parseInt(helpMaxPages[helpMaxPages.length - 1]);
      console.log("Loading data");
      for (let i = 1; i <= maxPages; i++) {
        console.log(i + " from " + maxPages);
        let db = await getDB(url + `?page=${i}`);
        const tempArr = arr.push(...db.data);
        setArr(tempArr);
      }
      console.log("Loading complete! Your data:");
      console.log(arr);
      console.log(kidsArr);
      console.log("Preparing data for software");
      for (let i = 0; i < kidsArr.length; i++) {
        const tempArr = rows.push(
          createTableData(
            kidsArr[i].attributes.col1.val,
            kidsArr[i].attributes.col2.val,
            1
          )
        );
        setRows(tempArr);
        console.log(rows);
        setStart(1);
      }
    }
  }

  return (
    <>
      <div className="generateKidName">
        <h2>Znajdź imię dla swojej pociechy</h2>{" "}
        {/*{start === 1 ? rows.map((row) => <p>{row.name}</p>) : <p>Loading</p>}*/}
        <div className="generateKidName__container">
          <KidNameForm />
          <div className="generateKidName__table">
            <BasicTable arrData={rows} start={start} />
          </div>
        </div>
      </div>
    </>
  );
}

export default GenerateKidName;
