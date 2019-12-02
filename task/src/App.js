import React from 'react';
//import ReactTable from "react-table";
import "react-table/react-table.css";

import Employee from "./component/employee";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Employee />
      </header>
    </div>
  );
}

export default App;
