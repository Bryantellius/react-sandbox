import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Sympathy</h1>
            </div>
            <NavBar />
            <Switch>
                <Route exact path='/'/>
                <Route />
            </Switch>

        </Router>
    )
}

export default App;