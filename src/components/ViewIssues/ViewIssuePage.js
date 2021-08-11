import React from "react";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    outerPaper: {
        padding: theme.spacing(2),
        paddingTop: 0,
    },
    pageContainer: {
        padding: theme.spacing(2),
    },
    titleHeading: {
        textAlign: "center",
    },
    innerPaper: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    button: {
        marginBottom: theme.spacing(1),
    },
}));

const mapStateToProps = state => {
    return {
        issues: state.issues,
    }
}

function ViewIssuePage(props) {
    const classes = useStyles();
    let { issueID } = useParams();
    const history = useHistory();

    const issue = props.issues.issues.filter(issue => issue.id === +issueID)[0];

    const desc = issue.desc.split('\n').map((line, i) => (
        <span key={i}>
            {line}
            <br />
        </span>
    ));

    if (!issue) {
        history.push("/issues");

        return(<div />);
    }

    return(
        <div className={classes.pageContainer}>
            <Paper className={classes.outerPaper}>
                <Typography className={classes.titleHeading} variant="h3">Issue #{issueID}: {issue.issueName}</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={3}>

                        <Link to="/issues">
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="secondary"
                                startIcon={<ArrowBackIcon />}
                            >
                                Return to Issues
                            </Button>
                        </Link>

                        <Paper variant="outlined" className={classes.innerPaper}>
                            <Typography variant="body1">{issue.openedBy} opened this on {issue.openedOn}</Typography>
                            <Typography variant="body2">{issue.comments.length} comments</Typography>
                            <Typography variant="body1">Status: {issue.status}</Typography>
                            <Typography variant="body1">Priority: {priorityFormat(issue.priority)}</Typography>
                            <Typography variant="body1">{issue.assignee ? `Assigned to: ${issue.assignee}` : "NOT ASSIGNED"}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper variant="outlined" className={classes.innerPaper}>
                            <Typography variant="body1">{desc}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

function priorityFormat(priority) {
    switch(priority) {
        case "priorityLow":
            return "Low";
        case "priorityMed":
            return "Medium";
        case "priorityHigh":
            return "High";
        default:
            return priority;
    }
}

export default connect(mapStateToProps)(ViewIssuePage);