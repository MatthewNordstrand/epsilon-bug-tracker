import React, { Component } from 'react';
import TitleBar from '../TitleBar';
import LoginBar from '../Auth/LoginBar';
import IssuesCard from '../Issues/IssuesCard';

export default class IssueListManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issueList: [],
        };
    }

    addIssue(newIssueData) {
        this.setState({ issueData: [...this.state.issueList, newIssueData] });
    }

    render() {
        return (
            <>
                <TitleBar />
                <LoginBar />
                <IssuesCard issueList={this.state.issueList} addIssue={this.addIssue} />
            </>
        );
    }
}
