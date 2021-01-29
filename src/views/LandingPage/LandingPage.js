import React, {useRef} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import InquireSection from "./Sections/InquireSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const {...rest} = props;
  const infoRef = useRef(null);

  function infoScroll() {
    infoRef.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Meridian"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "primary",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/live-bg.jpg")} >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={7}>
              <h1 className={classes.title}>
                Do better managers improve your business?
              </h1>
              <h3>(Rhetorical Question)</h3>
              <h4>
                They steer your business every day. Are they prepared for the
                challenges they face? Meridian helps managers tackle situations
                that are difficult to train for.
              </h4>
              <br />
              <GridContainer>
                <GridItem xs={5} sm={4} md={4}>
                  <Button
                    color="primary"
                    size="md"
                    onClick={infoScroll}
                  >
                    Learn More
                  </Button>
                </GridItem>

                <GridItem xs={4} sm={3} md={4}>
                  <Button
                    color="danger"
                    size="md"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try For Free
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div ref={infoRef}>
            <ProductSection />
          </div>
          <TeamSection />
          <InquireSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
