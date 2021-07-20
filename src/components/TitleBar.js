import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';

export default class TitleBar extends Component {
    render() {
        return (
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Epsilon Bug Tracker</NavbarBrand>
                    <a className="btn btn-success btn-sm" href="#" target="_blank">Login</a>
                </div>
            </Navbar>
        );
    }
}
