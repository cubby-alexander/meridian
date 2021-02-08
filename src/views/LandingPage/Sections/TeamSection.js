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
import CardAvatar from "../../../components/Card/CardAvatar";
import CardBody from "components/Card/CardBody.js";
import Muted from "../../../components/Typography/Muted";

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
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
                xs={12}
                sm={8}
                md={8}
                className={
                  classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                }
            >
              <h2 className={classes.title}>Meridian Founders</h2>
              <h5 className={classes.description}>
                We're an experienced team working to bring modern web technology to professional training and development.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                    <img src={team1} alt="..." className={classes.img} />
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Paul Merrylees</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>"Lets discuss..."</h6>
                  </Muted>
                  <p className={classes.description}>
                    Paul has spent a number of years working as a facilitator of professional development.
                    His experiences led him to a unique perspective on the type of challenges
                    commonly faced by business managers. By focusing on providing the tools for managers to succeed,
                    he developed the original concept behind Meridian.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                    <img src={team2} alt="..." className={classes.img} />
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Jacob Hall</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>"What if we..."</h6>
                  </Muted>
                  <p className={classes.description}>
                    Jacob is a serial entrepreneur who has shipped several products. He is a small-details
                    thinker with a bias for action, and brings this dual focus to the project. A full-stack
                    web developer and product manager, he delivered the launch version of Meridian.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile plain>
                <CardAvatar profile plain>
                    <img src={team3} alt="..." className={classes.img} />
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Steve McQueen</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>"I propose we..."</h6>
                  </Muted>
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

/*  <div className={classes.section}>
      <h2 className={classes.title}>Meridian Team</h2>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={4}>
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
          <GridItem xs={12} sm={8} md={4}>
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
          <GridItem xs={12} sm={8} md={4}>
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
    </div> */