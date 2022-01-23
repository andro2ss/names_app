import React, { useEffect, useState } from "react";
import BasicTable from "../../common/items/Table";
import KidNameForm from "./items/KidNameForm";
import "./GenerateKidName.scss";
import SaveDataApi from "../../functions/SaveDataAPI";

function GenerateKidName() {
  const [progressStatus, setProgressStatus] = useState(0);
  const [progressStatusAsync, setProgressStatusAsync] = useState(0);
  const [rawData, setRawData] = useState(0);
  const [loadedBoyData, setLoadedBoyData] = useState([]);
  const [loadedGirlData, setLoadedGirlData] = useState([]);
  const [counterBoy, setCounterBoy] = useState(0);
  const [counterGirl, setCounterGirl] = useState(0);
  const [selectedArr, setSelectedArr] = useState(0);

  useEffect(() => {
    SaveDataApi(
      "https://api.dane.gov.pl/1.4/resources/33191,imiona-nadane-dzieciom-w-polsce-w-i-poowie-2021-r-imie-pierwsze/data",
      progressStatus,
      setProgressStatus,
      progressStatusAsync,
      setProgressStatusAsync,
      rawData,
      setRawData,
      setLoadedBoyData,
      setLoadedGirlData,
      setCounterBoy,
      setCounterGirl
    );
    // readData();
  }, [progressStatus, progressStatusAsync]);

  return (
    <>
      <div className="generateKidName">
        <h2>Znajdź imię dla swojej pociechy</h2>{" "}
        <div className="generateKidName__container">
          <KidNameForm setGender={setSelectedArr} gender={selectedArr} />
          <div className="generateKidName__table">
            <BasicTable
              status={progressStatusAsync}
              arrays={[loadedBoyData, loadedGirlData]}
              counters={[counterBoy, counterGirl]}
              selectedArr={selectedArr}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GenerateKidName;
