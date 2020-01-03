import React from 'react';
import "react-table/react-table.css";
import SignUp from "./component/SignUp";
import Edit from "./component/Edit";
import View from "./component/View";
import {Route, Switch} from 'react-router-dom'
import {Employee} from "./component/Emp";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <Switch>
              <Route path="/" exact strict component={Employee} />
              <Route path="/edit/:name" component={Edit} />
              <Route path="/view" component={View} />
              <Route path="/signup" component={SignUp} />
            </Switch>
      </header>
    </div>
  );
}

export default App;
