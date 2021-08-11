import * as ActionTypes from "./ActionTypes";

export const Issues = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.CREATE_ISSUE:

            const newIssue = {
                issueName: payload.issueName,
                priority: payload.priority,
                status: "New",
                openedOn: new Date().toISOString(),
                openedBy: payload.openedBy,
                assignee: null,
                dateResolved: null,
                comments: []
            };

            return [...state, newIssue];
        default:
            return state;
    }
}