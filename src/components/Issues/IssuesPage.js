import React from 'react';
import { makeStyles, Grid, Paper, Typography, Button } from '@material-ui/core';
import IssuesGrid from './IssuesGrid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        paddingTop: 0,
    },
    titleHeading: {
        textAlign: "center",
    }
}));

export default function IssuesPage(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.titleHeading} variant="h3">Issues</Typography>
                        <Link to="/openissue">
                            <Button variant="contained" color="secondary" size="small">Open Issue</Button>
                        </Link>
                        <IssuesGrid issues={props.issues} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
