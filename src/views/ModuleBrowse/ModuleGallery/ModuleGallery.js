import React from "react";
import ModuleCard from "./ModuleCard";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import users from "../../../db/users";

export default function ModuleGallery(props) {
    const {modules} = props;
    const user = users[0];

    function checkTools(moduleSlug) {
        let matchedTools = [];

        return matchedTools;
    }

    return (
        <GridContainer justify="left">
            {modules.map((module) => (
                <GridItem xs={12} sm={6} md={4} lg={4}>
                    <ModuleCard module={module} tools={checkTools(module.moduleSlug)} />
                </GridItem>))}
        </GridContainer>
    )
}