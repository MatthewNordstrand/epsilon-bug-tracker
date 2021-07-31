import React, { useState } from 'react';
import { makeStyles, Grid, Paper, Typography, TextField, Select, MenuItem, InputLabel } from '@material-ui/core';

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

    const [issueName, setIssueName] = useState("");
    const [priority, setPriority] = useState("priorityLow");

    return (
        <div>
            <Grid container className={classes.pageContainer}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.titleHeading} variant="h3">Open Issue</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={3} /> {/*Messing aroung with spacing here. Change this.*/}
                            <Grid item xs={12} md={4}>
                                <TextField
                                    id="issueName"
                                    name="issueName"
                                    label="Issue Name"
                                    fullWidth
                                    value={issueName}
                                    onChange={(e) => setIssueName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <InputLabel id="priority-label">Priority</InputLabel>
                                <Select
                                    labelId="priority-label"
                                    id="priority"
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
                                    fullWidth
                                >
                                    <MenuItem value={"priorityLow"}>Low</MenuItem>
                                    <MenuItem value={"priorityMed"}>Medium</MenuItem>
                                    <MenuItem value={"priorityHigh"}>High</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
