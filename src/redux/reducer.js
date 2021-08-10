import { ISSUE_DATA } from '../shared/IssueData';

export const initialState = {
    issueData: ISSUE_DATA,
    issueNum: 1,
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "issues/issueAdded": {
            return {
                ...state,
                issueData: [
                    ...state.issueData,
                    {
                        id: state.issueNum,
                        issueName: action.issueName,
                        priority: action.priority,
                        status: action.status,
                        openedOn: action.openedOn,
                        openedBy: action.openedBy,
                        description: action.description,
                    }
                ],
                issueNum: state.issueNum + 1,
            }
        }
        default:
            return state;
    }
}