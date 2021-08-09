import React, { Component } from 'react';
import IssuesPage from './Issues/IssuesPage';
import TitleBar from './TitleBar/TitleBar';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DashboardPage from './Dashboard/DashboardPage';
import Routes from '../shared/Routes';
import OpenIssues from './OpenIssues/OpenIssuesPage';
import ViewIssuePage from './ViewIssues/ViewIssuePage';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        issueData: state.issueData,
    }
}

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
                    {/* <Route exact path="/">
                        <DashboardPage /> Dashboard is temporarily disabled because it doesn't display anything.
                    </Route> */}
                    <Route path="/issues">
                        <IssuesPage issues={this.props.issueData} />
                    </Route>
                    <Route path="/openissue">
                        <OpenIssues />
                    </Route>
                    <Route path="/viewissue/:issueID">
                        <ViewIssuePage issueData={this.props.issueData}/>
                    </Route>
                    {/* <Redirect to="/" /> */}
                    <Redirect to="/issues" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(MainComponent));