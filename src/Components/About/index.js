import React from 'react';
import { makeStyles, createStyles, Grid } from '@material-ui/core';

import './About.css';

const useStyles = makeStyles((theme) =>
    createStyles({
        mainHeader: {
            ...theme.fonts.primary,
            color: theme.colors.secondary,
            fontSize: "55px",
        },
        secondHeader: {
            ...theme.fonts.primary,
            marginTop: "5px",
            fontSize: "38px",
        },
    })
);

const About = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid
                item
                xs={12}
                sm={6}
                md={5}
                lg={4}
                className="columnContainer"
            >
                <div className="imgContainer">
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={7}
                lg={8}
                className="infoContainer"
            >
                <h1 className={classes.mainHeader}>About Me!</h1>
                <h2 className={classes.secondHeader}>Hi! My name is Chris Lopez.</h2>
                <p className="aboutInfo">
                I'm glad to you took interest in my web development journey! I've been a web developer for a
                little over 5-months now. If you like what you see, please put in a good word, or feel free to send me
                some feedback. It's free and it's much appreciated. If you have any questions or inquiries, please use the contact
                page. Thank you and have a fantastic day, and remember Happy Hacking!
                </p>
            </Grid>
        </Grid>
    );
};

export default About;