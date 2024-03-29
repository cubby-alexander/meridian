import {
  primaryColor,
  dangerColor,
  roseColor,
  grayColor,
  blackColor,
  whiteColor,
  hexToRgb
} from "assets/jss/material-kit-react.js";

const customCheckboxRadioSwitch = {
  checkRoot: {
    padding: "8px",
    "&:hover": {
      backgroundColor:
          "rgba(" + hexToRgb(primaryColor) + ", 0.14) !important"
    }
  },
  radioRoot: {
    padding: "16px",
    "&:hover": {
      backgroundColor:
          "rgba(" + hexToRgb(primaryColor) + ", 0.14) !important"
    }
  },
  labelRoot: {
    //removed marginLeft: "-14px"
    marginLeft: "0",
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px"
  },

  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "2px"
    },
    "&:not(:first-child)": {
      marginTop: "-14px"
    },
    marginTop: "0",
    marginBottom: "0"
  },
  checked: {
    color: primaryColor + "!important"
  },
  checkedIcon: {
    width: "16px",
    height: "16px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", 0.84)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "3px"
  },
  disabledCheckboxAndRadio: {
    "& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked": {
      borderColor: blackColor,
      opacity: "0.26",
      color: blackColor,
    }
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: grayColor[1],
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "300",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset",
    "&:disabled": {
      color: grayColor[1],
      cursor: "default"
    }
  },
  labelHorizontal: {
    color: "rgba(" + hexToRgb(blackColor) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      float: "right"
    }
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px"
  },
  labelLeftHorizontal: {
    color: "rgba(" + hexToRgb(blackColor) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0"
  },
  labelError: {
    color: dangerColor[0]
  },
  radio: {
    color: primaryColor + "!important"
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + primaryColor,
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "50%"
  },
  inlineChecks: {
    marginTop: "8px"
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: grayColor[0],
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: grayColor[17],
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      margin: "0 auto 20px",
      transition: "all 0.2s"
    },
    "&:hover": {
      color: roseColor,
      "& > span:first-child": {
        borderColor: roseColor
      }
    }
  },
  iconCheckboxChecked: {
    color: roseColor,
    "& > span:first-child": {
      borderColor: roseColor
    }
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px"
  },
  switchBase: {
    color: primaryColor + "!important",
    "&:hover": {
      backgroundColor:
          "rgba(" + hexToRgb(primaryColor) + ", 0.14) !important"
    }
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(" + hexToRgb(blackColor) + ", 0.4)",
    color: whiteColor + "  !important",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)"
  },
  switchIconChecked: {
    borderColor: primaryColor,
    transform: "translateX(0px)!important"
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(" + hexToRgb(grayColor[24]) + ")",
    borderRadius: "15px",
    opacity: "0.7!important"
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(" + hexToRgb(primaryColor) + ", 1) !important"
    },
    "& $switchIcon": {
      borderColor: primaryColor
    }
  }
};

export default customCheckboxRadioSwitch;
