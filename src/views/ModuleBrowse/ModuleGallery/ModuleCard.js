import React from "react";
import {Link} from "react-router-dom";

import {makeStyles} from "@material-ui/core/styles";
import Schedule from "@material-ui/icons/Schedule";

import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import Info from "../../../components/Typography/Info";
import CardFooter from "../../../components/Card/CardFooter";
import Card from "../../../components/Card/Card";

import styles from "../../../assets/jss/material-kit-react/views/moduleBrowse";

const useStyles = makeStyles(styles);

export default function ModuleCard(props) {
    const classes = useStyles();
    const {module} = props;

    return (
        <Card blog>
            <CardHeader image>
                <Link to={`module/${module.slug}`}>
                    <img src={require(`../../../assets/img${module.image}`)} alt={"Business Meeting"}/>
                    <div className={classes.cardTitleAbsolute}>
                        {module.title}
                    </div>
                </Link>
                <div
                    className={classes.coloredShadow}
                    style={{
                        backgroundImage: `url(${module.image})`,
                        opacity: "1"
                    }}
                />
            </CardHeader>
            <CardBody>
                <Info>
                    <h6 className={classes.cardCategory}>{module.domain}</h6>
                </Info>
                <div className={classes.cardDescription}>
                    {module.slides[0].whatYouGet}
                </div>
            </CardBody>
            <CardFooter plain>
                <div className={classes.author}>
                    <span>2 tools saved</span>
                </div>
                <div className={classes.stats + " " + classes.mlAuto}>
                    <Schedule/>{module.duration}
                </div>
            </CardFooter>
        </Card>
    )
}