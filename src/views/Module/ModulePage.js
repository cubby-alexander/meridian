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

    const dumbArray = [
        ["Talking Points", "What I'll Say"],
        ["Describe what's going to change", `"I want to call everyone's attention to..."`],
        ["Explain why the change needs to happen", `"This is happening because we need a more efficient system that can 
        give us a better overview of who can work where.`]
    ];

    const sillyArray = [
        [`Mark an "X" by the benefit I'll share`, `Benefit`, `What I'll Say`],
        [``, `Improved patient care`, `"Implementing a different call light system will help us get to patients faster when they’re in need."`],
        [`X`, `Long term financial health`, `"I know this may be a painful reality but saving costs now will help us avoid worse situations down the road."`],
        [``, `Work-life balance`, `"Our hope is that the new scheduling system will make it easier for everyone to find the shifts that will compliment your individual needs."`],
        [``, `Opportunity to lead`, `"As part of this change, there are a few different projects some of you may be interested in leading."`],
        [``, `Training for a new skill`, `"There’s an opportunity for you to participate in additional training and gain new skills."`],
        [``, `Improved workflow`, `"The new scheduling system will make it easier and faster for you to sign up for shifts or swap shifts when necessary."`]
    ];

    const simpleArray = [
        [`Talking Points`, `What I'll Say`],
        [`Explain what they need to start doing`, `"To make this change happen, we’re going to have to start…"`],
        [`Tell them what to stop doing`, `"This change also means stopping…"`],
        [`Describe what to continue doing`, `"We’re going to continue to…"`]
    ];

    const ludicrousArray = [
        [`Potential Question or Concern`, `What I'll Say`],
        [`What is the timeline for the change?`, `"You can expect to see things changing in the next…"`],
        [`When can staff expect more information?`, `I’ll have more updates to come around…"`],
        [`How will the change affect existing workloads?`, `"In terms of your current workload, this change will…"`],
        [`What kinds of training or knowledge will staff receive?`, `"To make this change happen, we’ll offer training and resources on…"`],
        [`Who should staff turn to if they need help?`, `"If you need support as we implement this new change, you can contact…"`],
        [`How can staff provide input or feedback on the change?`, `"You can provide input or feedback on how things are going by reaching out to…"`],
        [`How will adoption of the change be tracked?`, `"We’ve identified the following metrics to track how adoption of the change is going…"`]
    ];

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
                                                        {grabHTML(db[0].slides[0].html)}
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
                                                            {grabHTML(db[0].slides[1].html)}
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
                                                            <p>Prepare focused talking points with the “what,” “why,” and
                                                                “how” behind the change to deliver a change announcement
                                                                that will get your team’s buy-in early on.
                                                            </p>
                                                            <h6 className={classes.tableTitle}>The "What" and "Why" Behind the Change</h6>
                                                            <TableContainer>
                                                                <Table className={classes.table} aria-label="simple table">
                                                                    {parseTableArray(dumbArray)}
                                                                </Table>
                                                            </TableContainer>
                                                            <br />
                                                            <h6 className={classes.tableTitle}>How the change will benefit staff</h6>
                                                            <TableContainer>
                                                                <Table className={classes.table} aria-label="simple table">
                                                                    {parseTableArray(sillyArray)}
                                                                </Table>
                                                            </TableContainer>

                                                            <br />
                                                            <h6 className={classes.tableTitle}>How the change will impact the team</h6>
                                                            <TableContainer>
                                                                <Table className={classes.table} aria-label="simple table">
                                                                    {parseTableArray(simpleArray)}
                                                                </Table>
                                                            </TableContainer>

                                                            <br />
                                                            <h6 className={classes.tableTitle}>Answers to potential questions</h6>
                                                            <TableContainer>
                                                                <Table className={classes.table} aria-label="simple table">
                                                                    {parseTableArray(ludicrousArray)}
                                                                </Table>
                                                            </TableContainer>
                                                            <br />
                                                            <h6>Next steps to continue staff engagement with the change</h6>
                                                            <p>Provide written resources</p>
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
                                                                label="E-Mail Summary"
                                                                />
                                                            <p>Set ongoing channels to discuss the change</p>
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
                                                                    disabled: classes.disabledCheckboxAndRadio,
                                                                    root: classes.labelRoot,
                                                                }}
                                                                label="Dedicated time during team meetings"
                                                            />
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
                                                            <p>Managers often announce what’s going to change without explaining
                                                                the why behind it. Staff are more likely to feel a sense of purpose
                                                                and buy-in to the change if they know why it’s needed for the
                                                                organization's success. This also prevents staff from filling in
                                                                the blanks with their own assumptions. </p>

                                                                <p>Use the prompts in the first column of the table below to
                                                                    customize the “what” and “why” behind the change.</p>
                                                            <br />
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
                                                            <br />
                                                            <p>Tip: Before you announce the change to your staff, make sure
                                                                you fully understand the change yourself. As you’re going
                                                                through the tool builder, pause if you frequently find
                                                                yourself unable to answer the prompts. This means you may
                                                                have to go back to your manager or point person for the
                                                                change to help with your announcement.</p>
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
                                                            <p>To boost your chances of making the “why” stick with your
                                                                team, call out a benefit of the change that will resonate
                                                                with your staff. When staff know what’s in it for them,
                                                                they’ll be more likely to stay personally motivated to
                                                                follow the change.</p>

                                                            <p>Mark an “X” by one or two of the staff benefits in the first
                                                                column of the table below and customize what you’ll say
                                                                in the right-hand column. If helpful, add your own option.</p>
                                                            <br />
                                                            <h6 className={classes.tableTitle}>How the change will benefit staff</h6>
                                                            <TableContainer>
                                                                <Table className={classes.table} aria-label="simple table">
                                                                    <TableHead >
                                                                        <TableRow>
                                                                            <TableCell classes={{root: classes.tableHeader}}>Mark an "X" by the benefit I'll share</TableCell>
                                                                            <TableCell classes={{root: classes.tableHeader}}>Benefit</TableCell>
                                                                            <TableCell classes={{root: classes.tableHeader}} align="left">What I'll Say</TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                    <TableBody>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row"></TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">Improved patient care</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"Implementing a different call light system will help us get to patients faster when they’re in need."</TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">X</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">Long term financial health</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"I know this may be a painful reality but saving costs now will help us avoid worse situations down the road."</TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row"></TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">Work-life balance</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"Our hope is that the new scheduling system will make it easier for everyone to find the shifts that will compliment your individual needs."</TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row"></TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">Opportunity to lead</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"As part of this change, there are a few different projects some of you may be interested in leading."</TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row"></TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">Training for a new skill</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"There’s an opportunity for you to participate in additional training and gain new skills."</TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row"></TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">Improved workflow</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"The new scheduling system will make it easier and faster for you to sign up for shifts or swap shifts when necessary."</TableCell>
                                                                        </TableRow>
                                                                    </TableBody>
                                                                </Table>
                                                            </TableContainer>
                                                            <br />
                                                            <p>Tip: Consider bringing additional evidence or data to back
                                                                up your benefit, if possible. Examples include data from
                                                                your department or the organization, or anecdotes from
                                                                past changes. </p>
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
                                                            <p>Knowing how the change specifically impacts your team will
                                                                make it feel less abstract and more grounded in their day-to-day.
                                                                Explain what the change will look and feel like for your
                                                                team by clarifying any work they’ll need to start, stop,
                                                                and continue doing.</p>

                                                            <p>Review the table below and fill in according to your
                                                                organization’s change.</p>
                                                            <br />
                                                            <h6 className={classes.tableTitle}>How the change will impact the team</h6>
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
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">Explain what they need to start doing</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"To make this change happen, we’re going to have to start…"</TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">Tell them what to stop doing</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"This change also means stopping…"</TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">Describe what to continue doing</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"We’re going to continue to…"</TableCell>
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
                                            tabButton: db[0].slides[6].shortTitle,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <h4>{db[0].slides[6].title}</h4>
                                                    <GridItem xs={12}>
                                                        <div className={classes.description}>
                                                            <p>Even after articulating the “why” and “how” behind the change,
                                                                staff may still have lingering questions or concerns that
                                                                come up as they take everything in. Preparing for their
                                                                top anticipated questions ahead of time allows you to more
                                                                deeply engage with your team and get ahead of any potential
                                                                rumors.</p>

                                                            <p>Customize the table below with potential questions or concerns
                                                                your staff may have in response to your announcement, along
                                                                with your response. Add your own questions, if helpful.</p>
                                                            <br />
                                                            <h6 className={classes.tableTitle}>Answers to potential questions</h6>
                                                            <TableContainer>
                                                                <Table className={classes.table} aria-label="simple table">
                                                                    <TableHead >
                                                                        <TableRow>
                                                                            <TableCell classes={{root: classes.tableHeader}}>Potential Question or Concern</TableCell>
                                                                            <TableCell classes={{root: classes.tableHeader}} align="left">What I'll Say</TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                    <TableBody>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">What is the timeline for the change?</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"You can expect to see things changing in the next…"</TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">When can staff expect more information?</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">I’ll have more updates to come around…"</TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">How will the change affect existing workloads?</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"In terms of your current workload, this change will…"</TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">What kinds of training or knowledge will staff receive?</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"To make this change happen, we’ll offer training and resources on…"</TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">Who should staff turn to if they need help?</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"If you need support as we implement this new change, you can contact…"</TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">How can staff provide input or feedback on the change?</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"You can provide input or feedback on how things are going by reaching out to…"</TableCell>
                                                                        </TableRow>
                                                                        <TableRow >
                                                                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">How will adoption of the change be tracked?</TableCell>
                                                                            <TableCell classes={{root: classes.tableRow}} align="left">"We’ve identified the following metrics to track how adoption of the change is going…"</TableCell>
                                                                        </TableRow>
                                                                    </TableBody>
                                                                </Table>
                                                            </TableContainer>
                                                            <br />
                                                            <ol>
                                                                <li> If possible, source questions directly from key members
                                                                    of your team as you’re planning your announcement.</li>

                                                                <li> If you get a question you don’t know the answer to,
                                                                    be honest and let them know. It’s better to say you’ll
                                                                    follow up than try to answer the question without
                                                                    absolute certainty.</li>

                                                                <li> If you’re delivering your announcement virtually, using
                                                                    the chat function can help encourage quieter members
                                                                    of your team to participate. You can also save the chat
                                                                    to reference questions that don’t get answered during
                                                                    the announcement.</li>
                                                            </ol>
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
