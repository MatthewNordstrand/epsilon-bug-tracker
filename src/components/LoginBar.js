import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default class LoginBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
    }

    toggleModal() {
        this.setState({ modal: !this.state.modal });
    }

    render() {
        return (
            <div className="text-right mr-3 mt-1 mb-1">
                {this.props.username} <Button size="sm" onClick={() => this.toggleModal()}><FontAwesomeIcon icon={faSignInAlt}/> Login{this.state.modal}</Button>

                <Modal isOpen={this.state.modal} toggle={() => this.toggleModal()} className="loginModal">
                    <ModalHeader toggle={() => this.toggleModal()}>Login</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
