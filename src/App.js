import React from "react";
import awsconfig from "./aws-exports";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
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
import ModuleCreation from "./views/ModuleCreation/ModuleCreation";
import LandingPage from "./views/LandingPage/LandingPage";
import {createBrowserHistory} from "history";
Amplify.configure(awsconfig);

function App() {
    var hist = createBrowserHistory();
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/components" component={Components} />
                <Route path="/profile-page" component={ProfilePage} />
                <Route path="/login-page" component={SignInPage} />
                <Route path="/module/:moduleSlug" component={ModulePage} />
                <Route path="/module-browse" component={ModuleBrowse} />
                <Route path="/module-creation" component={ModuleCreation} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </Router>
    )
}

export default (App);