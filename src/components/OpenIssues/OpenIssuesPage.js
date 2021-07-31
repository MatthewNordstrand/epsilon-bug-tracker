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
        marginBottom: theme.spacing(2),
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
                            <Grid item lg={3} /> {/*Spacing the obejct to center it*/}
                            <Grid item xs={12} sm={9} lg={4}>
                                <TextField
                                    id="issueName"
                                    name="issueName"
                                    label="Issue Name"
                                    variant="outlined"
                                    fullWidth
                                    value={issueName}
                                    onChange={(e) => setIssueName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <InputLabel id="priority-label">Priority</InputLabel>
                                <Select
                                    labelId="priority-label"
                                    id="priority"
                                    fullWidth
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
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
