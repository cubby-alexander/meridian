import { container, title, defaultFont } from "assets/jss/material-kit-react.js";
import sectionCardStyles from "assets/jss/material-kit-react/views/componentsSections/sectionCards"

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import customCheckboxRadioSwitch from "../../../assets/jss/material-kit-react/customCheckboxRadioSwitch";
import customSelectStyle from "assets/jss/material-kit-react/customSelectStyle.js";
import popoverStyles from "assets/jss/material-kit-react/popoverStyles.js";

const moduleBrowseStyle = {
    ...container,
    ...sectionCardStyles,
    ...customSelectStyle,
    ...popoverStyles,
    popoverHeader: {
        fontSize: "14px",
        padding: "0 10px",
    },
    popoverBody: {
        fontSize: "12px",
        marginLeft: "5px",
    },
    module: {
        textAlign: "center",
        "& img": {
            maxWidth: "180px",
            width: "100%",
            margin: "0 auto",
            transform: "translate3d(0, -50%, 0)"
        }
    },
    description: {
        margin: "1.071rem auto 0",
        maxWidth: "700px",
        textAlign: "left !important"
    },
    ...imagesStyle,
    main: {
        background: "#f6f6f6",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    title: {
        ...title,
        fontSize: "24px",
        display: "inline-block",
        textAlign: "center",
        position: "relative",
        width: "100%",
        marginTop: "30px",
        minHeight: "32px",
        marginBottom: "0px",
        textDecoration: "none"
    },
    moduleFilters: {
        paddingBottom: "15px",
    },
    socials: {
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
        color: "#999"
    },
    navWrapper: {
        margin: "20px auto 50px auto",
        textAlign: "center"
    },
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
    ...customCheckboxRadioSwitch,
    disabledCheckboxAndRadio: {
        color: "#3c4858",
        opacity: "1"
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
        border: "none",
    },
    test: {
        paddingBottom: "60px",
    },
    workbookCount: {
        cursor: "pointer"
    },
    workbookPop: {
        cursor: "pointer"
    }
};

export default moduleBrowseStyle;
