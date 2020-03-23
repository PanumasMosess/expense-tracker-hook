import React from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Blance } from "./components/Blance";
import { IncomeExpense } from "./components/IncomeExpense";

function App() {
  return (
    <div >
      <Header />
      <div className="container">
        <Blance />
        <IncomeExpense />
      </div>
    </div>
  );
}

export default App;
