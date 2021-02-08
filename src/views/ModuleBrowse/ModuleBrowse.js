import React, {useState} from "react";
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
import users from "../../db/users";
import styles from "assets/jss/material-kit-react/views/moduleBrowse.js";
import WorkbookGallery from "./WorkbookGallery/WorkbookGallery";

const useStyles = makeStyles(styles);

export default function ModuleBrowse(props) {
    const classes = useStyles();
    const [moduleSimpleSelect, setModuleSimpleSelect] = useState("");
    const [multipleSelect, setMultipleSelect] = useState([]);
    const [workbookSimpleSelect, setWorkbookSimpleSelect] = useState("")
    const { ...rest } = props;
    const categories = [];
    const modules = db;

    db.map((module) => {
        module.categories.forEach((category) => {
            if (categories.includes(category)) {
               return null
            } else {
                categories.push(category)
            }
        })
    })
    function dataOrdering(data) {
        let filteredData;
        if (moduleSimpleSelect === "alphabetical") {
            data.sort((a, b) => a.title.localeCompare(b.title));
        }
        if (multipleSelect.length > 0) {
            filteredData = data.filter((module) => module.categories.some(category => multipleSelect.includes(category)))
            return filteredData;
        } else {
            return data
        }
    }

    const handleModSimple = event => {
        setModuleSimpleSelect(event.target.value);
    };
    const handleWoSimple = event => {
        setWorkbookSimpleSelect(event.target.value);
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
            <Parallax small filter image={require("assets/img/examples/city.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <h4 className={classes.title}>Find the right management guide</h4>
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
                                        value={moduleSimpleSelect}
                                        onChange={handleModSimple}
                                        inputProps={{
                                            name: "moduleSimpleSelect",
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
                                        {categories.map((category) => (
                                            <MenuItem
                                                classes={{
                                                    root: classes.selectMenuItem,
                                                    selected: classes.selectMenuItemSelectedMultiple
                                                }}
                                                value={category}
                                            >
                                                {category}
                                            </MenuItem>))
                                        }
                                    </Select>
                                </FormControl>
                            </GridItem>
                        </GridContainer>
                        <ModuleGallery modules={dataOrdering(modules)} />
                    </div>
                </div>

                <div>
                    <div className={classes.container}>
                        <h4 className={classes.title}>Find one of your saved management workbooks</h4>
                        <GridContainer justify="center">
                            <GridItem xs={8} sm={8} md={5}>
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
                            <GridItem xs={4} sm={4} md={2}>
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
                                        value={workbookSimpleSelect}
                                        onChange={handleWoSimple}
                                        inputProps={{
                                            name: "workbookSimpleSelect",
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
                        </GridContainer>
                        <WorkbookGallery workbooks={users[0].workbooks} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
