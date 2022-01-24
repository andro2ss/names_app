import React from "react";
import BasicTable from "../../common/items/Table";

function TopNames({ status, arrays, counters }) {
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
