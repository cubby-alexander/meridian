import React from "react";

import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';

import {
    Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Components from "./views/Components/Components";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import SignInPage from "./views/SignInPage/SignInPage";
import ModulePage from "./views/Module/ModulePage";
import ModuleBrowse from "./views/ModuleBrowse/ModuleBrowse";
import LandingPage from "./views/LandingPage/LandingPage";
import {createBrowserHistory} from "history";

function App() {
    var hist = createBrowserHistory();
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/components" component={Components} />
                <Route path="/profile-page" component={ProfilePage} />
                <Route path="/login-page" component={SignInPage} />
                <Route path="/module" component={ModulePage} />
                <Route path="/module-browse" component={ModuleBrowse} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </Router>
    )
}

export default (App);