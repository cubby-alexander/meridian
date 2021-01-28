import React, {useState} from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// @material-ui/icons icons
import Schedule from "@material-ui/icons/Schedule";
import Search from "@material-ui/icons/Search";
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
import CustomInput from "../../components/CustomInput/CustomInput";
// data link
import db from "../../db/modules";
import styles from "assets/jss/material-kit-react/views/modulePage.js";

import cardBlog1 from "assets/img/meeting.jpg";

const useStyles = makeStyles(styles);

export default function ModuleBrowse(props) {
    const classes = useStyles();
    const [simpleSelect, setSimpleSelect] = React.useState("");
    const [multipleSelect, setMultipleSelect] = React.useState([]);
    const { ...rest } = props;

    console.log(cardBlog1);

    const handleSimple = event => {
        setSimpleSelect(event.target.value);
    };
    const handleMultiple = event => {
        setMultipleSelect(event.target.value);
    };

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
                        <h4 className={classes.title}>Browse for the right management tool</h4>
                        <GridContainer justify="left">
                            <GridItem xs={12} sm={5} md={5}>
                                <CustomInput
                                    labelText="Search for a tool"
                                    id="material"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Search />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={4} sm={3}>
                                <FormControl fullWidth className={classes.selectFormControl}>
                                    <InputLabel
                                        htmlFor="simple-select"
                                        className={classes.selectLabel}
                                    >
                                        Sort List
                                    </InputLabel>
                                    <Select
                                        MenuProps={{
                                            className: classes.selectMenu
                                        }}
                                        classes={{
                                            select: classes.select
                                        }}
                                        value={simpleSelect}
                                        onChange={handleSimple}
                                        inputProps={{
                                            name: "simpleSelect",
                                            id: "simple-select"
                                        }}
                                    >
                                        <MenuItem
                                            disabled
                                            classes={{
                                                root: classes.selectMenuItem
                                            }}
                                        >
                                            Sort By
                                        </MenuItem>
                                        <MenuItem
                                            classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelected
                                            }}
                                            value="2"
                                        >
                                            Most Recent
                                        </MenuItem>
                                        <MenuItem
                                            classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelected
                                            }}
                                            value="3"
                                        >
                                            Most Popular
                                        </MenuItem>
                                        <MenuItem
                                            classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelected
                                            }}
                                            value="4"
                                        >
                                            Alphabetical
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </GridItem>
                            <GridItem xs={8} sm={4}>
                                <FormControl fullWidth className={classes.selectFormControl}>
                                    <InputLabel
                                        htmlFor="multiple-select"
                                        className={classes.selectLabel}
                                    >
                                        Filter List
                                    </InputLabel>
                                    <Select
                                        multiple
                                        value={multipleSelect}
                                        onChange={handleMultiple}
                                        MenuProps={{
                                            className: classes.selectMenu,
                                            classes: { paper: classes.selectPaper }
                                        }}
                                        classes={{ select: classes.select }}
                                        inputProps={{
                                            name: "multipleSelect",
                                            id: "multiple-select"
                                        }}
                                    >
                                        <MenuItem
                                            disabled
                                            classes={{
                                                root: classes.selectMenuItem
                                            }}
                                        >
                                            Categories to display
                                        </MenuItem>
                                        <MenuItem
                                            classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelectedMultiple
                                            }}
                                            value="2"
                                        >
                                            Leadership
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                            {db.map((result) => (
                                <GridItem xs={12} sm={6} md={4} lg={4}>
                                <Card blog>
                                    <CardHeader image>
                                        <Link to={`module/${result.slug}`}>
                                            <img src={require(`../../assets/img${result.image}`)} alt={"Business Meeting"}/>
                                            <div className={classes.cardTitleAbsolute}>
                                                {result.title}
                                            </div>
                                        </Link>
                                        <div
                                            className={classes.coloredShadow}
                                            style={{
                                                backgroundImage: `url(${result.image})`,
                                                opacity: "1"
                                            }}
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Info>
                                            <h6 className={classes.cardCategory}>{result.domain}</h6>
                                        </Info>
                                        <div className={classes.cardDescription}>
                                            {result.slides[0].whatYouGet}
                                        </div>
                                    </CardBody>
                                    <CardFooter plain>
                                        <div className={classes.author}>
                                            <span>2 tools saved</span>
                                        </div>
                                        <div className={classes.stats + " " + classes.mlAuto}>
                                            <Schedule/>{result.duration}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </GridItem>))}
                        </GridContainer>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
