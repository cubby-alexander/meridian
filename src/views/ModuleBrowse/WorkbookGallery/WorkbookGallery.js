import React from "react";
import WorkbookCard from "./WorkbookCard";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";

export default function WorkbookGallery(props) {
    const {workbooks} = props;

    return (
        <GridContainer justify="left">
            {workbooks.map((workbook) => (
                <GridItem xs={12} sm={6} md={4} lg={4}>
                    <WorkbookCard workbook={workbook} />
                </GridItem>))}
        </GridContainer>
    )
}