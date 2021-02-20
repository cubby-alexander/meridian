import React from "react";
import {useState, useContext} from "react";
import ModuleContext from "../ModuleContext";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import makeStyles from "@material-ui/core/styles/makeStyles";
import styles from "../styles/contentCheckbox";

const useStyles = makeStyles(styles);

export default function ContentChecklist(props) {
    const [checked, setChecked] = useState([]);
    const context = useContext(ModuleContext);
    const checkbox = context.checklists.find(list => list.slug === props.content)
    const classes = useStyles();

    const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    return (
        <div>
            <h6>{checkbox.sectionTitle}</h6>
            {checkbox.lists.map((list, index) => (
                <div key={index}>
                    <p>{list.scope}</p>
                    {list.items.map((item, index) => (
                        <FormControlLabel
                            disabled={props.type === "static" || "rendered"}
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
        </div>
    )
}