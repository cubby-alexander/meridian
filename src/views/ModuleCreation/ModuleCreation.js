import React, {useState, useEffect} from "react";
import Amplify, { API } from 'aws-amplify';
import { listModules } from "../../graphql/queries";
import { createModule as createModuleMutation, deleteModule as deleteModuleMutation} from "../../graphql/mutations";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove"

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import db from "../../db/modules";
import styles from "assets/jss/material-kit-react/views/moduleBrowse.js";
import Button from "../../components/CustomButtons/Button";

const useStyles = makeStyles(styles);

const initialModuleData = {
    title: "How to Say \"No\" to Your Boss",
    slug: "how-to-say-no-to-your-boss",
    domain: "management",
    duration: "9 minutes",
}

export default function ModuleCreation(props) {
    const classes = useStyles();
    const [modules, setModules] = useState([]);
    const [moduleData, setModuleData] = useState(initialModuleData);
    const { ...rest } = props;

    useEffect(() => {
        fetchModules();
    }, []);

    console.log(modules, "modules", moduleData, "moduleData");

    async function fetchModules() {
        const apiData = await API.graphql({ query: listModules });
        console.log(apiData.data.listModules)
        setModules(apiData.data.listModules.items)
    }

    async function createModule() {
        console.log("Creating...")
        const outcome = await API.graphql(
            {
                query: createModuleMutation,
                variables: {
                    input: moduleData } });
        console.log(outcome);
        setModules([ ...modules, moduleData ]);
        setModuleData(initialModuleData);
    }

    async function deleteModule({ id }) {
        const newModulesArray = modules.filter(module => module.id !== id);
        setModules(newModulesArray);
        await API.graphql({ query: deleteModuleMutation, variables: { input: { id } }});
    }

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
                        <h4 className={classes.title}>Create a module</h4>
                    <GridContainer justify="center">
                        <GridItem xs={12}>
                            <Button size="sm" round justIcon color="primary" onClick={createModule}>
                                <AddIcon />
                            </Button>
                            <Button size="sm" round justIcon color="rose" onClick={() => deleteModule(modules[0])}>
                                <RemoveIcon />
                            </Button>
                        </GridItem>
                        <GridItem xs={12}>
                        <input
                            onChange={e => setModuleData({...moduleData, 'title': e.target.value})}
                            value={moduleData.title}
                            placeholder="Title"
                        />
                        </GridItem>
                        <GridItem xs={12}>
                        <input
                            onChange={e => setModuleData({...moduleData, 'slug': e.target.value})}
                            value={moduleData.slug}
                            placeholder="Slug"
                        />
                        </GridItem>
                                <GridItem xs={12}>
                        <input
                            onChange={e => setModuleData({...moduleData, 'domain': e.target.value})}
                            value={moduleData.domain}
                            placeholder="Domain"
                        />
                                </GridItem>
                        <GridItem xs={12}>
                        <input
                            onChange={e => setModuleData({...moduleData, 'duration': e.target.value})}
                            value={moduleData.duration}
                            placeholder="Duration"
                        />
                    </GridItem>
                        <br />
                        <GridItem xs={12}>
                            <div>This is my data return:</div>
                            <ul>
                                {modules.map((item) => {
                                    return <li>{item.title}</li>
                                })}
                            </ul>
                        </GridItem>
                    </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
