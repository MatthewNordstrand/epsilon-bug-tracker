import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './burger-menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faBug, faChartPie, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default class SideNav extends Component {
    render() {
        return (
            <div>
                
                <Menu>
                    <a id="dashboard" className="btn btn-primary mb-2" href="#"><FontAwesomeIcon icon={faClipboardList} /> Dashboard</a>
                    <a id="dashboard" className="btn btn-primary mb-2" href="#"><FontAwesomeIcon icon={faBug} /> Issues</a>
                    <a id="dashboard" className="btn btn-primary mb-2" href="#"><FontAwesomeIcon icon={faChartPie} /> Reports</a>
                </Menu>
            </div>
        );
    }
}
