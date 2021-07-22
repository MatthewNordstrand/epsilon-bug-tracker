import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Modal, ModalHeader, ModalBody } from 'reactstrap';
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

                <Modal isOpen={this.state.openIssueModal} toggle={() => this.openIssueModalToggle()} className="open-issue-modal">
                    <ModalHeader>Open Issue</ModalHeader>
                    <ModalBody>
                        Hello world!
                    </ModalBody>
                </Modal>
            </>
        );
    }
}
