import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class IssuesButtonRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mb-1">
                <Button color="danger" onClick={this.props.openIssueModalToggle}>Open Issue</Button>
            </div>
        );
    }
}
