import React from 'react';
import { Button } from 'react-bootstrap';
import fire from '../firebase/firebase';

const logOutUser = () => {
    fire.auth().signOut();
};
const LogOut = () => {
    return <Button href="/" className="ml-3" onClick={logOutUser} children="Log Out" />;
};
export default LogOut;