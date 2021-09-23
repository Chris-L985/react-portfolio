import React from 'react';
import { makeStyles, createStyles, Grid } from '@material-ui/core';
import AboutPic from '../../assets/Me-at-the-park.jpeg';

const useStyles = makeStyles((theme) =>
    createStyles({
        aboutMeInfoContainer: {
            padding: "15px",
            fontFamily: theme.fonts.primary,
        },
        header: {
            ...theme.fonts.secondary,
            color: theme.colors.secondary,
            fontSize: "60px",
        },
        header2: {
            ...theme.fonts.primary,
            marginTop: "3px",
            fontSize: "35px",
        },
        aboutInfo: {
            marginTop: "5px",
            ...theme.fonts.tertiary,
            fontSize: "20px",
            paddingBottom: "70px",
        },
        imageColumnContainer: {
            padding: "15px",
        },
        imageContainer: {
            height: "600px",
            width: "100%",
            overflow: "hidden",
            position: "relative",
            border: `2px solid #000`,
            borderRadius: "5px",
            backgroundImage: `url(${AboutPic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "-8px 8px 0px -1px #00000050",
            cursor: "pointer",
            transition: "0.3s",
            transform: "translate(0px, 0px)",
            "&:hover": {
                boxShadow: `-13px 13px 2.5px 0px ${theme.colors.quinary}`,
                transition: "0.3s",
                transform: "translate(5px, -5px)",
            },
        },
        image: {
            minHeight: "600px",
            width: "100%",
        },
        "@media (max-width: 1500px)": {
            imageContainer: {
                height: "400px",
            },
            image: {
                minHeight: "400px",
            },
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
                className={classes.imageColumnContainer}
            >
                <div className={classes.imageContainer}>
                {/* <img src={AboutImage} className={classes.image} /> */}
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                md={7}
                lg={8}
                className={classes.aboutMeInfoContainer}
            >
                <h1 className={classes.header}>About Me!</h1>
                <h2 className={classes.header2}>Hi! My name is Chris Lopez.</h2>
                <p className={classes.aboutInfo}>
                I'm glad to you took interest in my web developmment journey! I've been a web developer for a
                little over 5-months now. If you like what you see, please put in a good word, or feel free to send me
                some feedback. It's free and it's much appreciated. If you have any questions or inquiries, please use the contact
                page. Thank you and have a fantastic day, and remember Happy Hacking!
                </p>
            </Grid>
        </Grid>
    );
};

export default About;