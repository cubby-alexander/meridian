import {
    defaultFont,
    grayColor,
} from "assets/jss/material-kit-react.js";

const contentTableStyle = {
    tableTitle: {
        marginTop: "25px",
        marginBottom: "0",
        fontSize: "16px",
        fontWeight: "500"
    },
    table: {
        maxWidth: "640px"
    },
    tableHeader: {
        color: "#3c4858",
        textTransform: "uppercase",
        fontSize: "12px",
        fontWeight: "500"
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
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        top: "0",
        bottom: "0",
        padding: "0",
        position: "absolute",
        overflow: "hidden",
        display: "inline-block",
        resize: "none",
        borderLeft: "0.5px solid " + grayColor[7],
        borderRight: "none",
        borderTop: "none",
        borderBottom: "none",
    },
    lastInput: {
        borderRight: "0.5px solid " + grayColor[7],
    },
    inputArea: {
        ...defaultFont,
        width: "100%",
        height: "auto",
        top: "0",
        bottom: "0",
        position: "absolute",
        display: "inline-block",
        resize: "none",
        borderLeft: "solid white 8px",
        borderRight: "solid white 8px",
        borderTop: "solid white 8px",
        borderBottom: "solid white 8px",
    }
};

export default contentTableStyle;
