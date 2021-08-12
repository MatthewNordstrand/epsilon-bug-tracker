import * as ActionTypes from "./ActionTypes";

export const Issues = (state = {
    issueNum: 1,
    issues: []
}, action) => {
    const curDate = new Date();

    switch (action.type) {
        case ActionTypes.CREATE_ISSUE:

            const newIssue = {
                id: state.issueNum,
                issueName: action.payload.issueName,
                desc: action.payload.desc,
                priority: action.payload.priority,
                status: "New",
                openedOn: curDate.toDateString(),
                openedBy: action.payload.openedBy,
                assignee: null,
                dateResolved: null,
                comments: []
            };

            return {...state, issues: [...state.issues, newIssue], issueNum: state.issueNum + 1};

        case ActionTypes.ASSIGN_ISSUE:

            const newIssuesAssign = state.issues.map(issue => {
                if (+issue.id === +action.payload.id) {
                    return {...issue, assignee: action.payload.assignee, status: "In Progress"};
                }
                return issue;
            });

            return {...state, issues: newIssuesAssign};
        
        case ActionTypes.ADD_COMMENT:

            const newIssuesAddComment = state.issues.map(issue => {
                if (+issue.id === +action.payload.issueId) {
                    return {...issue, comments: issue.comments.concat(
                        {
                            author: action.payload.author,
                            date: `${curDate.getMonth() + 1}/${curDate.getDate()}/${curDate.getFullYear()} ${curDate.getHours()}:${curDate.getMinutes()}`,
                            comment: action.payload.comment
                        }
                    )};
                }
                return issue;
            });

            return {...state, issues: newIssuesAddComment};

        default:
            return state;
    }
}