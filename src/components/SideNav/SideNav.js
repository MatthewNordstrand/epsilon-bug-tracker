import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './burger-menu.css';

export default class SideNav extends Component {
    render() {
        return (
            <div>
                
                <Menu>
                    <a id="dashboard" className="menu-item" href="#">Dashboard</a>
                    <a id="dashboard" className="menu-item" href="#">Dashboard</a>
                    <a id="dashboard" className="menu-item" href="#">Dashboard</a>
                </Menu>
            </div>
        );
    }
}
