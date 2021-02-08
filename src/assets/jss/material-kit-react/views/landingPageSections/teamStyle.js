import {
  container,
  title,
  cardTitle,
  description,
  mlAuto,
  mrAuto,
  section,
  sectionDark,
  coloredShadow,
  blackColor,
  whiteColor,
  hexToRgb
} from "assets/jss/material-kit-react.js";

const teamStyle = {
  container,
  title,
  mlAuto,
  mrAuto,
  coloredShadow,
  description,
  textCenter: {
    textAlign: "center"
  },
  team: {
    padding: "0 0",
    "& h5$description,& h5$descriptionWhite": {
      marginBottom: "10px"
    }
  },
  section: {
    ...sectionDark,
    ...section,
    position: "relative",
    "& $title": {
      color: whiteColor
    },
    "& $descriptionWhite": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)"
    },
    "& $container": {
      zIndex: "2",
      position: "relative"
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
      backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.7)"
    }
  },
  justifyContent: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important"
  },
  cardCategory: {
    marginTop: "10px",
    textAlign: "center"
  },
  cardTitle: {
    ...cardTitle,
    textAlign: "center"
  },
  btn: {
    marginTop: "0 !important"
  },
  card3: {
    textAlign: "left"
  },
  card5: {
    textAlign: "left",
    "& $cardTitle": {
      color: whiteColor
    },
    "& $description": {
      color: whiteColor
    }
  }
};

export default teamStyle;
