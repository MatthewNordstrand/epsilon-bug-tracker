import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class IssuesButtonRow extends Component {
    render() {
        return (
            <div className="mb-1">
                <Button color="danger">Open Issue</Button>
            </div>
        );
    }
}
