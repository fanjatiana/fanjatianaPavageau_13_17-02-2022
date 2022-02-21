import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/argentBankLogo.png'
import LinksList from "../components/LinksList"

const Nav = () => {
    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo" >
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <LinksList />
        </nav>
    );
};

export default Nav;