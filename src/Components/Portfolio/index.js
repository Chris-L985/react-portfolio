import React from "react";
import {
  makeStyles,
  createStyles,
  CardMedia,
  Button,
  Grid,
} from "@material-ui/core";

import FirstSite from '../../assets/Projects/run-buddy.jpg';
import FirstRefactor from '../../assets/Projects/digital-marketing-meeting.jpg';
import FirstFullStack from '../../assets/Projects/fooder-pic.jpg';
import FinalProject from '../../assets/Projects/Wayo-portfolio.jpg';

import "./Portfolio.css";


// function for material ui
const useStyles = makeStyles((theme) =>
    createStyles({
        linkButton: {
            justifyContent: "center",
            textDecoration: "none",
            backgroundColor: theme.colors.secondary,
            margin: "12px",
            color: theme.colors.quarternary,
        },

        gridContainer: {
            paddingBottom: "25px",
        },

        linkDecor: {
            textDecoration: "none",
        },
    })
);

const Portfolio = () => {
    const classes = useStyles();

    return (
        <Grid container="row"
        justifyContent="space-evenly"
        >
            <div className="card mr-15px">
                <div className="header">
                    <CardMedia
                        className="pictures"
                        image={FirstSite}
                        title="First Built Site"
                    />
                    <div className="card-content">
                        <div className="cardHeader">Run Buddy</div>
                        <div className="content">
                            This project was one of the first sites constructed in the bootcamp.
                            We utilized CSS and Html focusing on the barebones of front end. This was to showcase the various design capabilities.
                        </div>
                    </div>
                </div>
                <a
                    href="https://github.com/Chris-L985/run-buddy"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.linkDecor}
                >
                    <Button
                        variant="outlined"
                        size="Large"
                        className={classes.linkButton}
                        disableElevation
                    >
                        Link
                    </Button>
                </a>
            </div>
            <div className="card mr-15px">
                <div className="header">
                    <CardMedia
                        className="pictures"
                        image={FirstRefactor}
                        title="Refactor Assignment"
                    />
                    <div className="card-content">
                        <div className="cardHeader">Refactor Assignment</div>
                        <div className="content">
                            This was an assignment provided at bootcamp where we went in an fixed broken code on existing front end.
                        </div>
                    </div>
                </div>
                <a
                    href="https://github.com/Chris-L985/horiseon-refactor"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.linkDecor}
                >
                    <Button
                        variant="outlined"
                        size="large"
                        className={classes.linkButton}
                        disableElevation
                    >
                        Link
                    </Button>
                </a>
            </div>
            <div className="card mr-15px">
                <div className="header">
                    <CardMedia
                        className="pictures"
                        image={FirstFullStack}
                        title="Full Stack Application"
                    />
                    <div className="card-content">
                        <div className="cardHeader">Fooder</div>
                        <div className="content">
                            This application was my first Full stack application created in the bootcamp.
                             It's an app that helps you pic a place to eat when you're indecisive.
                        </div>
                    </div>
                </div>
                <a
                    href="https://powerful-crag-64537.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.linkDecor}
                >
                    <Button
                        variant="outlined"
                        size="Large"
                        className={classes.linkButton}
                        disableElevation
                    >
                        Link
                    </Button>
                </a>
            </div>
            
            <div className="card mr-15px">
                <div className="header">
                    <CardMedia
                        className="pictures"
                        image={FinalProject}
                        title="WAYO Clothing"
                    />
                    <div className="card-content">
                        <div className="cardHeader">Wayo Clothing Brand</div>
                        <div className="content">
                            This application was my final Full stack application created in the bootcamp.
                             and my first full stack application utilizing MERN.
                        </div>
                    </div>
                </div>
                <a
                    href="https://murmuring-thicket-79577.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.linkDecor}
                >
                    <Button
                        variant="outlined"
                        size="Large"
                        className={classes.linkButton}
                        disableElevation
                    >
                        Link
                    </Button>
                </a>
            </div>
        </Grid>
    );
};

export default Portfolio;