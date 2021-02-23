import React, {useState} from "react";
import {useContext} from "react";
import ModuleContext from "../ModuleContext";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "../styles/contentChecklist";

const useStyles = makeStyles(styles);

export default function DynamicItem(props) {
    const context = useContext(ModuleContext);
    const itemIndex = props.itemIndex;
    const listIndex = props.listIndex;
    const [checked, setChecked] = useState(props.item.current);
    const checklist = context.checklists.find(list => list.slug === props.list)
    const classes = useStyles();

    const handleToggle = () => {
        checklist.lists[listIndex].items[itemIndex].current = !checked;
        setChecked(prevState => !checked);
    };

    if ((props.type === "static" && props.item.default === false) || (props.type === "rendered" && props.item.current === false)) {
        return null
    } else {
        return (
            <FormControlLabel
                disabled={props.type === "static" || props.type === "rendered"}
                control={
                    <Checkbox
                        size="small"
                        tabIndex={-1}
                        checked={props.type === "static" ? props.item.default : props.item.current}
                        onClick={() => handleToggle()}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
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
                label={props.item.name}
            />
        )
    }
}