import React from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Blance } from "./components/Blance";

function App() {
  return (
    <div >
      <Header />
      <div className="container">
        <Blance />
      </div>
    </div>
  );
}

export default App;
