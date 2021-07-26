import React, { Component } from 'react';
import IssuesPage from './Issues/IssuesPage';
import TitleBar from './TitleBar/TitleBar';

export default class MainComponent extends Component {
    render() {
        return (
            <div>
                <TitleBar />
                <IssuesPage />
            </div>
        );
    }
}
