import React, { Component } from 'react';
import IssuesPage from './Issues/IssuesPage';
import TitleBar from './TitleBar/TitleBar';

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: "Issues",
            issueData: [
                {
                    id: 1,
                    issueName: 'Test Issue',
                    priority: 'HIGH',
                    status: 'In Progress',
                    openedOn: '2021-07-20',
                    openedBy: 'Matt Nordstrand',
                    assignee: 'Matt Nordstrand',
                    dateResolved: ''
                },
                {
                    id: 2,
                    issueName: 'Ooga Booga',
                    priority: 'LOW',
                    status: 'New',
                    openedOn: '2021-07-20',
                    openedBy: 'Matt Nordstrand',
                    assignee: '',
                    dateResolved: ''
                },
                {id: 3,
                    issueName: 'This is cool',
                    priority: 'HIGH',
                    status: 'In Progress',
                    openedOn: '2021-07-20',
                    openedBy: 'Matt Nordstrand',
                    assignee: 'Matt Nordstrand',
                    dateResolved: ''
                },
                {id: 4,
                    issueName: 'Test Issue',
                    priority: 'HIGH',
                    status: 'In Progress',
                    openedOn: '2021-07-20',
                    openedBy: 'Matt Nordstrand',
                    assignee: 'Matt Nordstrand',
                    dateResolved: ''
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <TitleBar title={this.state.pageTitle} />
                <IssuesPage issues={this.state.issueData} />
            </div>
        );
    }
}
