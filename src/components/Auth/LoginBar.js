import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const LoginBar = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="text-right mr-3 mt-1 mb-1">
                Loading...
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="text-right mr-3 mt-1 mb-1">
                Guest <LoginButton />
            </div>
        );
    }

    return (
        <div className="text-right mr-3 mt-1 mb-1">
            {user.name} <LogoutButton />
        </div>
    );
}

export default LoginBar;