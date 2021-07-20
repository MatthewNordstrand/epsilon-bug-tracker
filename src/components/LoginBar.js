import { Button } from 'reactstrap';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default class LoginBar extends Component {
    render() {
        return (
            <div className="text-right mr-3 mt-1 mb-1">
                Anonymous <Button size="sm"><FontAwesomeIcon icon={faSignInAlt}/> Login</Button>
            </div>
        );
    }
}
