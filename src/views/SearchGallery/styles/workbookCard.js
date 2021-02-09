import {
  description,
  mlAuto,
  grayColor,
} from "assets/jss/material-kit-react.js";

const styles = {
  mlAuto,
  cardCategory: {
    color: grayColor[1],
    marginTop: "10px",
    "& svg": {
      position: "relative",
      top: "8px"
    }
  },
  cardDescription: {
    ...description
  },
  workbookDescription: {
    ...description,
    fontSize: "12px",
    lineHeight: "1em",
    color: grayColor[1]
  },
  stats: {
    color: grayColor[0],
    display: "flex",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      fontSize: "18px",
      lineHeight: "18px"
    },
    "& svg": {
      position: "relative",
      top: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "18px",
      height: "18px"
    }
  },
  galleryCard: {
    marginTop: "15px",
    marginBottom: "15px",
    cursor: "pointer",
  },
  galleryBody: {
    padding: "10px 20px"
  },
  galleryFooter: {
    paddingLeft: "20px",
    paddingRight: "20px"
  }
};

export default styles;
