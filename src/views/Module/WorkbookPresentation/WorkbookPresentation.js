import React, {useRef} from "react";
import {useReactToPrint} from "react-to-print";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import ContentSlide from "../Slide/Slide";
import Close from "@material-ui/icons/Close";
import Button from "../../../components/CustomButtons/Button";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../styles/workbookPresentation";
import Print from "@material-ui/icons/Print";
import Email from "@material-ui/icons/Email";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function WorkbookPresentation(props) {
    const classes = useStyles();
    const printComponentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => printComponentRef.current,
        pageStyle: "@page { size: auto;  margin: 20mm; } @media print { body { -webkit-print-color-adjust: exact; } }"
    });

    console.log("modal", props.content)

    return (
        <Dialog
            classes={{
                root: classes.modalRoot,
                paper: classes.modal
            }}
            open={props.presentation}
            TransitionComponent={Transition}
            keepMounted
            scroll="body"
            maxWidth={false}
            onClose={() => props.close()}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
        >
            <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
            >
                <Button
                    simple
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    onClick={() => props.close()}
                >
                    {" "}
                    <Close className={classes.modalClose} />
                </Button>
                <Button
                    size="sm"
                    color="primary"
                    onClick={() => handlePrint()}
                >
                    <Print/>
                </Button>

                <Button size="sm" color="primary">
                    <Email/>
                </Button>
            </DialogTitle>
                    <DialogContent
                        id="classic-modal-slide-description"
                        className={classes.modalBody}
                    >

                            <div className={classes.wrapper}>
                                <ContentSlide
                                    title={props.content.title}
                                    html={props.content.htmlElements}
                                    ref={printComponentRef}
                                />
                            </div>
                    </DialogContent>
            <DialogActions className={classes.modalFooter}>
                <Button
                    onClick={() => props.close()}
                    color="danger"
                    simple
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}