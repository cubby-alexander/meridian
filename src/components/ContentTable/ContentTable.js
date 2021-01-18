import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import styles from "assets/jss/material-kit-react/views/modulePage.js";

const useStyles = makeStyles(styles);

export default function ContentTable(props) {
    const classes = useStyles();
    function parseTableArray(arrayFromDB) {
        let tableHead = <TableHead>
            <TableRow>
                {arrayFromDB[0].map((cell) => (
                    <TableCell classes={{root: classes.tableHeader}}>{cell}</TableCell>
                ))}
            </TableRow>
        </TableHead>;
        let tableBody = <TableBody>
            {arrayFromDB.map((row, index) => (
                index !== 0 ?
                    (<TableRow>
                        {row.map((cell) => (
                            <TableCell classes={{root: classes.tableRow}} component="th" scope="row">{cell}</TableCell>
                        ))}
                    </TableRow>)
                    : null
            ))}
        </TableBody>;
        return [tableHead, tableBody]
    }

    return (
        <TableContainer>
            <h6 className={classes.tableTitle}>{props.content.tableTitle}</h6>
            <Table>
                {parseTableArray(props.content.table)}
            </Table>
        </TableContainer>
    )
}