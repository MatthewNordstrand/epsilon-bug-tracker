import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import IssuesTable from './IssuesTable';

export default class IssuesCard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Card>
                            <CardBody className="pt-0">
                                <CardTitle tag="h3" className="text-center">Issues</CardTitle>
                                <IssuesTable />
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}
