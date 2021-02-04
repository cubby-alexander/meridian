import React from "react";
import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {
    Router,
    Switch,
    Route,
} from "react-router-dom";
import Components from "./views/Components/Components";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import SignInPage from "./views/SignInPage/SignInPage";
import SignUpPage from "./views/SignupPage/SignupPage";
import ModulePage from "./views/Module/ModulePage";
import ModuleBrowse from "./views/ModuleBrowse/ModuleBrowse";
import ModuleCreation from "./views/ModuleCreation/ModuleCreation";
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
                <Route path="/signup" component={SignUpPage} />
                <Route path="/module/:moduleSlug" component={ModulePage} />
                <Route path="/module-browse" component={ModuleBrowse} />
                <Route path="/module-creation" component={ModuleCreation} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </Router>
    )
}

export default (App);