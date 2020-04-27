import React from 'react';
import './App.css';

import {BrowserRouter as Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp';

function App() {
  return (
    <Switch>
      <Route exact path= "/">
        <Login/>
      </Route>

      <Route exact path= "/signup">
        <SignUp/>
      </Route>
    </Switch>
      
    

  );
}

export default App;
