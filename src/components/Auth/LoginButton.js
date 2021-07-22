import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button onClick={() => loginWithRedirect()}>
            <FontAwesomeIcon icon={faSignInAlt} />Log In
        </Button>
    )
}

export default LoginButton
