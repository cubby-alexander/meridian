import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import ApplicationContext from "./ApplicationContext";
import Routing from "routing";
import muiTheme from "./muiTheme";
import users from "db/users";

const user = users[0];

function App() {
    const context = {
        authenticated: true,
        user
    }

    return (
        <ApplicationContext.Provider value={context}>
            <ThemeProvider theme={muiTheme}>
                <Routing />
            </ThemeProvider>
        </ApplicationContext.Provider>
    )
}

export default (App);