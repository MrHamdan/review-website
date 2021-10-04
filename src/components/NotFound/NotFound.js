import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import errorLogo from '../../images/error.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound-container custom-bg py-5">
            <img src={errorLogo} alt="" />
            <h1 className="py-5 text-design">404 Page Not Found</h1>
            <NavLink to="/home"><Button className="shadow-lg" variant="danger">Return to Home</Button></NavLink>
        </div>
    );
};

export default NotFound;