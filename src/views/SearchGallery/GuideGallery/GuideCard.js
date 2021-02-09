import React from "react";
import {useState} from "react";
import {Link, useHistory} from "react-router-dom";

import {makeStyles} from "@material-ui/core/styles";
import Schedule from "@material-ui/icons/Schedule";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import Info from "../../../components/Typography/Info";
import CardFooter from "../../../components/Card/CardFooter";
import Card from "../../../components/Card/Card";

import styles from "../styles/guideCard";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles(styles);

export default function GuideCard(props) {
    const [anchorElBottom, setAnchorElBottom] = useState(null);
    const history = useHistory();
    const classes = useStyles();
    const {module} = props;

    function workbookCount(workbooks) {
        if (workbooks.length === 0) {
            return null
        } else if (workbooks.length === 1) {
            return "1 workbook"
        } else {
            return `${workbooks.length} workbooks`
        }
    }

    return (
        <Card>
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
            <CardFooter>
                <div className={classes.workbookCount}>
                    <span onClick={event => setAnchorElBottom(event.currentTarget)}>{workbookCount(props.workbooks)}</span>
                    <Popover
                        classes={{
                            paper: classes.popover
                        }}
                        open={Boolean(anchorElBottom)}
                        anchorEl={anchorElBottom}
                        onClose={() => setAnchorElBottom(null)}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center"
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center"
                        }}
                    >
                        <h3 className={classes.popoverHeader}>Saved workbooks for this guide:</h3>
                        <ul className={classes.popoverBody}>
                            {props.workbooks.map((workbook, key) => (
                                <li
                                    className={classes.workbookPop}
                                    onClick={() => history.push(`/module/${module.slug}/${workbook.workbookSlug}`)}
                                    key={key}
                                >
                                    {workbook.workbookTitle}
                                </li>
                            ))}
                        </ul>
                    </Popover>
                </div>
                <div className={classes.stats + " " + classes.mlAuto}>
                    <Schedule/>{module.duration}
                </div>
            </CardFooter>
        </Card>
    )
}