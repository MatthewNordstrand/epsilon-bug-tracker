import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, Label, Input, Button } from 'reactstrap';

export default class OpenIssueModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                isOpen={this.props.openIssueModal}
                toggle={this.props.openIssueModalToggle}
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
                                <div className="col text-right">
                                    <Button className="m-1" color="danger" size="lg" onClick={this.props.openIssueModalToggle}>Cancel</Button>
                                    <Button className="m-1" color="success" size="lg">Submit</Button>
                                </div>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
        );
    }
}
