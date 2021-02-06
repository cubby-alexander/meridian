import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import ApplicationContext from "./ApplicationContext";
import Routing from "routing";
import muiTheme from "./muiTheme";

const context = {
    authenticated: true
};

function App() {
    return (
        <ApplicationContext.Provider value={context}>
            <ThemeProvider theme={muiTheme}>
                <Routing />
            </ThemeProvider>
        </ApplicationContext.Provider>
)
}

export default (App);