import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Develop better managers one problem at a time
          </h2>
          <h5 className={classes.description}>
            Meridian's platform is a training and development tool for team
            leaders that puts all the focus on the real, day-to-day problems
            managers struggle with. From a large selection of training modules,
            users can find an actionable solution to a specific, clearly defined
            management problem in less than 10 minutes.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Easy To Implement"
              description="Meridian doesn't create value through top-down reorganization built around a dense, jargon-y management strategy. It's a web app designed for ease-of-use and simple on-boarding."
              icon={PlaylistAddCheckIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Immediate Impact"
              description="Meridian doesn't impart rousing leadership doctrines that are difficult to apply. Our training modules address common, easy-to-recognize management problems that your team leaders need help solving today."
              icon={PriorityHighIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Better Business"
              description="Improving the performance of your team leaders is the single most impactful way to increase employee engagement, productivity, and retention. It's a change that benefits every aspect of your business."
              icon={EmojiEmotionsIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
