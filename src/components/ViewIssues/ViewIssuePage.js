import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useParams } from "react-router";

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

export default function ViewIssuePage(props) {
    const classes = useStyles();
    let { issueID } = useParams();

    const issue = props.issueData.filter(issue => issue.id === +issueID)[0];

    return(
        <div className={classes.pageContainer}>
            <Paper className={classes.paper}>
                <Typography className={classes.titleHeading} variant="h3">Issue #{issueID}: {issue.issueName}</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Paper>
                            Hi
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper>
                            Yooo
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}