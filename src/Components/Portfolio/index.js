import React from "react";
import {
  makeStyles,
  createStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@material-ui/core";

import FirstSite from '../../assets/Projects/run-buddy.jpg';
import FirstRefactor from '../../assets/Projects/digital-marketing-meeting.jpg';
import FirstFullStack from '../../assets/Projects/fooder-pic.jpg';

import "./Portfolio.css";

const useStyles = makeStyles((theme) =>
    createStyles({
        media: {
            borderBottom: `1px solid ${theme.colors.quarternary}`,
            height: 140,
        },
        firstCard: {
            margin: "15px",
            maxWidth: 345,
            border: `solid 3px ${theme.colors.quarternary}`,
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

        secondCard: {
            margin: "15px",
            maxWidth: 345,
            border: `solid 3px ${theme.colors.quarternary}`,
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
        thirdCard: {
            margin: "15px",
            maxWidth: 345,
            border: `solid 3px ${theme.colors.quarternary}`,
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
        cardHeader: {
            color: theme.colors.secondary,
            ...theme.fonts.secondary,
            fontWeight: "bold",
            fontSize: "25px",
            marginBottom: "3px",
        },
        CardContent: {
            ...theme.fonts.tertiary,
            fontSize: "15px",
        },

        linkButton: {
            textDecoration: "none",
            backgroundColor: theme.colors.quinary,
            margin: "10px",
            color: theme.colors.quarternary,
            "&:hover": {
                color: theme.colors.primary,
                boxShadow: `-10px 13px 2.5px 0px ${theme.colors.quinary}`,
                transition: "0.3s",
                transform: "translate(5px, -5px)",
        },
        },

        gridContainer: {
            paddingBottom: "70px",
        },

        linkDecor: {
            textDecoration: "none",
        },
    })
);

const Portfolio = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            className={classes.gridContainer}
        >
            <Card className={classes.firstCard}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={FirstSite}
                        title="First Built Site"
                    />
                    <CardContent>
                        <div className={classes.cardHeader}>Run Buddy</div>
                        <div className={classes.CardContent}>
                            This project was one of the first sites constructed in the bootcamp.
                            We utilized CSS and Html focusing on the barebones of front end. This was to showcase the various design capabilities.
                        </div>
                    </CardContent>
                </CardActionArea>
                <a
                    href="https://github.com/Chris-L985/run-buddy"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.linkDecor}
                >
                    <Button
                        variant="contained"
                        size="medium"
                        className={classes.linkButton}
                        disableElevation
                    >
                        Link
                    </Button>
                </a>
            </Card>
            <Card className={classes.secondCard}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={FirstRefactor}
                        title="Refactor Assignment"
                    />
                    <CardContent>
                        <div className={classes.cardHeader}>Refactor Assignment</div>
                        <div className={classes.CardContent}>
                            This was an assignment provided at bootcamp where we went in an fixed broken code on existing front end.
                        </div>
                    </CardContent>
                </CardActionArea>
                <a
                    href="https://github.com/Chris-L985/horiseon-refactor"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.linkDecor}
                >
                    <Button
                        variant="contained"
                        size="medium"
                        className={classes.linkButton}
                        disableElevation
                    >
                        Link
                    </Button>
                </a>
            </Card>
            <Card className={classes.thirdCard}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={FirstFullStack}
                        title="Full Stack Application"
                    />
                    <CardContent>
                        <div className={classes.cardHeader}>Fooder</div>
                        <div className={classes.CardContent}>
                            This application was my first Full stack application created in the bootcamp.
                             It's an app that helps you pic a place to eat when you're indecisive.
                        </div>
                    </CardContent>
                </CardActionArea>
                <a
                    href="https://powerful-crag-64537.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.linkDecor}
                >
                    <Button
                        variant="contained"
                        size="medium"
                        className={classes.linkButton}
                        disableElevation
                    >
                        Link
                    </Button>
                </a>
            </Card>
        </Grid>
    );
};

export default Portfolio;