import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import styles from "../styles/workbookCard.js";

const useStyles = makeStyles(styles);

export default function Workbook(props) {
    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState(false);
    const history = useHistory();

    function modalClosed() {
       setModalOpen(false);
    }

    return (
        <Card className={classes.galleryCard}>
            <CardBody className={classes.galleryBody}>
                <h6
                    onClick={e => history.push(`/module/${props.workbook.moduleSlug}/${props.workbook.workbookSlug}`)}
                    className={classes.cardCategory}
                >
                    {props.workbook.workbookTitle}
                </h6>
                    <div className={classes.workbookDescription}>
                        {props.workbook.moduleTitle}
                    </div>
            </CardBody>
            <CardFooter className={classes.galleryFooter}>
                <div className={classes.workbookDescription}>
                    <span>Created {props.workbook.dateCreated}</span>
                </div>
                <div className={classes.stats + " " + classes.mlAuto}>
                    <Edit onClick={() => history.push(`/module/${props.workbook.moduleSlug}/${props.workbook.workbookSlug}`)} />
                    <Delete onClick={() => setModalOpen(true)} />
                    <ConfirmationModal
                        modalOpen={modalOpen}
                        closeModal={() => modalClosed()}
                        message={"Are you sure you want to delete this workbook?"}
                        onConfirmation={() => console.log("The workbook was deleted.")}
                    />
                </div>
            </CardFooter>
        </Card>
    )
}