import React, { Component } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideNav from './SideNav/SideNav';

export default class TitleBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
        };
    }

    toggleDrawer = (open) => (event) => {
        this.setState({ drawerOpen: open });
    }

    render() {
        return (
            <>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.toggleDrawer(true)}>
                            <MenuIcon className="no-outline" />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Epsilon Bug Tracker
                        </Typography>
                    </Toolbar>
                </AppBar>
                <SideNav open={this.state.drawerOpen} toggleDrawer={this.toggleDrawer(false)} />
            </>
        );
    }
}
