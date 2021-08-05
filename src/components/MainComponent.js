import React, { Component } from 'react';
import IssuesPage from './Issues/IssuesPage';
import TitleBar from './TitleBar/TitleBar';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DashboardPage from './Dashboard/DashboardPage';
import Routes from '../shared/Routes';
import OpenIssues from './OpenIssues/OpenIssuesPage';
import ViewIssuePage from './ViewIssues/ViewIssuePage';

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
        const curPath = this.props.location.pathname;
        const matchingRoutes = Routes.filter(route => curPath.startsWith(route.path));
        const route = matchingRoutes[matchingRoutes.length - 1]; //Check if the curPath starts with route

        const routeName = route ? route.sidebarName : "Undefined";

        document.title = `Epsilon Bug Tracker - ${routeName}`;

        return (
            <div>
                <TitleBar title={routeName} />
                <Switch>
                    <Route exact path="/">
                        <DashboardPage />
                    </Route>
                    <Route path="/issues">
                        <IssuesPage issues={this.state.issueData} />
                    </Route>
                    <Route path="/openissue">
                        <OpenIssues />
                    </Route>
                    <Route path="/viewissue/:issueID">
                        <ViewIssuePage issueID={1}/>
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(MainComponent);