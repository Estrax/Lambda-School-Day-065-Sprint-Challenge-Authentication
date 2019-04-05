import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import NavbarContainer from '../containers/NavbarContainer';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import JokesPage from '../pages/JokesPage';
import RouteAuthNeeded from '../hoc/RouteAuthNeeded';
import RouteAuthNotNeeded from '../hoc/RouteAuthNotNeeded';

export default (props) => {
    return (
        <Router history={props.history}>
            <div>
                <NavbarContainer />
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/login"/>}/>
                    <Route path="/login" exact component={RouteAuthNotNeeded(LoginPage)}/>
                    <Route path="/register" exact component={RouteAuthNotNeeded(RegistrationPage)}/>
                    <Route path="/jokes" exact component={RouteAuthNeeded(JokesPage)}/>
                </Switch>
            </div>
        </Router>
    );
}