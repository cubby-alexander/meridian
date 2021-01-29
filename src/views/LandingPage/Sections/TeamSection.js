import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Meridian Team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={8} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Paul Merrylees
                <br />
                <small className={classes.smallTitle}>"Lets discuss..."</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Paul has spent a number of years working as a facilitator of professional development.
                  His experiences led him to a unique perspective on the type of challenges
                  commonly faced by business managers. By focusing on providing the tools for managers to succeed,
                  he developed the original concept behind Meridian.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={8} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jacob Hall
                <br />
                <small className={classes.smallTitle}>"What if we..."</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Jacob is a serial entrepreneur who has shipped several products. He is a small-details
                  thinker with a bias for action, and brings this dual focus to the project. A full-stack
                  web developer and product manager, he delivered the launch version of Meridian.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={8} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Steve McQueen
                <br />
                <small className={classes.smallTitle}>"I propose we..."</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Steve McQueen is not Steve's actual name. Jacob wrote that because he wants to vamp enough
                  content to show what this page would look like in its finished version. There's approximately
                  one or two more sentences of space that need to be taken up, and then everything should look
                  similar to the launch version.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
