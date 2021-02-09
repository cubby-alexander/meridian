import React from "react";
import WorkbookCard from "./WorkbookCard";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";

export default function WorkbookGallery(props) {
    const {workbooks} = props;

    return (
        <GridContainer>
            {workbooks.map((workbook, key) => (
                <GridItem xs={12} sm={6} md={3} lg={3} key={key}>
                    <WorkbookCard workbook={workbook} />
                </GridItem>))}
        </GridContainer>
    )
}