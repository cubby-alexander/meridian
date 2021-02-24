import React from "react";
import {useContext, useState} from "react";

import {makeStyles} from "@material-ui/core/styles";

import ModuleContext from "../ModuleContext";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRowBuilder from "./TableRowBuilder";
import TableBody from "@material-ui/core/TableBody";
import RowAddition from "./RowAddition";

import styles from "views/Module/styles/contentTable.js";

const useStyles = makeStyles(styles);

export default function ContentTable(props) {
    const context = useContext(ModuleContext);
    const [state, setState] = useState(0);
    const tableSlug = props.tableSlug;
    const classes = useStyles();

    return (
        <TableContainer>
            <h3 className={classes.tableTitle}>{context.tables.find(table => table.slug === tableSlug).tableTitle}</h3>
            <Table>
                <TableHead>
                    <TableRowBuilder
                        tableSlug={tableSlug}
                        row={context.tables.find(table => table.slug === tableSlug).tableValues[0]}
                        rowId={0}
                        type={"static"}
                        class={"head"} />
                </TableHead>
                <TableBody>
                    {context.tables.find(table => table.slug === tableSlug).tableValues.map((row, key) => (
                        key !== 0 ?
                            (<TableRowBuilder
                                key={key}
                                tableSlug={tableSlug}
                                row={row}
                                rowId={key}
                                type={props.type}
                                class={"body"}
                            />)
                            : null
                    ))}
                </TableBody>
            </Table>
            {props.type === "input" ? (
                <RowAddition
                    tableSlug={tableSlug}
                    changeParentState={() => setState(prevState => prevState + 1)}
                />
                ) : null
            }

        </TableContainer>
    )
}