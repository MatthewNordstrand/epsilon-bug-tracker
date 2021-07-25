import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

export default function SideNav(props) {
    const classes = useStyles();

    return (
        <Drawer anchor="left" open={props.open} onClose={props.toggleDrawer}>
            <List className={classes.list}>
                <ListItem button>
                    <ListItemText>Dashboard</ListItemText>
                </ListItem>
                <ListItem button selected>
                    <ListItemText>Issues</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>Stats</ListItemText>
                </ListItem>
            </List>
        </Drawer>
    );
}
