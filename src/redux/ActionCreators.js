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