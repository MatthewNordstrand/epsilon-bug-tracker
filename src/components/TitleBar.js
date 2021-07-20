import { Navbar, NavbarBrand } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

export default class TitleBar extends Component {
    render() {
        return (
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Epsilon Bug Tracker</NavbarBrand>
                    <a className="btn btn-success btn-sm" href="#"><FontAwesomeIcon icon={faSignInAlt}/> Login</a>
                </div>
            </Navbar>
        );
    }
}
