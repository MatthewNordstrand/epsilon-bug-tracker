// @ts-nocheck
import React, { useState } from 'react';
import { makeStyles, Grid, Paper, Typography, TextField, Select, MenuItem, InputLabel, Button, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { createIssue } from '../../redux/ActionCreators';
import { useAuth0 } from '@auth0/auth0-react';

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
    submitContainer: {
        width: "100%",
        position: "relative"
    },
    submitButton: {

    },
    submitProgress: {
        color: "green",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: -12,
        marginLeft: -12,
    },
}));

const mapStateToProps = state => {
    return {
        issueNum: state.issues.issueNum,
    }
}

const mapDispatchToProps = {
    createIssue: (issueName, desc, priority, openedBy) => (createIssue(issueName, desc, priority, openedBy)),
};

function OpenIssues(props) {
    const classes = useStyles();
    const history = useHistory();
    const { user, isAuthenticated } = useAuth0();
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState({
        issueName: "",
        priority: "priorityLow",
        description: "",
    });

    const [touched, setTouched] = useState({
        issueName: false,
        description: false,
    });

    const handleSubmit = e => {
        e.preventDefault();
        
        //Enable all fields for validation.
        const newTouched = {};
        Object.keys(touched).forEach(function(key) {
            newTouched[key] = true;
            setTouched(newTouched);
        });

        //Check to see if any errors are present before submitting.
        var foundErrors = false;
        const errors = validate(true);
        Object.keys(errors).forEach(function(key) {
            if (errors[key] !== "") {
                foundErrors = true;
            }
        });

        if (foundErrors) return; //We found errors, so we won't submit the form.

        setLoading(true);

        props.createIssue(formValues.issueName, formValues.description, formValues.priority, isAuthenticated ? user.name : "Guest");

        setTimeout(() => {
            history.push(`/viewissue/${props.issueNum}`);
        }, 1000);
    }

    const handleInputChange = e => {
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;

        setFormValues({...formValues, [name]: value});
    }

    const handleBlur = field => {
        setTouched({...touched, [field]: true});
    }

    const validate = force => {
        const errors = {
            issueName: "",
            description: "",
        }

        if (touched.issueName || force) {
            if (formValues.issueName.length < 5) {
                errors.issueName = "Issue Name needs to be at least 5 characters."
            }
        }

        if (touched.description || force) {
            if (formValues.description.length < 15) {
                errors.description = "Description needs to be at least 15 characters.";
            }
        }

        return errors;
    }

    const errors = validate(false);

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
                                        value={formValues.issueName}
                                        onChange={e => handleInputChange(e)}
                                        onBlur={() => handleBlur("issueName")}
                                    />
                                    <Typography className={classes.error}>{errors.issueName}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <InputLabel id="priority-label">Priority</InputLabel>
                                    <Select
                                        labelId="priority-label"
                                        id="priority"
                                        name="priority"
                                        fullWidth
                                        value={formValues.priority}
                                        onChange={e => handleInputChange(e)}
                                    >
                                        <MenuItem value={"priorityLow"}>Low</MenuItem>
                                        <MenuItem value={"priorityMed"}>Medium</MenuItem>
                                        <MenuItem value={"priorityHigh"}>High</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="issueDescription"
                                        name="description"
                                        className={classes.textField}
                                        label="Description"
                                        multiline
                                        maxRows={25}
                                        minRows={25}
                                        fullWidth
                                        variant="outlined"
                                        value={formValues.description}
                                        onChange={e => handleInputChange(e)}
                                        onBlur={() => handleBlur("description")}
                                    />
                                    <Typography className={classes.error}>{errors.description}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} direction="column" alignItems="center">
                                <Grid container item xs={6} md={4} lg={2}>

                                    <div className={classes.submitContainer}>
                                        <Button className={classes.submitButton}
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                            fullWidth
                                            disabled={loading}
                                        >
                                            Open Issue
                                        </Button>
                                        {loading && <CircularProgress size={24} className={classes.submitProgress} />}
                                    </div>

                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenIssues);