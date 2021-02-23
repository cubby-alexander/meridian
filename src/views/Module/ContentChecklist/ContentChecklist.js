import React from "react";
import {useContext} from "react";
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
    const checklist = context.checklists.find(list => list.slug === props.content)
    const classes = useStyles();

    return (
        <div>
            <h6 className={classes.sectionTitle}>{checklist.sectionTitle}</h6>
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
                            <Button size="sm" round justIcon color="primary">
                                <AddIcon/>
                            </Button>
                            <Button size="sm" round justIcon color="danger">
                                <RemoveIcon/>
                            </Button>
                        </div> : null}
                    </FormControl>
                </div>
            ))}
        </div>
    )
}