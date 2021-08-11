import React, { Component } from 'react';
import IssuesPage from './Issues/IssuesPage';
import TitleBar from './TitleBar/TitleBar';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DashboardPage from './Dashboard/DashboardPage';
import Routes from '../shared/Routes';
import OpenIssues from './OpenIssues/OpenIssuesPage';
import ViewIssuePage from './ViewIssues/ViewIssuePage';
import { connect } from 'react-redux';

class MainComponent extends Component {
    render() {
        const curPath = this.props.location.pathname;
        const matchingRoutes = Routes.filter(route => curPath.startsWith(route.path));
        const route = matchingRoutes[matchingRoutes.length - 1]; //Check if the curPath starts with route. We grab the last object because it is the most specific.

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
                        <IssuesPage />
                    </Route>
                    <Route path="/openissue">
                        <OpenIssues />
                    </Route>
                    <Route path="/viewissue/:issueID">
                        <ViewIssuePage />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(MainComponent);