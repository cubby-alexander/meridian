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
        user.workbooks.forEach((workbook) => {
            if (workbook.moduleSlug === moduleSlug) {
                let details = {
                    workbookSlug: workbook.workbookSlug,
                    workbookTitle: workbook.workbookTitle,
                }
                matchedTools.push(details);
            }
        })
        console.log(matchedTools);
        return matchedTools;
    }

    return (
        <GridContainer justify="left">
            {modules.map((module) => (
                <GridItem xs={12} sm={6} md={4} lg={4}>
                    <ModuleCard module={module} workbooks={checkTools(module.slug)} />
                </GridItem>))}
        </GridContainer>
    )
}