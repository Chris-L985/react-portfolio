import React from 'react';
import {
    makeStyles,
    createStyles,
    Card,
    Grid,
} from "@material-ui/core";
import "./Resume.css"

const useStyles = makeStyles((theme) => {
    createStyles({
        container: {
            
        },
        skillHeader: {
        },
    })

});

const Resume = () => {
    const classes = useStyles();

    return (

        <div>
            <Grid
                container 
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                className={classes.gridContainer}
            >
                <h2>Proficiencies</h2>
            </Grid>
            
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                className={classes.gridContainer}
            >
                <Card className={classes.frontCard}>
                    <h3>Front End</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Material UI</li>
                    </ul>
                </Card>
                <Card className={classes.backCard}>
                    <h3>Back End</h3>
                    <ul>
                        <li>APIs</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>Rest</li>
                        <li>GraphQL</li>
                        <li>Apollo</li>
                    </ul>
                </Card>
                
            </Grid>
            <Grid
                container 
                direction="row"
                justifyContent="start"
                alignItems="flex-start"
            >
                <h3>Click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">here</a> to download my resume.</h3>
            </Grid>
        </div>
    )
}

export default Resume;