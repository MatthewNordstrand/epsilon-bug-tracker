import React from 'react';
import { makeStyles, Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
    },
    titleHeading: {
        textAlign: "center",
    }
}));

export default function IssuesPage() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.titleHeading} variant="h3">Issues</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
