import React from 'react';
import './App.css';

import { BrowserRouter as Route, Switch } from 'react-router-dom';

// import HomePage from './components/HomePage';
import Login from './components/Login';

function App() {
    return (
        <div className="App">
                {/* <Route exact path="/home">
                    <HomePage />
                </Route> */}
                <Route path="/">
                <Switch>
                    <Login />
                    </Switch>
                </Route>
        </div>
    );
}

export default App;
