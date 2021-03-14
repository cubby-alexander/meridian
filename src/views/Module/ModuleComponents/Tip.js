import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import tipImage from "assets/img/light-bulb.png";
import styles from "../styles/module";

const useStyles = makeStyles(styles);

export default function Tip(props) {
    const classes = useStyles();
    let tip;

    switch (props.type) {
        case "paragraph":
            tip =
                <GridItem xs={12} sm={10} md={11}>
                    <p className={classes.tipParagraph}>
                        <span className={classes.tipDisclaim}>Tip: </span>
                        {props.content}
                    </p>
                </GridItem>
            break;
        case "ordered":
            tip =
                <GridItem xs={12} sm={10} md={11}>
                    <p className={classes.tipDisclaim}>Tips: </p>
                    <ol className={classes.tipList}>
                        {props.content.map((tip, key) => (
                            <li key={key}>{tip}</li>
                        ))}
                    </ol>
                </GridItem>
            break;
        case "unordered":
            tip =
                <GridItem xs={12} sm={10} md={11}>
                    <p className={classes.tipDisclaim}>Tips: </p>
                    <ul className={classes.tipList}>
                        {props.content.map((tip, key) => (
                            <li key={key}>{tip}</li>
                        ))}
                    </ul>
                </GridItem>
            break;
        default: return null
    }

    return (
        <GridContainer justify="center" alignItems="center">
            <GridItem xs={2} sm={2} md={1}>
                <img src={tipImage} alt="Tip Light Bulb" className={classes.tipImage} />
            </GridItem>
            {tip}
        </GridContainer>
    )
}