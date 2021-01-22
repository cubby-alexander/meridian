import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/modulePage.js";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles(styles);

export default function TableCellBuilder(props) {
    const classes = useStyles();

    switch (props.cellType) {
        case "static":
            return <TableCell
                id={props.id - 'static'}
                classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                component="th"
                scope={props.class === "body" ? ("row") : null}>
                {props.value}
            </TableCell>
        case "input":
             return <TableCell
                 id={props.id - 'input'}
                 classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                 component="th"
                 scope={props.class === "body" ? ("row") : null}>
                    <textarea
                        placeholder={props.value}
                        className={classes.tableInput}
                    />
             </TableCell>
        case "rendered":
             return <TableCell
                 id={props.id - 'input'}
                 classes={props.class === "head" ? ({root: classes.tableHeader}) : {root: classes.tableRow}}
                 component="th"
                 scope={props.class === "body" ? ("row") : null}>
                 {props.value}
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