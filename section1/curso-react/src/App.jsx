import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FirstComponent from "./components/FirstComponent";
import "./App.css";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

function App() {
  return (
    <>
      <div className="div-main container">
        <h1>Hello Dev</h1>
        <Challenge/>
      </div>
    </>
  );
}

export default App;
