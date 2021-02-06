import React, {useState, useEffect} from "react";
import { API } from 'aws-amplify';
import { listModules } from "../../graphql/queries";
import { createModule as createModuleMutation, updateModule as updateModuleMutation, deleteModule as deleteModuleMutation} from "../../graphql/mutations";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import RefreshIcon from "@material-ui/icons/Refresh";

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

export default function ModuleCreation(props) {
    const classes = useStyles();
    const [modules, setModules] = useState([]);
    const [moduleData, setModuleData] = useState({
        title: "",
        slug: "",
        duration: "",
        domain: "",
        _version: null
    });
    const { ...rest } = props;

    useEffect(() => {
        fetchModules();
    }, []);

    console.log(modules, "modules", moduleData, "moduleData");

    async function fetchModules() {
        API.graphql({ query: listModules }).then((result) => {
            console.log(result, "fetchModules call")
            const cleanData = result.data.listModules.items.filter(item => item._deleted !== true);
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

    async function updateModule() {
        const id = modules[0].id;
        const title = moduleData.title;
        const slug = moduleData.slug;
        const domain = moduleData.domain;
        const duration = moduleData.duration;
        const _version = moduleData._version;
        console.log("inputs", id, title, slug, domain, duration, _version);
        API.graphql({query: updateModuleMutation, variables: {
            input: { id, title, domain, duration, _version }
            }}).then((result) => {
                console.log(result, "update log")
                const newModules = [];
                modules.map((module) => {
                    newModules.push(module);
                });
                newModules[0] = result.data.updateModule;
                setModules(newModules);
        }).catch((error) => {
            console.log(error, "update log")
        })
    }

    async function createModule() {
        console.log("Creating...");
        const newModule = {
            title: "",
            slug: "",
            duration: "",
            domain: "",
            _version: null
        };
        API.graphql({
                query: createModuleMutation,
                variables: { input: newModule }}).then((result) => {
                    console.log(result, "creationLog")
        }).catch((error) => {
            console.log(error, "creationLog")
        });
        setModules([ ...modules, newModule ]);
        setModuleData({});
    }

    async function deleteModule(module) {
        console.log(module, "delete module pre-fire");
        const newModulesArray = modules.filter(existingModule => existingModule !== module);
        setModules(newModulesArray);
        const id = module.id;
        const _version = module._version;
        API.graphql({ query: deleteModuleMutation, variables: { input: { id, _version } }}).then((result) => {
            console.log(result, "delete log");
        }).catch((error) => {
            console.log(error, "delete log");
        });
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
                            <Button size="sm" round justIcon color="warning" onClick={updateModule}>
                                <RefreshIcon />
                            </Button>
                            <Button size="sm" round justIcon color="danger" onClick={() => deleteModule(modules[0])}>
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
                        <GridItem xs={12}>
                            {modules[0] && (<input
                                onChange={e => setModuleData({...moduleData, 'duration': e.target.value})}
                                value={moduleData._version}
                                placeholder="Version"
                            />)}
                        </GridItem>
                        <br />
                        <GridItem xs={12}>
                            <div>This is my data return:</div>
                            <ul>
                                {modules.map((item, index) => {
                                    return <li onClick={e => setModuleData(modules[index])}>{item.title}</li>
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
