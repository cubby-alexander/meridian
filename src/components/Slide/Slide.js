import React from "react";
import {useContext} from "react";

import {makeStyles} from "@material-ui/core/styles";

import ModuleContext from "../../views/Module/ModuleContext";
import UnorderedList from "../UnorderedList/UnorderedList";
import OrderedList from "../OrderedList/OrderedList";
import ContentTable from "../ContentTable/ContentTable";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import styles from "assets/jss/material-kit-react/views/modulePage.js";

const useStyles = makeStyles(styles);


export default function Slide(props) {
    const dynamicContent = useContext(ModuleContext);
    const classes = useStyles();
    let htmlContent = null;

    switch (props.typeOfElement) {
        case "header":
            htmlContent = <h6>{props.content}</h6>;
            break;
        case "paragraph":
            htmlContent = <p>{props.content}</p>;
            break;
        case "unordered list":
            htmlContent = <UnorderedList content={props.content} />;
            break;
        case "ordered list":
            htmlContent = <OrderedList content={props.content} />;
            break;
        case "break":
            htmlContent = <br />;
            break;
        case "static-table":
            let staticTable = dynamicContent.tables.find(table => table.slug === props.content)
            htmlContent = <ContentTable type={"static"} content={staticTable} tableSlug={props.content} />
            break;
        case "input-table":
            let inputTable = dynamicContent.tables.find(table => table.slug === props.content);
            htmlContent = <ContentTable type={"input"} content={inputTable} tableSlug={props.content} />
            break;
        case "rendered-table":
            let renderedTable = dynamicContent.tables.find(table => table.slug === props.content)
            htmlContent = <ContentTable type={"rendered"} content={renderedTable} tableSlug={props.content} />
            break;
        case "checklist section":
            htmlContent =
                <div>
                    <h6>{props.content.sectionTitle}</h6>
                    {props.content.checklists.map((list, index) => (
                        <div key={index}>
                            <p>{list.listScope}</p>;
                            {list.items.map((item) => (
                                <FormControlLabel
                                    disabled
                                    control={
                                        <Checkbox
                                            tabIndex={-1}
                                            checked={true}
                                            checkedIcon={<Check className={classes.checkedIcon} />}
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                                checked: classes.checked,
                                                root: classes.checkRoot
                                            }}
                                        />
                                    }
                                    classes={{
                                        label: classes.label,
                                        root: classes.labelRoot,
                                        disabled: classes.disabledCheckboxAndRadio
                                    }}
                                    label={item}
                                />
                            ))}
                        </div>
                    ))}
                </div>;
            break;
        default:
            htmlContent = null;
            break;
        }
        return (
            <div>
                {htmlContent}
            </div>
            )
};