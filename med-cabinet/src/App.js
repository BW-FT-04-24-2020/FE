import React from 'react';
import './App.css';

import { BrowserRouter as Route, Router } from 'react-router-dom';

import {Header} from './components/Header/Header'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route path="/" component={Login} />
        <Route component={Login} />


      </div>
    </Router>

  );
}

export default App;
