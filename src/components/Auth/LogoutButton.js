import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button onClick={() => logout()}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
        </Button>
    )
}

export default LogoutButton
