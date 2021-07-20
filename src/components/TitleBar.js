import { Navbar, NavbarBrand } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

export default class TitleBar extends Component {
    render() {
        return (
            <Navbar dark color="primary">
                <div className="container justify-content-center">
                    <NavbarBrand>Epsilon Bug Tracker</NavbarBrand>
                    
                </div>
            </Navbar>
        );
    }
}
