import React, {useRef, useState, useContext, useEffect} from "react";
import {API} from "aws-amplify";
import {getModule} from "graphql/queries";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import ApplicationContext from "../../ApplicationContext";
import ModuleContext from "./ModuleContext";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Slide from "./Slide/Slide.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Hidden from "@material-ui/core/Hidden";
import Button from "../../components/CustomButtons/Button";

// data link
import db from "../../db/modules";

import styles from "views/Module/styles/module.js";
import ProgressBar from "./ProgressBar/ProgressBar";
import WorkbookPresentation from "./WorkbookPresentation/WorkbookPresentation";

const useStyles = makeStyles(styles);

async function matchModule(id) {
    API.graphql({query: getModule, variables: {id: id}}).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
}

export default function Module(props) {
    const context = useContext(ApplicationContext);
    const [activeStep, setActiveStep] = useState(0);
    const [presentation, setPresentation] = useState(false);
    const printComponentRef = useRef();
    const { ...rest } = props;
    const classes = useStyles();
    const module = db.find(modulePage => modulePage.slug === props.match.params.moduleSlug);
    let dynamicHtml;
    let currentWorkbook;

    useEffect(() => {
        if (activeStep === 0) {
            window.scrollTo(0, 0)
        } else {
            window.scrollTo(0, 200)
        }
    })

    if (props.match.params.workbook !== undefined) {
        currentWorkbook = context.user.workbooks.find(workbook => workbook.workbookSlug === props.match.params.workbook);
        dynamicHtml = currentWorkbook.dynamicHtml;
    } else {
        dynamicHtml = module.dynamicHtml;
    }

    console.log("workbook", context);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <ModuleContext.Provider value={dynamicHtml}>
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
            <Parallax small filter image={require(`assets/img${module.image}`)} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <WorkbookPresentation
                            presentation={presentation}
                            close={() => setPresentation(false)}
                            content={module.slides[module.slides.length - 1]}
                            dynamicValues={dynamicHtml}
                        />
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={4} md={4}>
                                <div className={classes.module}>
                                    <h3 className={classes.title}>{module.title}</h3>
                                </div>
                                <Hidden xsDown>
                                    <ol>
                                        {module.slides.map((slide, key) => {
                                            if (key !== module.slides.length - 1) {
                                                return <li
                                                    onClick={e => (setActiveStep(key))}
                                                    key={key}
                                                    className={(key === activeStep) ? classNames(classes.contentsListItem, classes.contentsListItemActive) : classes.contentsListItem}
                                                >
                                                    {slide.shortTitle}
                                                </li>
                                            }
                                        })}
                                    </ol>
                                    <Button
                                        onClick={() => setPresentation(true)}
                                        size="sm"
                                        color="primary"
                                    >Open Workbook</Button>
                                </Hidden>
                            </GridItem>
                            <GridItem xs={12} sm={8} md={8} className={classes.slideWrapper}>
                                <GridContainer justify="center">
                                    <GridItem xs={12}>
                                        <div className={classes.description}>
                                            <Slide
                                                title={module.slides[activeStep].title}
                                                html={module.slides[activeStep].htmlElements}
                                                slide={activeStep}
                                            />
                                        </div>
                                    </GridItem>
                                </GridContainer>
                            </GridItem>
                            <Hidden xsDown>
                                <GridItem xs={12} sm={4} />
                            </Hidden>
                            <GridItem xs={12} sm={8}>
                                <ProgressBar
                                    length={module.slides.length - 1}
                                    step={activeStep}
                                    handleNext={e => (handleNext())}
                                    handleBack={e => (handleBack())}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>

                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </ModuleContext.Provider>
    );
}