import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

export default class IssuesCard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Card>
                            <CardBody className="pt-0">
                                <CardTitle tag="h3" className="text-center">Issues</CardTitle>
                                
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}
