import React from 'react';
import './App.css';
import './Login.css';

import { BrowserRouter as Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePageComponents/HomePage';
import Login from './components/Login';
import SearchResults from './components/SearchResults';
import { connect } from 'react-redux';

import { getStrainsDataFromActions } from './store/actions';

import Profile from './components/Profile';
import SavedStrains from './components/HomePageComponents/SavedStrains';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/home">
                        <HomePage />
                    </Route>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/SearchResults">
                        <SearchResults />
                    </Route>
                    <Route path="/SavedStrains">
                        <SavedStrains />
                    </Route>

                    <Route path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    // console.log('mapStateToProps state: ', state);
    return {
        error: state.info.error,
        isFetching: state.info.isFetching,
        strains: state.info.strains,
    };
};
export default connect(mapStateToProps, { getStrainsDataFromActions })(App);
