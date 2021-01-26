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
    const [cellValue, setCellValue] = useState(props.value.current);
    const classes = useStyles();

    function userSetValue(table, rowId, cellId, updatedValue) {
        let newCurrent = "";
        context.tables[0].tableValues[rowId][cellId].current = updatedValue;
        newCurrent = updatedValue;
        setCellValue(newCurrent);
    }

    switch (props.cellType) {
        case "static":
            return <TableCell
                id={props.id - 'static'}
                classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                component="th"
                scope={props.class === "body" ? ("row") : null}>
                {props.value.default}
            </TableCell>
        case "input":
             return <TableCell
                 id={props.id - 'input'}
                 classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                 component="th"
                 scope={props.class === "body" ? ("row") : null}>
                    <textarea
                        value={cellValue}
                        onChange={e => userSetValue("test", props.rowId, props.cellId, e.target.value)}
                        className={classes.tableInput}
                    />
             </TableCell>
        case "rendered":
             return <TableCell
                 id={props.id - 'rendered'}
                 classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                 component="th"
                 scope={props.class === "body" ? ("row") : null}>
                 {props.value.current}
             </TableCell>
       default: return null
    }
}

//  case "input":
//             <TableCell
//                 placeholder={props.staticValue}
//                 value={props.userSetValue}
//                 onChange={e => props.userSetValue(props.id, e.value)}
//             />
//         case "rendered":
//             <TableCell
//                 value={props.userSetValue}
//             />