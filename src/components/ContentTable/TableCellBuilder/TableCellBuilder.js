import React from "react";
import {useContext, useState} from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import ModuleContext from "../../../views/Module/ModuleContext";
import styles from "assets/jss/material-kit-react/views/modulePage.js";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles(styles);

export default function TableCellBuilder(props) {
    const context = useContext(ModuleContext);
    const [cellValue, setCellValue] = useState(props.value);
    const classes = useStyles();

    function userSetValue(table, rowId, cellId, updatedValue) {
        context.tables[0].tableValues[rowId][cellId].current = updatedValue;
        let newCurrent = {
            ...context.tables[0].tableValues[rowId][cellId],
            current: updatedValue
        };
        setCellValue(newCurrent);
    }

    switch (props.cellType) {
        case "static":
            return <TableCell
                id={props.rowId - props.cellId - 'static'}
                classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                component="th"
                scope={props.class === "body" ? ("row") : null}>
                {props.value.default}
            </TableCell>
        case "input":
            if (cellValue.mutable) {
                return <TableCell
                    id={props.rowId - props.cellId - 'input'}
                    classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                    component="th"
                    scope={props.class === "body" ? ("row") : null}>
                    <textarea
                        value={cellValue.current === "" ? (cellValue.default) : (cellValue.current)}
                        onChange={e => userSetValue("test", props.rowId, props.cellId, e.target.value)}
                        className={classes.tableInput}
                    />
                </TableCell>
            } else {
                return <TableCell
                     id={props.rowId - props.cellId - 'input'}
                     classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                     component="th"
                     scope={props.class === "body" ? ("row") : null}>
                     {props.value.default}
                 </TableCell>
            }
        case "rendered":
             return <TableCell
                 id={props.rowId - props.cellId - 'rendered'}
                 classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                 component="th"
                 scope={props.class === "body" ? ("row") : null}>
                 {props.value.current}
             </TableCell>
       default: return null
    }
}