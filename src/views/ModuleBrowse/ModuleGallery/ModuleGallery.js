import React from "react";
import ModuleCard from "./ModuleCard";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";

export default function ModuleGallery(props) {
    const {modules} = props;

    return (
        <GridContainer justify="left">
            {modules.map((module) => (
                <GridItem xs={12} sm={6} md={4} lg={4}>
                    <ModuleCard module={module} />
                </GridItem>))}
        </GridContainer>
    )
}