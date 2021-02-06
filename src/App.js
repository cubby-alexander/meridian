import React from "react";
import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {
    Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Components from "./views/Components/Components";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import SignInPage from "./views/SignInPage/SignInPage";
import SignUpPage from "./views/SignupPage/SignupPage";
import Module from "./views/Module/Module";
import ModuleBrowse from "./views/ModuleBrowse/ModuleBrowse";
import ModuleCreation from "./views/ModuleCreation/ModuleCreation";
import LandingPage from "./views/LandingPage/LandingPage";
import {ThemeProvider} from "@material-ui/core/styles";
import {createMuiTheme} from "@material-ui/core/styles";
import {createBrowserHistory} from "history";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#004d40",
            light: "#39796b",
            dark: "#00251a",
        }
    }
});

const authenticated = false;

function App() {
    var hist = createBrowserHistory();
    return (
        <ThemeProvider theme={theme}>
            <Router history={hist}>
                <Switch>
                    <Route path="/components" component={Components} />
                    <Route path="/profile-page" component={ProfilePage} />
                    <Route path="/login-page" component={SignInPage} />
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/module/:moduleSlug" component={Module} />
                    <Route path="/module-browse" component={ModuleBrowse} />
                    <Route
                        path="/module-creation"
                        render={({location}) =>
                            authenticated ? (<ModuleCreation />) :
                            <Redirect
                                to={{pathname: "/login-page"}}/>} />
                    <Route path="/" component={LandingPage} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default (App);