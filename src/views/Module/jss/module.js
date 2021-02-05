import {
    container,
    title,
    primaryColor,
} from "assets/jss/material-kit-react.js";
import sectionCardStyles from "assets/jss/material-kit-react/views/componentsSections/sectionCards"

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import customCheckboxRadioSwitch from "../../../assets/jss/material-kit-react/customCheckboxRadioSwitch";
import customSelectStyle from "assets/jss/material-kit-react/customSelectStyle.js";

const modulePageStyle = {
    container,
    ...sectionCardStyles,
    ...customSelectStyle,
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
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    slideTitle: {
        textAlign: "center",
    },
    slideWrapper: {
        textAlign: "center",
        "@media (min-width: 576px)": {
            margin: "5px auto 50px auto",
        },
        "@media (min-width: 768px)": {
            margin: "20px auto 50px auto",
        },
        "@media (min-width: 960px)": {
            margin: "40px auto 50px auto",
        },
        "@media (min-width: 1200px)": {
            margin: "40px auto 50px auto",
        }
    },
    ...customCheckboxRadioSwitch,
    disabledCheckboxAndRadio: {
        color: "#3c4858",
        opacity: "1"
    },
    contentsListItem: {
        cursor: "pointer",
        fontSize: "12px"
    },
    contentsListItemActive: {
        fontWeight: "700",
        color: primaryColor,
        cursor: "auto",
    },
};

export default modulePageStyle;
