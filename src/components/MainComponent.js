import React, { Component } from 'react';
import IssuesPage from './Issues/IssuesPage';
import TitleBar from './TitleBar/TitleBar';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DashboardPage from './Dashboard/DashboardPage';
import Routes from '../shared/Routes';
import OpenIssues from './OpenIssues/OpenIssuesPage';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                {
                    id: 3,
                    issueName: 'This is cool',
                    priority: 'HIGH',
                    status: 'In Progress',
                    openedOn: '2021-07-20',
                    openedBy: 'Matt Nordstrand',
                    assignee: 'Matt Nordstrand',
                    dateResolved: ''
                },
                {
                    id: 4,
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
        const curPath = `.${this.props.location.pathname}`;
        const route = Routes.filter(route => route.path === curPath)[0];

        const routeName = route ? route.sidebarName : "Undefined";

        document.title = `Epsilon Bug Tracker - ${routeName}`;

        return (
            <div>
                <TitleBar title={routeName} />
                <Switch>
                    <Route path="/dashboard">
                        <DashboardPage />
                    </Route>
                    <Route path="/issues">
                        <IssuesPage issues={this.state.issueData} />
                    </Route>
                    <Route path="/openissue">
                        <OpenIssues />
                    </Route>
                    <Redirect to="./dashboard" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(MainComponent);