import React from 'react';
import { makeStyles, Grid, Paper, Typography, Button } from '@material-ui/core';
import IssuesGrid from './IssuesGrid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
    return {
        issues: state.issues.issues,
    }
}

function IssuesPage(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.pageContainer}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.titleHeading} variant="h3">Issues</Typography>
                        <Link to="/openissue">
                            <Button variant="contained" color="secondary" size="small">Open Issue</Button>
                        </Link>
                        <IssuesGrid issues={props.issues} />
                        {props.issues.length <= 0 && <h2 className={classes.titleHeading}>There are currently no issues in the system.</h2>}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default connect(mapStateToProps)(IssuesPage);