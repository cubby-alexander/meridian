import React from "react";
import {useContext, useState} from "react";

import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import ModuleContext from "../ModuleContext";
import styles from "views/Module/styles/contentTable.js";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles(styles);

export default function TableCellBuilder(props) {
    const context = useContext(ModuleContext);
    const [cellValue, setCellValue] = useState(props.value);
    const classes = useStyles();

    function userSetValue(tableSlug, rowId, cellId, updatedValue) {
        context.tables.find(table => table.slug === tableSlug).tableValues[rowId][cellId].current = updatedValue;
        let newCurrent = {
            ...context.tables.find(table => table.slug === tableSlug).tableValues[rowId][cellId],
            current: updatedValue
        };
        setCellValue(newCurrent);
    }

    switch (props.cellType) {

        case "static":
            return <TableCell
                id={props.rowId - props.cellId - 'static'}
                width="20%"
                classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                component="th"
                scope={props.class === "body" ? ("row") : null}>
                {props.value.default}
            </TableCell>

        case "input":
            if (props.value.mutable) {
                return <TableCell
                    id={props.rowId - props.cellId - 'input'}
                    width="20%"
                    height="80px"
                    classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                    component="td"
                    padding="none"
                    scope={props.class === "body" ? ("row") : null}>
                    <textarea
                        value={props.value.current}
                        onChange={e => userSetValue(props.tableSlug, props.rowId, props.cellId, e.target.value)}
                        className={props.isLast ? classNames(classes.tableInput, classes.lastInput) : classes.tableInput}
                    />
                </TableCell>
            } else {
                return <TableCell
                     id={props.rowId - props.cellId - 'input'}
                     width="20%"
                     classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                     component="td"
                     scope={props.class === "body" ? ("row") : null}>
                    {cellValue}
                 </TableCell>
            }

        case "rendered":
             return <TableCell
                 id={props.rowId - props.cellId - 'rendered'}
                 width="20%"
                 classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                 component="th"
                 scope={props.class === "body" ? ("row") : null}>
                 {props.value.current}
             </TableCell>

       default: return null
    }
}