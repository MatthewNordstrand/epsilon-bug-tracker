import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class HeadButtons extends Component {
    render() {
        return (
            <div className="container text-left mt-1">
                <Button color="danger" size="lg">Add Issue</Button>
            </div>
        );
    }
}
