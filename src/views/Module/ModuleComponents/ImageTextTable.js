import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import styles from "../styles/contentTable";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

const useStyles = makeStyles(styles);

export default function ImageTextTable(props) {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        {props.content.map((cell, key, cells) => (
                            <TableCell
                                id={key}
                                width={`${100 / cells.length}%`}
                                component="td"
                                classes={{root: classes.imageRow}}
                                scope="row"
                            >
                                <GridContainer justify="center" >
                                    <GridItem xs={2}>
                                        <img src={`/${cell.image}`}  alt={"Table Image"}/>
                                    </GridItem>
                                    <GridItem xs={10}>
                                        {cell.text}
                                    </GridItem>
                                </GridContainer>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}