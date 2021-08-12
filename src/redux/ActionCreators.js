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

export const assignIssue = (id, assignee) => ({
    type: ActionTypes.ASSIGN_ISSUE,
    payload: {
        id: id,
        assignee: assignee
    }
});