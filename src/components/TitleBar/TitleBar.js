import React, { useState } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography, List, ListItem, ListItemText, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideNav from '../SideNav/SideNav';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
    title: {
        marginLeft: theme.spacing(1),
        flexGrow: 1,
    },
}));

export default function TitleBar() {
    const classes = useStyles();
    const { user, isAuthenticated, isLoading } = useAuth0();

    const [drawerOpen, setDrawerOpen] = useState(false);

    function toggleDrawer() {
        setDrawerOpen(!drawerOpen);
    }

    function getLoginStatus() {
        if (isLoading)
        {
            return (
                <div>
                    Loading...
                </div>
            );
        }

        if (!isAuthenticated) {
            return (
                <div>
                    Guest
                    <LoginButton />
                </div>
            );
        }

        return (
            <div>
                {user.name}
                <LogoutButton />
            </div>
        );
    }

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Epsilon Bug Tracker
                    </Typography>
                    <Typography className={classes.title} variant="subtitle2" color="inherit">
                        Issues
                    </Typography>
                    {getLoginStatus()}
                </Toolbar>
            </AppBar>
            <SideNav open={drawerOpen} toggleDrawer={toggleDrawer} />
        </>
    );
}
