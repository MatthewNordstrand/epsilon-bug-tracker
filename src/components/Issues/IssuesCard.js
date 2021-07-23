import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Modal, ModalHeader, ModalBody, Form, Label, Input, Button } from 'reactstrap';
import IssuesButtonRow from './IssuesButtonRow';
import IssuesTable from './IssuesTable';

export default class IssuesCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openIssueModal: false,
        };
    }

    openIssueModalToggle = () => this.setState({ openIssueModal: !this.state.openIssueModal });

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <Card>
                                <CardBody className="pt-0 pb-0">
                                    <CardTitle tag="h3" className="text-center">Issues</CardTitle>
                                    <IssuesButtonRow openIssueModalToggle={() => this.openIssueModalToggle()} />
                                    <IssuesTable />
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>

                <Modal
                isOpen={this.state.openIssueModal}
                toggle={() => this.openIssueModalToggle()}
                className="open-issue-modal"
                size="xl">
                    <ModalHeader>Open Issue</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(e) => e.preventDefault()}>
                            <div className="row">
                                <div className="col-9">
                                    <Label for="openIssueTitle">Issue Name</Label>
                                    <Input type="text" name="openIssueTitle" id="openIssueTitle" />
                                </div>
                                <div className="col-3">
                                    <Label for="openIssuePriority">Priority</Label>
                                    <select className="custom-select" name="openIssuePriority" id="openIssuePriority">
                                        <option selected value="priorityLow">Low</option>
                                        <option value="priorityMedium">Medium</option>
                                        <option value="priorityHigh">High</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Label for="openIssueDescription">Description</Label>
                                    <textarea className="form-control no-resize" name="openIssueDescription" id="openIssueDescription" rows="15"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Button className="float-right m-1" color="success" size="lg">Submit</Button>
                                    <Button className="float-right m-1" color="danger" size="lg" onClick={() => this.openIssueModalToggle()}>Cancel</Button>
                                </div>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}
