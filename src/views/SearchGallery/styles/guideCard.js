import { container, title } from "assets/jss/material-kit-react.js";
import sectionCardStyles from "assets/jss/material-kit-react/views/componentsSections/sectionCards"
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import popoverStyles from "assets/jss/material-kit-react/popoverStyles.js";

const moduleBrowseStyle = {
    ...container,
    ...sectionCardStyles,
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
    workbookCount: {
        cursor: "pointer"
    },
    workbookPop: {
        cursor: "pointer"
    }
};

export default moduleBrowseStyle;
