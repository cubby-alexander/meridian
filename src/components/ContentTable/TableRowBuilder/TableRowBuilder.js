import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCellBuilder from "../TableCellBuilder/TableCellBuilder";

import styles from "assets/jss/material-kit-react/views/modulePage.js";

const useStyles = makeStyles(styles);

export default function TableRowBuilder(props) {
    const classes = useStyles();

    return (
        <TableRow>
            {props.row.map((cell) => (
                <TableCellBuilder
                    cellType={"static"}
                    class={props.class}
                    component="th"
                    scope={props.class === "body" ? ("row") : null}
                    value={cell}
                    staticValue={cell}
                />
            ))}
        </TableRow>
    )
}

// index !== 0 && showRow(props.isDefaultScreen, props.isRowDefault) ?
//             (<TableRow>
//                 {row.map((cell) => (
//                     <TableCell
//                         classes={{root: classes.tableRow}}
//                         component="th"
//                         scope="row">
//                             {cell}
//                     </TableCell>
//                 ))}
//             </TableRow>)
//             : null