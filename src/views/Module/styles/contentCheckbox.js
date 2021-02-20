import customCheckboxRadioSwitch from "../../../assets/jss/material-kit-react/customCheckboxRadioSwitch";
import customSelectStyle from "../../../assets/jss/material-kit-react/customSelectStyle";

const contentCheckboxStyle = {
    ...customSelectStyle,
    ...customCheckboxRadioSwitch,
    disabledCheckboxAndRadio: {
        color: "#3c4858",
        opacity: "1"
    },
};

export default contentCheckboxStyle;
