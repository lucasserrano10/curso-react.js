import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FirstComponent from "./components/FirstComponent";
import "./App.css";
import TemplateExpressions from "./components/TemplateExpressions";

function App() {
  return (
    <>
      <div className="div-main container">
        <h1>Hello Dev</h1>
        <button className="btn-main">CLIQUE AQUI</button>
        <FirstComponent/>
        <TemplateExpressions/>
      </div>
    </>
  );
}

export default App;
