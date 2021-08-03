import React, { useState } from 'react';
import { makeStyles, Grid, Paper, Typography, TextField, Select, MenuItem, InputLabel, Button } from '@material-ui/core';

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
    },
    textField: {
        minHeight: "500px",
    },
    error: {
        color: "red",
    },
}));

export default function OpenIssues() {
    const classes = useStyles();

    const [issueName, setIssueName] = useState("");
    const [priority, setPriority] = useState("priorityLow");
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Submitted: ${issueName} Priority: ${priority} Description: ${description}`);
    }

    const changeIssueName = e => {
        const newName = e.target.value;
        setIssueName(newName);
    }

    const changePriority = e => {
        const newPriority = e.target.value;
        setPriority(newPriority);
    }

    const changeDescription = e => {
        const newDescription = e.target.value;
        setDescription(newDescription);
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <Grid container className={classes.pageContainer}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.titleHeading} variant="h3">Open Issue</Typography>
                            <Grid container spacing={3}>
                                <Grid item lg={3} /> {/*Spacing the object to center it*/}
                                <Grid item xs={12} sm={9} lg={4}>
                                    <TextField
                                        id="issueName"
                                        name="issueName"
                                        label="Issue Name"
                                        variant="outlined"
                                        fullWidth
                                        value={issueName}
                                        onChange={e => changeIssueName(e)}
                                    />
                                    <Typography className={classes.error}>Issues Name is required.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <InputLabel id="priority-label">Priority</InputLabel>
                                    <Select
                                        labelId="priority-label"
                                        id="priority"
                                        fullWidth
                                        value={priority}
                                        onChange={e => changePriority(e)}
                                    >
                                        <MenuItem value={"priorityLow"}>Low</MenuItem>
                                        <MenuItem value={"priorityMed"}>Medium</MenuItem>
                                        <MenuItem value={"priorityHigh"}>High</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="issueDescription"
                                        className={classes.textField}
                                        label="Description"
                                        multiline
                                        maxRows={25}
                                        minRows={25}
                                        fullWidth
                                        variant="outlined"
                                        value={description}
                                        onChange={e => changeDescription(e)}
                                    />
                                    <Typography className={classes.error}>Description is required.</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} direction="column" alignItems="center">
                                <Grid container item xs={6} md={4} lg={2}>
                                    <Button type="submit" variant="contained" color="secondary" fullWidth>Open Issue</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
