import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { IconButton } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/Login';

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0();

    return (
        <IconButton onClick={() => loginWithRedirect()} color="inherit">
            <LoginIcon />
        </IconButton>
    );
}
