import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideNav from '../SideNav/SideNav';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    title: {
        marginLeft: theme.spacing(1),
        flexGrow: 1,
    },
    link: {
        color: "inherit",
        textDecoration: "none",
    }
}));

export default function TitleBar(props) {
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
                    <Typography variant="caption">
                        Loading...
                    </Typography>
                </div>
            );
        }

        if (!isAuthenticated) {
            return (
                <div>
                    <Typography variant="caption">
                        Guest
                    </Typography>
                    <LoginButton />
                </div>
            );
        }

        return (
            <div>
                <Typography variant="caption">
                    {user.name}
                </Typography>
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
                    <Link className={classes.link} to="./dashboard">
                        <Typography variant="h6">
                            Epsilon Bug Tracker
                        </Typography>
                    </Link>
                    <Typography className={classes.title} variant="caption">
                        {props.title}
                    </Typography>
                    {getLoginStatus()}
                </Toolbar>
            </AppBar>
            <SideNav open={drawerOpen} toggleDrawer={toggleDrawer} />
        </>
    );
}
