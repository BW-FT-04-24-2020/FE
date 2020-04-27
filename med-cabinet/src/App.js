import React from 'react';
import './App.css';

import {BrowserRouter as Route, Switch} from 'react-router-dom'
import Login from './components/Login'


function App() {
  return (
    <Switch>
      <Route exact path= "/">
        <Login/>
      </Route>
    </Switch>
      
    

  );
}

export default App;
