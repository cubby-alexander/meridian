import React from "react";
import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Close from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "../CustomButtons/Button";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/javascriptStyles";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function ConfirmationModal(props) {
    const classes = useStyles()

    return (
        <Dialog
            classes={{
                root: classes.modalRoot,
                paper: classes.modal + " " + classes.modalSmall
            }}
            open={props.modalOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={props.closeModal}
            aria-labelledby="small-modal-slide-title"
            aria-describedby="small-modal-slide-description"
        >
            <DialogTitle
                id="small-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
            >
                <Button
                    simple
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    onClick={props.closeModal}
                >
                    {" "}
                    <Close className={classes.modalClose} />
                </Button>
            </DialogTitle>
            <DialogContent
                id="small-modal-slide-description"
                className={classes.modalBody + " " + classes.modalSmallBody}
            >
                <h5>{props.message}</h5>
            </DialogContent>
            <DialogActions
                className={
                    classes.modalFooter + " " + classes.modalFooterCenter
                }
            >
                <Button
                    onClick={props.closeModal}
                    link
                    className={classes.modalSmallFooterFirstButton}
                >
                    Never Mind
                </Button>
                <Button
                    onClick={() => props.closeModal}
                    color="success"
                    simple
                    className={
                        classes.modalSmallFooterFirstButton +
                        " " +
                        classes.modalSmallFooterSecondButton
                    }
                >
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}