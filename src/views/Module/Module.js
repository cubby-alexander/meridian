import React, {useRef, useState, useContext, useEffect} from "react";
import {useReactToPrint} from "react-to-print";
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
import Print from "@material-ui/icons/Print";
import Email from "@material-ui/icons/Email";
import Button from "../../components/CustomButtons/Button";

// data link
import db from "../../db/modules";

import styles from "views/Module/styles/module.js";
import ProgressBar from "./ProgressBar/ProgressBar";

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

    const handlePrint = useReactToPrint({
        content: () => printComponentRef.current,
    });

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
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={4} md={4}>
                                <div className={classes.module}>
                                    <h3 className={classes.title}>{module.title}</h3>
                                </div>
                                <Hidden xsDown>
                                    <ol>
                                        {module.slides.map((slide, key) => (
                                            <li
                                                onClick={e => (setActiveStep(key))}
                                                key={key}
                                                className={(key === activeStep) ? classNames(classes.contentsListItem, classes.contentsListItemActive) : classes.contentsListItem}
                                            >
                                                {slide.shortTitle}
                                            </li>
                                        ))}
                                    </ol>
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
                                                ref={printComponentRef}
                                            />
                                            {(activeStep === module.slides.length - 1) ? (<div>
                                                <Button
                                                    size="sm"
                                                    color="primary"
                                                    onClick={handlePrint}
                                                >
                                                    <Print/>
                                                </Button>

                                                <Button size="sm" color="primary">
                                                    <Email/>
                                                </Button>
                                            </div>): null}
                                        </div>
                                    </GridItem>
                                </GridContainer>
                            </GridItem>
                            <GridItem xs={12} sm={8}>
                                <ProgressBar
                                    length={module.slides.length}
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

/*

    const [checked, setChecked] = useState([]);

    const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };




<div
                                                                className={
                                                                    classes.checkboxAndRadio +
                                                                    " " +
                                                                    classes.checkboxAndRadioHorizontal
                                                                }
                                                            >
                                                                <FormControlLabel control={
                                                                    <Checkbox
                                                                        tabIndex={-1}
                                                                        onClick={(e) => handleToggle(22)}
                                                                        checked={checked.indexOf(22) !== -1}
                                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                                        classes={{
                                                                            checked: classes.checked,
                                                                            root: classes.checkRoot
                                                                        }}
                                                                    />
                                                                }
                                                                                  label={"Email summary"}
                                                                                  classes={{ label: classes.label, root: classes.labelRoot }}
                                                                />
                                                            </div>
                                                            <div
                                                                className={
                                                                    classes.checkboxAndRadio +
                                                                    " " +
                                                                    classes.checkboxAndRadioHorizontal
                                                                }
                                                            >
                                                                <FormControlLabel control={
                                                                    <Checkbox
                                                                        tabIndex={-1}
                                                                        onClick={(e) => handleToggle(23)}
                                                                        checked={checked.indexOf(23) !== -1 ? true : false}
                                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                                        classes={{
                                                                            checked: classes.checked,
                                                                            root: classes.checkRoot
                                                                        }}
                                                                    />
                                                                }
                                                                                  label={"FAQ Documents"}
                                                                                  classes={{ label: classes.label, root: classes.labelRoot }}
                                                                                  />
                                                            </div>

                                                            <div
                                                                className={
                                                                    classes.checkboxAndRadio +
                                                                    " " +
                                                                    classes.checkboxAndRadioHorizontal
                                                                }
                                                            >
                                                                <FormControlLabel control={
                                                                    <Checkbox
                                                                        tabIndex={-1}
                                                                        onClick={(e) => handleToggle(24)}
                                                                        checked={checked.indexOf(24) !== -1 ? true : false}
                                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                                        classes={{
                                                                            checked: classes.checked,
                                                                            root: classes.checkRoot
                                                                        }}
                                                                    />
                                                                }
                                                                                  label={"Action Checklists"}
                                                                                  classes={{ label: classes.label, root: classes.labelRoot }}
                                                                />
                                                            </div>
                                                            <h6>Set ongoing channels to discuss the change</h6>
                                                            <div
                                                                className={
                                                                    classes.checkboxAndRadio +
                                                                    " " +
                                                                    classes.checkboxAndRadioHorizontal
                                                                }
                                                            >
                                                                <FormControlLabel control={
                                                                    <Checkbox
                                                                        tabIndex={-1}
                                                                        onClick={(e) => handleToggle(25)}
                                                                        checked={checked.indexOf(25) !== -1}
                                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                                        classes={{
                                                                            checked: classes.checked,
                                                                            root: classes.checkRoot
                                                                        }}
                                                                    />
                                                                }
                                                                                  label={"Dedicated itme during team meetings"}
                                                                                  classes={{ label: classes.label, root: classes.labelRoot }}
                                                                />
                                                            </div>
                                                            <div
                                                                className={
                                                                    classes.checkboxAndRadio +
                                                                    " " +
                                                                    classes.checkboxAndRadioHorizontal
                                                                }
                                                            >
                                                                <FormControlLabel control={
                                                                    <Checkbox
                                                                        tabIndex={-1}
                                                                        onClick={(e) => handleToggle(26)}
                                                                        checked={checked.indexOf(26) !== -1 ? true : false}
                                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                                        classes={{
                                                                            checked: classes.checked,
                                                                            root: classes.checkRoot
                                                                        }}
                                                                    />
                                                                }
                                                                                  label={"Open office hours"}
                                                                                  classes={{ label: classes.label, root: classes.labelRoot }}
                                                                />
                                                            </div>

                                                            <div
                                                                className={
                                                                    classes.checkboxAndRadio +
                                                                    " " +
                                                                    classes.checkboxAndRadioHorizontal
                                                                }
                                                            >
                                                                <FormControlLabel control={
                                                                    <Checkbox
                                                                        tabIndex={-1}
                                                                        onClick={(e) => handleToggle(27)}
                                                                        checked={checked.indexOf(27) !== -1 ? true : false}
                                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                                        classes={{
                                                                            checked: classes.checked,
                                                                            root: classes.checkRoot
                                                                        }}
                                                                    />
                                                                }
                                                                                  label={"Individual check-ins"}
                                                                                  classes={{ label: classes.label, root: classes.labelRoot }}
                                                                />
                                                            </div>

                                                            <div
                                                                className={
                                                                    classes.checkboxAndRadio +
                                                                    " " +
                                                                    classes.checkboxAndRadioHorizontal
                                                                }
                                                            >
                                                                <FormControlLabel control={
                                                                    <Checkbox
                                                                        tabIndex={-1}
                                                                        onClick={(e) => handleToggle(28)}
                                                                        checked={checked.indexOf(28) !== -1 ? true : false}
                                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                                        classes={{
                                                                            checked: classes.checked,
                                                                            root: classes.checkRoot
                                                                        }}
                                                                    />
                                                                }
                                                                                  label={"Set up specific channels using your ogranization's virtual chat platform"}
                                                                                  classes={{ label: classes.label, root: classes.labelRoot }}
                                                                />
                                                            </div>


 */