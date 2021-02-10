import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import UnorderedList from "../../../components/UnorderedList/UnorderedList";
import OrderedList from "../../../components/OrderedList/OrderedList";
import ContentTable from "../ContentTable/ContentTable";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import styles from "views/Module/styles/module.js";

const useStyles = makeStyles(styles);

export default function SlideBuilder(props) {
    const classes = useStyles();
    let htmlContent;

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
            htmlContent = <ContentTable type={"static"} tableSlug={props.content} />
            break;
        case "input-table":
            htmlContent = <ContentTable type={"input"} tableSlug={props.content} />
            break;
        case "rendered-table":
            htmlContent = <ContentTable type={"rendered"} tableSlug={props.content} />
            break;
        case "checklist section":
            htmlContent =
                <div>
                    <h6>{props.content.sectionTitle}</h6>
                    {props.content.checklists.map((list, index) => (
                        <div key={index}>
                            <p>{list.listScope}</p>
                            {list.items.map((item, index) => (
                                <FormControlLabel
                                    disabled
                                    key={index}
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