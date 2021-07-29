import React from 'react';
import { makeStyles, Grid, Paper, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        paddingTop: 0,
    },
    pageContainer: {
        padding: theme.spacing(2),
    },
    titleHeading: {
        textAlign: "center",
    }
}));

export default function OpenIssues() {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.pageContainer}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.titleHeading} variant="h3">Open Issue</Typography>
                        <form>
                            <Grid container>
                                <Grid item xs={3} /> {/*Messing aroung with spacing here. Change this.*/}
                                <Grid item xs={12} md={6}>
                                    <TextField id="issueName" name="issueName" label="Issue Name" fullWidth />
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
