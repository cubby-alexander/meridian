import React, {useState, useEffect} from "react";
import { API, Auth } from 'aws-amplify';
import { listModules } from "../../graphql/queries";
import { createModule as createModuleMutation, updateModule as updateModuleMutation, deleteModule as deleteModuleMutation} from "../../graphql/mutations";


import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "../../aws-exports";

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

Amplify.configure(awsconfig);

const user = Auth.currentAuthenticatedUser();

console.log(user);

export default function ModuleCreation(props) {
    const classes = useStyles();
    const [modules, setModules] = useState([]);
    const [moduleData, setModuleData] = useState({});
    const [notes, setNotes] = useState([]);
    const { ...rest } = props;

    useEffect(() => {
        fetchModules();
    }, []);

    console.log(modules, "modules", moduleData, "moduleData");

    async function fetchModules() {
        API.graphql({ query: listModules }).then((result) => {
            console.log(result)
            result.data.listModules.items.filter(item => item._deleted = true)
            setModules(result.data.listModules.items);
            setModuleData(result.data.listModules.items[0])
        }).catch((error) => {
            console.log(error)
        })
        console.log(modules, moduleData, "api data")

    }

    async function updateModule() {
        console.log(moduleData, modules[0].id)
        const id = modules[0].id;
        const title = moduleData.title;
        const slug = moduleData.slug;
        const domain = moduleData.domain;
        const duration = moduleData.duration;
        const _version = moduleData._version;
        console.log("inputs", id, title, slug, domain, duration, _version);
        const response = await API.graphql({query: updateModuleMutation, variables: {
            input: { id, title, domain, duration, _version }
            }})
        console.log(response);
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
        setModuleData({});
    }

    async function deleteModule({ id }) {
        const newModulesArray = modules.filter(module => module.id !== id);
        setModules(newModulesArray);
        API.graphql({ query: deleteModuleMutation, variables: { input: { id, _version: 23 } }});
    }

    return (
        <AmplifyAuthenticator>
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
        </AmplifyAuthenticator>
    );
}
