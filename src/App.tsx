import React, { useState, useEffect } from "react";
import "./App.css";
import BarChart from "./BarChart";

function App() {
  const [data, setData] = useState([12, 5, 6, 6, 9, 10]);
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(500);
  const id = document.getElementById("root");

  return (
    <div className="App">
      <BarChart data={data} width={width} height={height} id={id} />
    </div>
  );
}

export default App;
