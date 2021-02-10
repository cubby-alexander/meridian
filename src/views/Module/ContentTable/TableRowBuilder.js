import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCellBuilder from "./TableCellBuilder";

export default function TableRowBuilder(props) {
    if ((props.type === "static" || props.type === "rendered") && props.row.every((cell) => {
        return cell.default === "";
    })) {
        return null
    } else if ((props.type === "rendered") && props.row.every((cell) => {
        return cell.current === "";
    })) {
        return null
    } else {
        return (
            <TableRow>
                {props.row.map((cell, key) => (
                    <TableCellBuilder
                        key={key}
                        component="th"
                        scope={props.class === "body" ? ("row") : null}
                        class={props.class}
                        cellType={props.type}
                        tableSlug={props.tableSlug}
                        rowId={props.rowId}
                        cellId={key}
                        value={cell}
                        isLast={props.row.length === (key + 1)}
                    />
                ))}
            </TableRow>
        )
    }
}