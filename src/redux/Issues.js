import * as ActionTypes from "./ActionTypes";

export const Issues = (state = {
    issueNum: 1,
    issues: []
}, action) => {
    switch (action.type) {
        case ActionTypes.CREATE_ISSUE:

            const newIssue = {
                id: state.issueNum,
                issueName: action.payload.issueName,
                desc: action.payload.desc,
                priority: action.payload.priority,
                status: "New",
                openedOn: new Date().toDateString(),
                openedBy: action.payload.openedBy,
                assignee: null,
                dateResolved: null,
                comments: []
            };

            return {...state, issues: [...state.issues, newIssue], issueNum: state.issueNum + 1};
        default:
            return state;
    }
}