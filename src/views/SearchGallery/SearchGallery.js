import React, {useState, /* useEffect */} from "react";
/* import { API } from 'aws-amplify';
import { listModules } from "../../graphql/queries"; */
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
import GuideGallery from "./GuideGallery/GuideGallery";
import WorkbookGallery from "./WorkbookGallery/WorkbookGallery";
// data link
import db from "../../db/modules";
import users from "../../db/users";
import styles from "views/SearchGallery/styles/searchDisplay.js";

const useStyles = makeStyles(styles);

export default function SearchGallery(props) {
    const classes = useStyles();
    const [moduleSearchField, setModuleSearchField] = useState("");
    const [moduleSimpleSelect, setModuleSimpleSelect] = useState("");
    const [multipleSelect, setMultipleSelect] = useState([]);
    const [workbookSearchField, setWorkbookSearchField] = useState("");
    const [workbookSimpleSelect, setWorkbookSimpleSelect] = useState("")
    const { ...rest } = props;
    const categories = [];
    const modules = db;
    const workbooks = users[0].workbooks;

    /*

    useEffect(() => {
        fetchModules();
    }, []);

        async function fetchModules() {
        API.graphql({ query: listModules }).then((result) => {
            console.log(result, "fetchModules call")
            const cleanData = result.data.listModules.items.filter(item => item._deleted !== true);
            cleanData.forEach((module) => {
                module.dynamicHtml = JSON.parse(module.dynamicHtml);
                module.categories = JSON.parse(module.categories);
                module.slides = JSON.parse(module.slides);
            });
            console.log(cleanData);
            setModules(cleanData);
            if (cleanData.length !== 0) {
                setModuleData(cleanData[0])
            }
        }).catch((error) => {
            console.log(error)
        })
        console.log(modules, moduleData, "api data")
    }

    */

    db.map((module) => {
        module.categories.forEach((category) => {
            if (categories.includes(category)) {
               return null
            } else {
                categories.push(category)
            }
        })
        return null
    })

    function moduleSearch(data) {
        let filteredModuleResults = data;
        switch (moduleSimpleSelect) {
            case "alphabetical":
                filteredModuleResults.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "recency":
                filteredModuleResults.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
                break;
            case "popularity":
                break;
            default:
                break;
        }
        if (multipleSelect.length > 0) {
            filteredModuleResults = filteredModuleResults.filter((module) => module.categories.some(category => multipleSelect.includes(category)))
        }
        if (moduleSearchField.length > 0) {
            filteredModuleResults = filteredModuleResults.filter(module => module.title.toLowerCase().includes(moduleSearchField.toLowerCase()))
        }
        return filteredModuleResults;
    }

    function workbookSearch(data) {
        let filteredWorkbookResults = data;
        switch (workbookSimpleSelect) {
            case "alphabetical":
                filteredWorkbookResults.sort((a, b) => a.workbookTitle.localeCompare(b.workbookTitle));
                break;
            case "recency":
                filteredWorkbookResults.sort((a, b) => Date.parse(b.dateCreated) - Date.parse(a.dateCreated))
                break;
            case "popularity":
                break;
            default:
                break;
        }
        if (workbookSearchField.length > 0) {
            filteredWorkbookResults = filteredWorkbookResults.filter(workbook => workbook.workbookTitle.toLowerCase().includes(workbookSearchField.toLowerCase()))
        }
        return filteredWorkbookResults;
    }

    const handleModInput = event => {
        setModuleSearchField(event.target.value);
    }
    const handleModSimple = event => {
        setModuleSimpleSelect(event.target.value);
    };
    const handleWoInput = event => {
        setWorkbookSearchField(event.target.value);
    }
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
                    <div className={classNames(classes.container, classes.test)}>
                        <h4 className={classes.title}>Find the right management guide</h4>
                        <GridContainer justify="center" className={classes.moduleFilters}>
                            <GridItem xs={12} sm={5} md={5}>
                                <CustomInput
                                    labelText="Search for a guide"
                                    id="material"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Search />
                                            </InputAdornment>
                                        ),
                                        onChange: handleModInput
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
                                        {categories.map((category, key) => (
                                            <MenuItem
                                                classes={{
                                                    root: classes.selectMenuItem,
                                                    selected: classes.selectMenuItemSelectedMultiple
                                                }}
                                                value={category}
                                                key={key}
                                            >
                                                {category}
                                            </MenuItem>))
                                        }
                                    </Select>
                                </FormControl>
                            </GridItem>
                        </GridContainer>
                        <GuideGallery modules={moduleSearch(modules)} />
                    </div>
                    <div className={classNames(classes.container, classes.test)}>
                        <h4 className={classes.title}>Find one of your saved management workbooks</h4>
                        <GridContainer justify="center">
                            <GridItem xs={8}>
                                <CustomInput
                                    labelText="Search for a workbook"
                                    id="material"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Search />
                                            </InputAdornment>
                                        ),
                                        onChange: handleWoInput
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={4}>
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
                                            value="alphabetical"
                                        >
                                            Alphabetical
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </GridItem>
                        </GridContainer>
                        <WorkbookGallery workbooks={workbookSearch(workbooks)} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
