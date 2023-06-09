import React from "react";

function App() {
  let [time, setTime] = React.useState("TIME");
  function getTime() {
    setTime(new Date().toLocaleTimeString("en-IN"));
    setInterval(getTime, 1000);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
