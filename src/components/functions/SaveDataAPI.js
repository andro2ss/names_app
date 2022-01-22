import React from "react";

function SaveDataApi(
  url,
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
) {
  if (progressStatus === 0) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRawData(data);
        setProgressStatusAsync(1);
      });
    setProgressStatus(1);
  }
  if (progressStatusAsync === 1 && progressStatus === 1) {
    let helpMaxPages = rawData.links.last.split("=");
    let maxPages = parseInt(helpMaxPages[helpMaxPages.length - 1]);
    const tempBoyArr = [];
    let tempCounterBoy = 0;
    const tempGirlArr = [];
    let tempCounterGirl = 0;
    for (let i = 1; i <= maxPages; i++) {
      fetch(`${url}?page=${i}`)
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
}

export default SaveDataApi;
