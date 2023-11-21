import React from "react";
import "./App.css";
import BarChart from "./BarChart";

function App() {
  const data = [12, 5, 6, 6, 9, 10];
  const width = 1000;
  const height = 500;
  const id = document.getElementById("root");

  return (
    <div className="App">
      <BarChart data={data} width={width} height={height} id={id} />
    </div>
  );
}

export default App;
