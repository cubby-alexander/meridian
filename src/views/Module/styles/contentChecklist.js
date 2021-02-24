import customCheckboxRadioSwitch from "../../../assets/jss/material-kit-react/customCheckboxRadioSwitch";
import customSelectStyle from "../../../assets/jss/material-kit-react/customSelectStyle";

const contentCheckboxStyle = {
    ...customSelectStyle,
    ...customCheckboxRadioSwitch,
    sectionTitle: {
        fontSize: "16px",
        fontWeight: "500",
    },
    disabledCheckboxAndRadio: {
        color: "#3c4858",
        opacity: "1"
    },
    list: {
      marginBottom: "14px",
    },
    scope: {
        fontSize: "14px",
        fontWeight: "400",
        marginBottom: "0"
    },
    addButtons: {
        marginLeft: "40px"
    }
};

export default contentCheckboxStyle;
