import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons icons
import Schedule from "@material-ui/icons/Schedule";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import Info from "../../components/Typography/Info";
// data link
import db from "../../db/modules";
import styles from "assets/jss/material-kit-react/views/modulePage.js";

import cardBlog1 from "assets/img/meeting.jpg";
import cardBlog2 from "assets/img/feedback.jpg";
import cardBlog3 from "assets/img/digitalmeeting.jpg";

const useStyles = makeStyles(styles);

export default function ModuleBrowse(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checked, setChecked] = useState([]);
    const { ...rest } = props;

    return (
        <div>
            <Header
                color="transparent"
                brand="Meridian"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "primary"
                }}
                {...rest}
            />
            <Parallax small filter image={require("assets/img/buildings.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <h4 className={classes.title}>Find a management tool</h4>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={6} md={6} lg={4}>
                                <Card blog>
                                    <CardHeader image>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img src={cardBlog1} alt={"Business Meeting"} />
                                            <div className={classes.cardTitleAbsolute}>
                                                {db[0].title}
                                            </div>
                                        </a>
                                        <div
                                            className={classes.coloredShadow}
                                            style={{
                                                backgroundImage: `url(${cardBlog1})`,
                                                opacity: "1"
                                            }}
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Info>
                                            <h6 className={classes.cardCategory}>{db[0].domain}</h6>
                                        </Info>
                                        <div className={classes.cardDescription}>
                                            {db[0].slides[0].whatYouGet}
                                        </div>
                                    </CardBody>
                                    <CardFooter plain>
                                        <div className={classes.author}>
                                            <span>2 tools saved</span>
                                        </div>
                                        <div className={classes.stats + " " + classes.mlAuto}>
                                            <Schedule />{db[0].duration}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={6} lg={4}>
                                <Card blog>
                                    <CardHeader image>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img src={cardBlog2} alt={"Business Meeting"} />
                                            <div className={classes.cardTitleAbsolute}>
                                                Give Meaningful Feedback
                                            </div>
                                        </a>
                                        <div
                                            className={classes.coloredShadow}
                                            style={{
                                                backgroundImage: `url(${cardBlog1})`,
                                                opacity: "1"
                                            }}
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Info>
                                            <h6 className={classes.cardCategory}>{db[0].domain}</h6>
                                        </Info>
                                        <div className={classes.cardDescription}>
                                            {db[0].slides[0].whatYouGet}
                                        </div>
                                    </CardBody>
                                    <CardFooter plain>
                                        <div className={classes.stats + " " + classes.mlAuto}>
                                            <Schedule />{db[0].duration}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={6} lg={4}>
                                <Card blog>
                                    <CardHeader image>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img src={cardBlog3} alt={"Business Meeting"} />
                                            <div className={classes.cardTitleAbsolute}>
                                                Deliver a Convincing Change Announcement
                                            </div>
                                        </a>
                                        <div
                                            className={classes.coloredShadow}
                                            style={{
                                                backgroundImage: `url(${cardBlog3})`,
                                                opacity: "1"
                                            }}
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Info>
                                            <h6 className={classes.cardCategory}>{db[0].domain}</h6>
                                        </Info>
                                        <div className={classes.cardDescription}>
                                            {db[0].slides[0].whatYouGet}
                                        </div>
                                    </CardBody>
                                    <CardFooter plain>
                                        <div className={classes.stats + " " + classes.mlAuto}>
                                            <Schedule />{db[0].duration}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </GridItem>
                        </GridContainer>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
