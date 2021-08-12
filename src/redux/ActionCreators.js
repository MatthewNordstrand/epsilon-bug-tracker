import * as ActionTypes from './ActionTypes';

export const createIssue = (issueName, desc, priority, openedBy) => ({
    type: ActionTypes.CREATE_ISSUE,
    payload: {
        issueName: issueName,
        desc: desc,
        priority: priority,
        openedBy: openedBy
    }
});

export const assignIssue = (issueId, assignee) => ({
    type: ActionTypes.ASSIGN_ISSUE,
    payload: {
        issueId: issueId,
        assignee: assignee
    }
});

export const completeIssue = (issueId) => ({
    type: ActionTypes.COMPLETE_ISSUE,
    payload: {
        issueId: issueId
    }
});

export const addComment = (issueId, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        issueId: issueId,
        author: author,
        comment: comment,
    }
});