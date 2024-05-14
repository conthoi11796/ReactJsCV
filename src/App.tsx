import { useMemo, useState } from "react";
import DoughnutChart from "./DoughnutChart";
import React from "react";

export default function MyApp() {
  const [change, setChange] = useState(false);

  const data = useMemo(
    () => [12, 19, 3, 5, 2, Number(change)] as Number[],
    // eslint-disable-next-line
    [change]
  );

  return (
    <div className="App" style={{ height: 300, width: 300 }}>
      <a href="./">LINK</a>
      <button
        onClick={() => {
          setChange(!change);
        }}
      >
        BTN
      </button>
      <h1>Doughnut Chart Example</h1>
      <DoughnutChart />
    </div>
  );
}
