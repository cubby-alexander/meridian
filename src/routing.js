import {Redirect, Route, Router, Switch} from "react-router-dom";
import Components from "./views/Components/Components";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import SignInPage from "./views/SignInPage/SignInPage";
import SignUpPage from "./views/SignupPage/SignupPage";
import Module from "./views/Module/Module";
import SearchGallery from "./views/SearchGallery/SearchGallery";
import ModuleCreation from "./views/ModuleCreation/ModuleCreation";
import LandingPage from "./views/LandingPage/LandingPage";
import React, {useContext} from "react";
import {createBrowserHistory} from "history";
import ApplicationContext from "./ApplicationContext";


export default function Routing(props) {
    const context = useContext(ApplicationContext)
    var hist = createBrowserHistory();
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/components" component={Components} />
                <Route path="/profile-page" component={ProfilePage} />
                <Route path="/login-page" component={SignInPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/module/:moduleSlug/:workbook?" component={Module} />
                <Route path="/search" component={SearchGallery} />
                <Route
                    path="/module-creation"
                    render={({location}) =>
                        context.authenticated ? (<ModuleCreation />) :
                            <Redirect
                                to={{pathname: "/login-page"}}/>} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </Router>
    )
}