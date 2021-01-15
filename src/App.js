import React, {useState} from 'react';
import './App.css';
import DateSetter from './Components/Date';
import {BrowserRouter as Switch,Route} from "react-router-dom";
import FrontPage from './Components/FrontPage'

export default function App() {
  const [date, setDate] = useState();

  return(
    <div className="App">
      <Switch>
        <Route exact path="/">
          <DateSetter date={date} setDate={setDate}/>   
        </Route>
        <Route path="/front">
          <FrontPage date={date}/>
        </Route>
      </Switch>
    </div>
  )
};