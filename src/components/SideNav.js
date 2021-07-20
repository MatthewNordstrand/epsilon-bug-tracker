import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';

export default class SideNav extends Component {
    render() {
        return (
            <Nav vertical className="mt-1">
                <NavItem>
                    <Button block color="danger" className="mb-1">Add Issue</Button>
                </NavItem>
                {/* <NavItem>
                    <Button block color="secondary" className="mb-1">View Reports</Button>
                </NavItem> */}
            </Nav>
        );
    }
}
