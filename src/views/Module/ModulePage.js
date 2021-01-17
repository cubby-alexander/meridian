import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {withStyles, makeStyles, useTheme} from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
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

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(activeStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        console.log(activeStep);
    };

    function grabHTML(htmlFromDB) {
        return <div className={classes.description} dangerouslySetInnerHTML={htmlFromDB}/>;
    }

    function renderDBtoHTML(htmlElements) {
        let htmlContent = null;
        return htmlElements.map((htmlElement) => {
            switch (htmlElement.typeOfElement) {
                case "header":
                    htmlContent = <h6>{htmlElement.content}</h6>;
                    break;
                case "paragraph":
                    htmlContent = <p>{htmlElement.content}</p>;
                    break;
                case "unordered list":
                    htmlContent = <ul>
                        {htmlElement.content.map((listItem) => {
                            return <li key={htmlElements.indexOf(htmlElement)}>{listItem}</li>
                        })}
                    </ul>;
                    break;
                case "ordered list":
                    htmlContent = <ol>
                        {htmlElement.content.map((listItem) => {
                            return <li key={htmlElements.indexOf(htmlElement)}>{listItem}</li>
                        })}
                    </ol>;
                    break;
                case "break":
                    htmlContent = <br />;
                    break;
                case "table":
                    htmlContent =
                        <TableContainer>
                            <h6 className={classes.tableTitle}>{htmlElement.tableTitle}</h6>
                                <Table>
                                    {parseTableArray(htmlElement.tableContent)}
                                </Table>
                        </TableContainer>;
                    break;
                case "checklist section":
                    console.log(htmlElement);
                    htmlContent =
                        <div>
                            <h6>{htmlElement.sectionTitle}</h6>
                            {htmlElement.checklists.map((list) => (
                                <div>
                                    <p>{list.listScope}</p>;
                                    {list.items.map((item) => (
                                        <FormControlLabel
                                            disabled
                                            control={
                                                <Checkbox
                                                    tabIndex={-1}
                                                    checked={true}
                                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                                    icon={<Check className={classes.uncheckedIcon} />}
                                                    classes={{
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }}
                                                />
                                            }
                                            classes={{
                                                label: classes.label,
                                                root: classes.labelRoot,
                                                disabled: classes.disabledCheckboxAndRadio
                                            }}
                                            label={item}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>;
                    break;
                default:
                    htmlContent = null;
                    break;
            }
            return htmlContent;
        })
    }

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

    function parseTableArray(arrayFromDB) {
        let tableHead = <TableHead>
            <TableRow>
                {arrayFromDB[0].map((cell) => (
                    <TableCell classes={{root: classes.tableHeader}}>{cell}</TableCell>
                ))}
            </TableRow>
        </TableHead>;
        let tableBody = <TableBody>
            {arrayFromDB.map((row, index) => (
                index !== 0 ?
                    (<TableRow>
                        {row.map((cell) => (
                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">{cell}</TableCell>
                        ))}
                    </TableRow>)
                : null
            ))}
        </TableBody>;
        return [tableHead, tableBody]
    }

    const pills = db[0].slides.map((slide) => (
        {
            tabButton: slide.shortTitle,
            tabContent: (
                <GridContainer justify="center">
                    <h4>slide.shortTitle}</h4>
                    <GridItem xs={12}>
                        <div className={classes.description}>
                            {grabHTML(db[0].slides[0].html)}
                        </div>
                    </GridItem>
                </GridContainer>
            )
        }
    ));

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
            <Parallax small filter image={require("assets/img/meeting.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.module}>
                                    <h3 className={classes.title}>{db[0].title}</h3>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                                <NavPills
                                    alignCenter
                                    color="primary"
                                    tabs={[
                                        {
                                            tabButton: db[0].slides[0].shortTitle,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <h4>{db[0].slides[0].shortTitle}</h4><GridItem xs={12}>
                                                    <div className={classes.description}>
                                                        {renderDBtoHTML(db[0].slides[0].htmlElements)}
                                                    </div>
                                                </GridItem>
                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: db[0].slides[1].shortTitle,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <h4>{db[0].slides[1].title}</h4>
                                                    <GridItem xs={12}>
                                                        <div className={classes.description}>
                                                            {renderDBtoHTML(db[0].slides[1].htmlElements)}
                                                        </div>
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: db[0].slides[2].shortTitle,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <h4>{db[0].slides[2].title}</h4>
                                                    <GridItem xs={12}>
                                                        <div className={classes.description}>
                                                            {renderDBtoHTML(db[0].slides[2].htmlElements)}
                                                        </div>
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },

                                        {
                                            tabButton: db[0].slides[3].shortTitle,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <h4>{db[0].slides[3].title}</h4>
                                                    <GridItem xs={12}>
                                                        <div className={classes.description}>
                                                            {renderDBtoHTML(db[0].slides[3].htmlElements)}
                                                            <h6 className={classes.tableTitle}>
                                                                The “What” and “Why” Behind the Change</h6>
                                                            <TableContainer>
                                                                <Table className={classes.table} aria-label="simple table">
                                                                    <TableHead >
                                                                        <TableRow>
                                                                            <TableCell classes={{root: classes.tableHeader}}>Talking Points</TableCell>
                                                                            <TableCell classes={{root: classes.tableHeader}} align="left">What I'll Say</TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                    <TableBody>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">Describe what's going to change</TableCell>
                                                                            <TableCell classes={{root: classes.tableInputRow}} align="left">
                                                                                <textarea
                                                                                    placeholder={"I want to call everyone's attention to..."}
                                                                                    className={classes.tableInput}
                                                                                />
                                                                            </TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">Explain why the change needs to happen</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">
                                                                                <textarea
                                                                                placeholder={"This is happening because..."}
                                                                                className={classes.tableInput}
                                                                            />
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    </TableBody>
                                                                </Table>
                                                            </TableContainer>
                                                        </div>
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },

                                        {
                                            tabButton: db[0].slides[4].shortTitle,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <h4>{db[0].slides[4].title}</h4>
                                                    <GridItem xs={12}>
                                                        <div className={classes.description}>
                                                            {renderDBtoHTML(db[0].slides[4].htmlElements)}
                                                        </div>
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },

                                        {
                                            tabButton: db[0].slides[5].shortTitle,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <h4>{db[0].slides[5].title}</h4>
                                                    <GridItem xs={12}>
                                                        <div className={classes.description}>
                                                            {renderDBtoHTML(db[0].slides[5].htmlElements)}
                                                        </div>
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },

                                        {
                                            tabButton: db[0].slides[6].shortTitle,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <h4>{db[0].slides[6].title}</h4>
                                                    <GridItem xs={12}>
                                                        <div className={classes.description}>
                                                            {renderDBtoHTML(db[0].slides[6].htmlElements)}
                                                        </div>
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },

                                        {
                                            tabButton: db[0].slides[7].shortTitle,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <h4>{db[0].slides[7].title}</h4>
                                                    <GridItem xs={12}>
                                                        <div className={classes.description}>
                                                            <p>Even with a strong change announcement, it’s crucial to keep
                                                                the change top of mind for staff in the following days and
                                                                weeks. To help reinforce or clarify any information from
                                                                your announcement, follow up with written resources and
                                                                set ongoing communication channels for staff to discuss
                                                                the change.</p>

                                                                <p>Select one or two steps from the checklists below to follow up after the announcement.
                                                                You can avoid these two pitfalls and win early support for the
                                                                change by crafting just a few key talking points to address these
                                                                concerns for your next change announcement.</p>
                                                            <br />
                                                            <h6 className={classes.tableTitle}>Next Steps to Continue Staff Engagement with the Change</h6>
                                                            <h6>Provide written resources</h6>
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
                                                        </div>
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },

                                        {
                                            tabButton: db[0].slides[8].shortTitle,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <h4>{db[0].slides[8].title}</h4>
                                                    <GridItem xs={12}>
                                                        <div className={classes.description}>
                                                            <p>Announcing a change to staff is a key step to getting everyone
                                                                to start adapting to a new way of working, but announcements
                                                                often fail to get buy in for two key reasons:
                                                                <ul>
                                                                    <li>The message doesn’t make staff feel personally
                                                                        invested in the change</li>
                                                                    <li>It isn’t clear how staff will support the change
                                                                        in their day-to-day</li>
                                                                </ul>
                                                                You can avoid these two pitfalls and win early support for the
                                                                change by crafting just a few key talking points to address these
                                                                concerns for your next change announcement.</p>
                                                        </div>
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        }
                                    ]}
                                />
                            </GridItem>

                            <GridItem xs={12}>
                                <MobileStepper
                                    variant="progress"
                                    steps={db[0].slides.length}
                                    position="static"
                                    activeStep={activeStep}
                                    className={classes.root}
                                    nextButton={
                                        <Button size="small" onClick={handleNext} disabled={activeStep === db[0].slides.length - 1}>
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
    );
}
