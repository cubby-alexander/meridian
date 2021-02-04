/*eslint-disable*/
import React from "react";

import { Auth } from 'aws-amplify';
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, AccountCircle } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const user = Auth.currentAuthenticatedUser();
if (user.status === "resolved") {
    console.log(user.attributes.email)
}

export default function HeaderLinks(props) {
  const classes = useStyles();

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
            <Button
                href="/module-browse"
                color="transparent"
                className={classes.navLink}
            >
                Tool Finder
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Button
                href="/module/deliver-a-compelling-change-announcement"
                color="transparent"
                className={classes.navLink}
            >
                Sample Module
            </Button>
        </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="About Us"
          boverColor="primary"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/components" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
              <Link to="/module-creation" className={classes.dropdownLink}>
                  Module Creation
              </Link>,
              <Link to="/module-browse" className={classes.dropdownLink}>
                  Sample Browse
              </Link>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="signup"
          color="transparent"
          className={classes.navLink}
        >
 Sign Up
        </Button>
      </ListItem>
        {user !== null ? <ListItem className={classes.listItem}>
            <Button
                color="transparent"
                className={classes.navLink}
                onClick={signOut}
            >
                Sign Out
            </Button>
        </ListItem> : null}
        <ListItem className={classes.listItem}>
            <Button
                href="/login-page"
                color="transparent"
                className={classes.navLink}
            >
                <AccountCircle className={classes.icons} /> Sign In
            </Button>
        </ListItem>
    </List>
  );
}
