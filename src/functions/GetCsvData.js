export default function GetCsvData(setStateArr, gender, setStatus) {
  function getData(result) {
    setStateArr(result);
  }

  function parseData(callBack) {
    let csvFilePath;
    if (gender === "male") {
      csvFilePath = require("../data/MaleNames.csv");
    } else {
      csvFilePath = require("../data/FemaleNames.csv");
    }
    let Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: function (results) {
        callBack(results.data);
      },
    });
  }
  parseData(getData);
}
