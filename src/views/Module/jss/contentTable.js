import {
    defaultFont,
    grayColor,
} from "assets/jss/material-kit-react.js";

const contentTableStyle = {
    tableTitle: {
        marginTop: "25px",
        marginBottom: "0",
        fontSize: "14px"
    },
    table: {
        maxWidth: "640px"
    },
    tableHeader: {
        color: "#3c4858",
    },
    tableRow: {
        fontWeight: "300",
        color: "#3c4858",
        position: "relative",
    },
    rowButtons: {
        textAlign: "center"
    },
    tableInput: {
        ...defaultFont,
        width: "100%",
        height: "auto",
        top: "0",
        bottom: "0",
        position: "absolute",
        padding: "8px",
        display: "inline-block",
        resize: "none",
        borderLeft: "0.5px solid " + grayColor[0],
        borderRight: "none",
        borderTop: "none",
        borderBottom: "none",
    },
    lastInput: {
        borderRight: "0.5px solid " + grayColor[0],
    }
};

export default contentTableStyle;
