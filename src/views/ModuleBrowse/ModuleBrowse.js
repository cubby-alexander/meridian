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
import Search from "@material-ui/icons/Search";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "../../components/CustomInput/CustomInput";
import ModuleGallery from "./ModuleGallery/ModuleGallery";
// data link
import db from "../../db/modules";
import styles from "assets/jss/material-kit-react/views/moduleBrowse.js";

const useStyles = makeStyles(styles);

export default function ModuleBrowse(props) {
    const classes = useStyles();
    const [simpleSelect, setSimpleSelect] = useState("");
    const [multipleSelect, setMultipleSelect] = useState([]);
    const { ...rest } = props;

    console.log(simpleSelect);

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
                        <h4 className={classes.title}>Find the right management tool</h4>
                        <GridContainer justify="center">
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
                            <GridItem xs={4} sm={3} md={2}>
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
                                            value="recency"
                                        >
                                            Most Recent
                                        </MenuItem>
                                        <MenuItem
                                            classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelected
                                            }}
                                            value="popularity"
                                        >
                                            Most Popular
                                        </MenuItem>
                                        <MenuItem
                                            classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelected
                                            }}
                                            value="alphabetical"
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
                                            value="leadership"
                                        >
                                            Leadership
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </GridItem>
                        </GridContainer>
                        <ModuleGallery modules={db} />
                    </div>
                </div>

                <div>
                    <div className={classes.container}>
                        <h4 className={classes.title}>Find the right management tool</h4>
                        <GridContainer justify="center">
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
                            <GridItem xs={4} sm={3} md={2}>
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
                                            value="recency"
                                        >
                                            Most Recent
                                        </MenuItem>
                                        <MenuItem
                                            classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelected
                                            }}
                                            value="popularity"
                                        >
                                            Most Popular
                                        </MenuItem>
                                        <MenuItem
                                            classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelected
                                            }}
                                            value="alphabetical"
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
                                            value="leadership"
                                        >
                                            Leadership
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </GridItem>
                        </GridContainer>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
