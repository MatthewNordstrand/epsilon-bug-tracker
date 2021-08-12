import React from "react";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import DoneIcon from '@material-ui/icons/Done';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { green } from '@material-ui/core/colors';
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { assignIssue, completeIssue, addComment } from "../../redux/ActionCreators";
import { useAuth0 } from "@auth0/auth0-react";
import CommentsSection from "./CommentsSection";

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
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    descPaper: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
    completeButton: {
        margin: theme.spacing(1),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        }
    },
}));

const mapStateToProps = state => {
    return {
        issues: state.issues,
    }
}

const mapDispatchToProps = {
    assignIssue: (issueId, assignee) => (assignIssue(issueId, assignee)),
    completeIssue: (issueId) => (completeIssue(issueId)),
    addComment: (issueId, author, comment) => (addComment(issueId, author, comment)),
};

function ViewIssuePage(props) {
    const classes = useStyles();
    let { issueID } = useParams();
    const history = useHistory();
    const { user, isAuthenticated } = useAuth0();

    const issue = props.issues.issues.filter(issue => issue.issueId === +issueID)[0];

    if (!issue) {
        history.push("/issues");

        return(<div />);
    }

    const desc = issue.desc.split('\n').map((line, i) => (
        <span key={i}>
            {line}
            <br />
        </span>
    ));

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

                        <Button
                            className={classes.button}
                            variant="contained"
                            startIcon={<DeveloperModeIcon />}
                            onClick={() => props.assignIssue(issueID, isAuthenticated ? user.name : "Guest")}
                            disabled={issue.assignee}
                        >
                            Claim Issue
                        </Button>

                        <br />

                        <Button
                            className={classes.completeButton}
                            variant="contained"
                            startIcon={<DoneIcon />}
                            onClick={() => props.completeIssue(issueID)}
                            disabled={!issue.assignee || issue.status === "Complete"}
                        >
                            Mark as Complete
                        </Button>

                        <br />

                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            startIcon={<DeleteForeverIcon />}
                        >
                            Delete Issue
                        </Button>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper variant="outlined" className={classes.descPaper}>
                            <Typography variant="h4">Issue Details</Typography>
                            <Typography variant="body1">{desc}</Typography>
                        </Paper>
                        <CommentsSection comments={issue.comments} issueId={issue.id} addComment={props.addComment} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewIssuePage);