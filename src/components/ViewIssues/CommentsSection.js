import { makeStyles, Paper, Typography, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
    outerPaper: {
        marginTop: theme.spacing(2),
    },
    commentPaper: {
        margin: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    textFieldContainer: {
        padding: theme.spacing(1),
    },
    textField: {
        marginBottom: theme.spacing(1),
    },
}));

export default function CommentsSection({comments, issueId, addComment}) {
    const classes = useStyles();
    const { user, isAuthenticated } = useAuth0();
    const [newComment, setNewComment] = useState("");

    const submitComment = () => {
        if (newComment == "") return; //Do nothing if there is no comment.

        addComment(issueId, isAuthenticated ? user.name : "Guest", newComment);

        setNewComment("");
    }

    const curComments = comments.map(comment => {
        return (<Comment author={comment.author} date={comment.date} comment={comment.comment} />);
    });

    return (
        <Paper className={classes.outerPaper} variant="outlined">
            <Typography variant="h4">Comments</Typography>
            
            {curComments}

            {comments.length <= 0 && <h4>&emsp;There are currently no comments.</h4>}

            <div className={classes.textFieldContainer}>
                <TextField
                    id="comment"
                    name="comment"
                    className={classes.textField}
                    label="Enter Comment Here"
                    fullWidth
                    variant="outlined"
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                />
                <Button variant="contained" onClick={() => submitComment()}>Submit Comment</Button>
            </div>
        </Paper>
    );
}

function Comment({author, date, comment}) {
    const classes = useStyles();

    return (
        <Paper variant="outlined" className={classes.commentPaper}>
            <Typography variant="body1">{comment}</Typography>
            <Typography variant="subtitle2">&emsp;-- {author}, {date}</Typography>
        </Paper>
    );
}