import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/body/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <Router>
        <route path="/">
          <Portfolio />
        </route>
        <route path="/weather">
          <WeatherApp />
        </route>
        <route path="/project"></route>
      </Router>
    </div>
  </React.StrictMode>
);
