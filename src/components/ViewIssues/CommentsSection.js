import { makeStyles, Paper, Typography, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

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

export default function CommentsSection({comments}) {
    const classes = useStyles();
    const [newComment, setNewComment] = useState("");

    return (
        <Paper className={classes.outerPaper} variant="outlined">
            <Typography variant="h4">Comments</Typography>
            <Comment author="Matt Nordstrand" date="2/4/1994" comment="message of the comment" />
            <div className={classes.textFieldContainer}>
                <TextField
                    id="comment"
                    name="comment"
                    className={classes.textField}
                    label="Enter Comment Here"
                    fullWidth
                    variant="outlined"
                    value={newComment}
                    onChange={e => setNewComment(e.value)}
                />
                <Button variant="contained">Submit Comment</Button>
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