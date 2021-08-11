import * as ActionTypes from './ActionTypes';

export const createIssue = (issueName, priority, openedBy) => ({
    type: ActionTypes.CREATE_ISSUE,
    payload: {
        issueName: issueName,
        priority: priority,
        openedBy: openedBy
    }
});