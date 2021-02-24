import React from "react";
import {useContext, useState} from "react";
import ModuleContext from "../ModuleContext";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DynamicItem from "./DynamicItem";
import styles from "../styles/contentChecklist";
import FormControl from "@material-ui/core/FormControl";
import Button from "../../../components/CustomButtons/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles(styles);

export default function ContentChecklist(props) {
    const context = useContext(ModuleContext);
    const checklist = context.checklists.find(list => list.slug === props.content);
    const [updateList, setUpdateList] = useState(0);
    const classes = useStyles();

    function addCheckItem(listIndex) {
        if ("addedItems" in checklist && typeof checklist.addedItems[listIndex] !== 'undefined') {
            checklist.addedItems[listIndex]++
        } else {
            if (!("addedItems" in checklist)) {
                checklist.addedItems = []
            }
            checklist.addedItems.splice(listIndex, 0, 1)
        }
        checklist.lists[listIndex].items.push({name: "", default: false, current: false})
        setUpdateList(prevState => prevState + 1)
    }

    function removeCheckItem(listIndex) {
        checklist.addedItems[listIndex]--;
        checklist.lists[listIndex].items.pop();
        setUpdateList(prevState => prevState + 1)
    }

    return (
        <div>
            <h3 className={classes.sectionTitle}>{checklist.sectionTitle}</h3>
            {checklist.lists.map((list, listIndex) => (
                <div key={listIndex} className={classes.list}>
                    <p className={classes.scope}>{list.scope}</p>
                    <FormControl>
                        {list.items.map((item, itemIndex) => {
                            return (
                            <DynamicItem
                                key={itemIndex}
                                listIndex={listIndex}
                                itemIndex={itemIndex}
                                type={props.type}
                                list={props.content}
                                item={item}
                            />
                        )
                        })}
                        {props.type === "input" ? <div className={classes.addButtons}>
                            <Button size="sm" round justIcon color="primary" onClick={(e) => addCheckItem(listIndex)}>
                                <AddIcon/>
                            </Button>
                            {("addedItems" in checklist && checklist.addedItems[listIndex] > 0) ?
                                <Button size="sm" round justIcon color="danger" onClick={(e) => removeCheckItem(listIndex)}>
                                    <RemoveIcon/>
                                </Button> : null}
                        </div> : null}
                    </FormControl>
                </div>
            ))}
        </div>
    )
}