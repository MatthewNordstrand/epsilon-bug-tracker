import React from 'react';
import { Drawer, ListItemText, MenuItem, MenuList } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { NavLink, withRouter } from 'react-router-dom';
import Routes from '../../shared/Routes';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    navLink: {
        color: "inherit",
        textDecoration: "none",
    }
});

function SideNav(props) {
    const classes = useStyles();

    const activeRoute = (routeName) => {
        return props.location.pathname === routeName.slice(1);
    }

    return (
        <Drawer anchor="left" open={props.open} onClose={props.toggleDrawer} onClick={props.toggleDrawer}>
            <MenuList className={classes.list}>
                {Routes.map((prop, key) => {
                    return (
                        <NavLink to={prop.path} style={{ textDecoration: "none", color: "inherit" }}>
                            <MenuItem selected={activeRoute(prop.path)}>
                                <ListItemText primary={prop.sidebarName} />
                            </MenuItem>
                        </NavLink>
                    );
                })}
            </MenuList>
        </Drawer>
    );
}

export default withRouter(SideNav);