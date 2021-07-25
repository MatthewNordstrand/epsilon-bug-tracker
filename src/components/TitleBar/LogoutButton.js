import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { IconButton } from '@material-ui/core';
import LogoutIcon from '@material-ui/icons/Logout';

export default function LogoutButton() {
    const { logout } = useAuth0();

    return (
        <IconButton onClick={() => logout()} color="inherit">
            <LogoutIcon />
        </IconButton>
    );
}
