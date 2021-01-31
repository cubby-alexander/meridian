import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles, useTheme} from "@material-ui/core/styles";
// core components
import ModuleContext from "./ModuleContext";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import FormBuilder from "../../components/FormBuilder/FormBuilder.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// data link
import db from "../../db/modules";
import styles from "assets/jss/material-kit-react/views/modulePage.js";

const useStyles = makeStyles(styles);

export default function ModulePage(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checked, setChecked] = useState([]);
    const theme = useTheme();
    const { ...rest } = props;
    const module = db.find(modulePage => modulePage.slug === props.match.params.moduleSlug);
    const dynamicHtml = module.dynamicHtml;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

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
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.module}>
                                    <h3 className={classes.title}>{module.title}</h3>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                                <GridContainer justify="center">
                                    <h4>{module.slides[activeStep].title}</h4>
                                    <GridItem xs={12}>
                                        <div className={classes.description}>
                                            <FormBuilder html={module.slides[activeStep].htmlElements} slide={activeStep} />
                                        </div>
                                    </GridItem>
                                </GridContainer>
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <MobileStepper
                                    variant="progress"
                                    steps={module.slides.length}
                                    position="static"
                                    activeStep={activeStep}
                                    className={classes.root}
                                    nextButton={
                                        <Button size="small" onClick={handleNext} disabled={activeStep === module.slides.length - 1}>
                                            Next
                                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                        </Button>
                                    }
                                    backButton={
                                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                            Back
                                        </Button>
                                    }
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </ModuleContext.Provider>
    );
}

/*  <div
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